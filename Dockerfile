FROM golang:1.21-alpine AS build

WORKDIR /src
COPY go.mod ./
COPY server ./server
RUN mkdir -p /out && go build -o /out/cv-server ./server

FROM alpine:3.20

WORKDIR /app
COPY --from=build /out/cv-server ./cv-server
COPY src ./src

ENV CV_ADDR=0.0.0.0:8080
ENV CV_STATIC_DIR=/app/src

EXPOSE 8080
CMD ["./cv-server"]
