package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
)

func main() {
	port := ":8080"
	fmt.Printf("Server starting on http://localhost%s\n", port)
	fmt.Println("Available routes:")
	fmt.Println("  - http://localhost:8080/en (English)")
	fmt.Println("  - http://localhost:8080/de (German)")
	fmt.Println("  - http://localhost:8080/es (Spanish)")
	fmt.Println("  - http://localhost:8080/ (Default - English)")
	fmt.Println("Press Ctrl+C to stop the server")

	// Serve static files (CSS, JS, images)
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("src/js"))))
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("src/css"))))
	http.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir("src/images"))))

	// Language-specific routes
	http.HandleFunc("/en", handleLanguage("en", "loadLanguageEN"))
	http.HandleFunc("/de", handleLanguage("de", "loadLanguageDE"))
	http.HandleFunc("/es", handleLanguage("es", "loadLanguageES"))

	// Default route (English)
	http.HandleFunc("/", handleLanguage("en", "loadLanguageEN"))

	log.Fatal(http.ListenAndServe(port, nil))
}

func handleLanguage(lang, loadFunction string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Read the HTML file
		htmlContent, err := os.ReadFile("src/index.html")
		if err != nil {
			http.Error(w, "Error reading HTML file: "+err.Error(), http.StatusInternalServerError)
			return
		}

		// Convert to string and replace the language function
		htmlString := string(htmlContent)

		// Replace the language function call
		htmlString = strings.Replace(htmlString,
			"loadLanguageEN()",
			loadFunction+"()",
			1)

		// Add cache-busting parameter
		htmlString = strings.Replace(htmlString,
			"js/loadData.js?v=1.1",
			fmt.Sprintf("js/loadData.js?v=1.1&lang=%s", lang),
			1)

		// Set content type
		w.Header().Set("Content-Type", "text/html; charset=utf-8")

		// Write the modified HTML
		w.Write([]byte(htmlString))
	}
}
