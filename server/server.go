package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	addr := envOrDefault("CV_ADDR", ":8080")
	staticDir := envOrDefault("CV_STATIC_DIR", "src")

	staticFiles := http.FileServer(http.Dir(staticDir))
	mux := http.NewServeMux()
	mux.Handle("/", staticFiles)

	serveIndex := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		request := r.Clone(r.Context())
		urlCopy := *r.URL
		urlCopy.Path = "/"
		request.URL = &urlCopy
		staticFiles.ServeHTTP(w, request)
	})
	for _, route := range []string{"/en", "/en1", "/de", "/de1", "/es", "/es1"} {
		mux.Handle(route, serveIndex)
	}

	log.Printf("Serving %s on http://%s", staticDir, addr)
	log.Fatal(http.ListenAndServe(addr, mux))
}

func envOrDefault(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}
