package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	port := ":8080"
	fmt.Printf("Server starting on http://localhost%s\n", port)
	fmt.Println("Press Ctrl+C to stop the server")

	// Serve static files from current directory
	http.Handle("/", http.FileServer(http.Dir("./src")))

	log.Fatal(http.ListenAndServe(port, nil))
}
