package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

var languageCode = regexp.MustCompile(`^[a-z]{2}(?:-[a-z]{2})?$`)
var versionNumber = regexp.MustCompile(`^[1-9][0-9]*$`)
var legacyLanguageRoute = regexp.MustCompile(`^([a-z]{2}(?:-[a-z]{2})?)([1-9][0-9]*)$`)

func main() {
	addr := envOrDefault("CV_ADDR", ":8080")
	staticDir := envOrDefault("CV_STATIC_DIR", "src")
	staticFiles := http.FileServer(http.Dir(staticDir))

	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		language, version, isLanguageRoute := parseLanguageRoute(r.URL.Path)
		if !isLanguageRoute {
			staticFiles.ServeHTTP(w, r)
			return
		}

		dataFile := "language" + version + ".json"
		dataPath := filepath.Join(staticDir, language, dataFile)
		info, err := os.Stat(dataPath)
		if err != nil || !info.Mode().IsRegular() {
			http.Error(w, "Language page not found: "+r.URL.Path, http.StatusNotFound)
			return
		}

		request := r.Clone(r.Context())
		urlCopy := *r.URL
		urlCopy.Path = "/"
		request.URL = &urlCopy
		staticFiles.ServeHTTP(w, request)
	})

	log.Printf("Serving %s on http://%s", staticDir, addr)
	log.Fatal(http.ListenAndServe(addr, mux))
}

// parseLanguageRoute maps /es to language.json, /es/2 to language2.json,
// and a legacy /es2 route to the same versioned page.
func parseLanguageRoute(requestPath string) (language, version string, ok bool) {
	trimmed := strings.Trim(requestPath, "/")
	if trimmed == "" {
		return "en", "", true
	}

	parts := strings.Split(trimmed, "/")
	if len(parts) == 1 {
		if languageCode.MatchString(parts[0]) {
			return parts[0], "", true
		}
		if match := legacyLanguageRoute.FindStringSubmatch(parts[0]); match != nil {
			return match[1], match[2], true
		}
	}
	if len(parts) == 2 && languageCode.MatchString(parts[0]) && versionNumber.MatchString(parts[1]) {
		return parts[0], parts[1], true
	}
	return "", "", false
}

func envOrDefault(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}
