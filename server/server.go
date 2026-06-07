package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	port := ":8080"
	fmt.Printf("Server starting on http://localhost%s\n", port)

	rewriteToRoot := func(w http.ResponseWriter, r *http.Request) {
		r.URL.Path = "/"
		http.DefaultServeMux.ServeHTTP(w, r)
	}

	for _, route := range []string{"/en", "/en1", "/de", "/de1", "/es", "/es1"} {
		http.HandleFunc(route, rewriteToRoot)
	}

	// Serve static files from current directory
	http.Handle("/", http.FileServer(http.Dir("./src")))

	log.Fatal(http.ListenAndServe(port, nil))
}
