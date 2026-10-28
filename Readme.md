## Project layout and generated files

- `src/` contains the website, language data, styles, scripts, and images.
- `server/` contains the Go web server. `go.mod`, `Dockerfile`, and the Compose files define how it is built and run.
- `docx.py` generates Word documents from the language JSON files; `requirements.txt` lists its Python dependency.
- `reload.sh` generates PDF runs. Each successful run is stored in `output/runs/<UTC timestamp>/`, including the original and compressed PDFs. These run folders are ignored by Git.
- `output/final/` is reserved for deliverables selected and copied there manually. It is trackable by Git; `reload.sh` never writes to it.
- Running `python docx.py` directly writes one Word document to `output/alejandro-prieto-cv.docx` by default. `./reload.sh --docx` adds a Word document for every discovered language file to the timestamped run folder.
- Language URLs use `/es` for `src/es/language.json`, `/es/1` for `src/es/language1.json`, and `/es/2` for `src/es/language2.json`. Existing `/es1` URLs remain aliases for `/es/1`; the same convention applies to other language codes.

Any root-level files left by older generation workflows are legacy outputs; the current `reload.sh` does not read or overwrite them.

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

Each successful run writes a compressed PDF and its original version for every discovered language file to a new UTC timestamped folder under `output/runs/`. Copy the versions you want to keep into `output/final/` manually; the script never updates that folder. The filename suffix is the language code plus its optional numeric version, so `src/es/language2.json` produces the `es2` PDF/DOCX filename and uses `/es/2` for PDF rendering.

To include Word documents in the same run folder, activate the Python virtual environment and run:

```sh
./reload.sh --docx
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
