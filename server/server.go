package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	port := ":8080"
	fmt.Printf("Server starting on http://localhost%s\n", port)


		// Rewrite /en to /
	http.HandleFunc("/en", func(w http.ResponseWriter, r *http.Request) {
		r.URL.Path = "/"
		http.DefaultServeMux.ServeHTTP(w, r)
	})
	// Rewrite /de to /
	http.HandleFunc("/de", func(w http.ResponseWriter, r *http.Request) {
		r.URL.Path = "/"
		http.DefaultServeMux.ServeHTTP(w, r)
	})
	// Rewrite /es to /
	http.HandleFunc("/es", func(w http.ResponseWriter, r *http.Request) {
		r.URL.Path = "/"
		http.DefaultServeMux.ServeHTTP(w, r)
	})	

	// Serve static files from current directory
	http.Handle("/", http.FileServer(http.Dir("./src")))


	log.Fatal(http.ListenAndServe(port, nil))
}
