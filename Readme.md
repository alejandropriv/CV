## Run the local Go server and Gotenberg

```sh
docker compose up -d
```

Use Docker Compose v2.20 or newer; PDF generation waits for Gotenberg's health check before starting.

Stop the services with `docker compose down`.

```sh
docker compose down
```

For local development without Docker, run `go run ./server` from the project root. The server listens on `:8080` and serves files from `src` by default. Override those settings with `CV_ADDR` and `CV_STATIC_DIR` if needed.

## Update the PDF

```sh
./reload.sh
```

## Generate a Word document

Create and activate the project virtual environment, then install dependencies:

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```

Generate the default English document (or pass `--lang de` / `--lang es`):

```sh
python docx.py
```

The generated document is saved under `output/`. Refresh Firefox with `Cmd+Shift+R` to reload the local page.
