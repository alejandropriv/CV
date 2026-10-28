## Run the local Go server and Gotenberg

```sh
docker compose up -d
```

Stop the services with `docker compose down`.

```sh
docker compose down
```

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
