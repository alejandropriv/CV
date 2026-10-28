FROM golang:1.27.1-alpine3.24@sha256:8a5910f31396cd4d89662f56c68b3ae31d374308270a1c3bd96672ee5ed43414 AS build

WORKDIR /src
COPY go.mod ./
COPY server ./server
RUN mkdir -p /out && go build -o /out/cv-server ./server

FROM alpine:3.23.4@sha256:5b10f432ef3da1b8d4c7eb6c487f2f5a8f096bc91145e68878dd4a5019afde11

WORKDIR /app
COPY --from=build /out/cv-server ./cv-server
COPY src ./src

ENV CV_ADDR=0.0.0.0:8080
ENV CV_STATIC_DIR=/app/src

EXPOSE 8080
CMD ["./cv-server"]
