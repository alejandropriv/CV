FROM golang:1.21-alpine

# Set working directory
WORKDIR /app

# Copy the Go server and src files
COPY server/server.go .
# COPY src ./src

# Expose the port
EXPOSE 8080

# Build the Go server
RUN go build -o server server.go

# Run the server
CMD ["./server"]