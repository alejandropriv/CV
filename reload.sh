#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

generate_docx=0
case "${1:-}" in
  "") ;;
  --docx) generate_docx=1 ;;
  --help|-h)
    echo "Usage: ./reload.sh [--docx]"
    echo "  --docx  Also generate all six Word documents in this run's output folder."
    exit 0
    ;;
  *)
    echo "Unknown option: $1" >&2
    echo "Usage: ./reload.sh [--docx]" >&2
    exit 2
    ;;
esac

if (( generate_docx )); then
  if [[ -z "${VIRTUAL_ENV:-}" ]]; then
    echo "Activate the project virtual environment before using --docx." >&2
    echo "  python3 -m venv .venv
            source .venv/bin/activate
            python -m pip install -r requirements.txt" >&2
    exit 1
  fi

  venv_dir="$(cd "$VIRTUAL_ENV" && pwd -P)"
  python_cmd="${PYTHON:-${venv_dir}/bin/python3}"
  python_path="$(command -v "$python_cmd" || true)"
  if [[ -z "$python_path" ]]; then
    echo "Python executable not found: ${python_cmd}" >&2
    exit 1
  fi

  python_dir="$(cd "$(dirname "$python_path")" && pwd -P)"
  if [[ "$python_dir" != "${venv_dir}/bin" ]]; then
    echo "${python_cmd} is outside the active virtual environment: ${VIRTUAL_ENV}" >&2
    echo "Unset PYTHON or select the venv interpreter at ${venv_dir}/bin/python3." >&2
    exit 1
  fi

  if ! "$python_path" -c 'from importlib.metadata import version; version("python-docx")' >/dev/null 2>&1; then
    echo "python-docx is not installed in the active virtual environment." >&2
    echo "Install it with: python -m pip install -r requirements.txt" >&2
    exit 1
  fi

  python_cmd="$python_path"
fi

if ! docker info >/dev/null 2>&1; then
  echo "Docker is not running. Start Docker and try again." >&2
  exit 1
fi

if ! command -v gs >/dev/null 2>&1; then
  echo "Ghostscript (gs) is required to compress the generated PDFs." >&2
  exit 1
fi

mkdir -p output/runs
docker compose up -d --build --wait --wait-timeout 180

timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
run_dir="output/runs/${timestamp}"
suffix=1
while [[ -e "$run_dir" ]]; do
  run_dir="output/runs/${timestamp}-${suffix}"
  ((suffix += 1))
done

staging_dir="$(mktemp -d "output/runs/.incomplete-${timestamp}.XXXXXX")"
trap 'if [[ -n "${staging_dir:-}" && -d "$staging_dir" ]]; then rm -rf -- "$staging_dir"; fi' EXIT

generate_pdf() {
  local variant="$1"
  local original="${staging_dir}/cv-${variant}-orig.pdf"
  local compressed="${staging_dir}/alejandro-prieto-cv-${variant}.pdf"
  local original_tmp="${original}.tmp"
  local compressed_tmp="${compressed}.tmp"

  echo "Generating ${variant} PDF..."
  curl --fail --silent --show-error \
    -X POST \
    -F "url=http://host.docker.internal:8080/${variant}" \
    http://localhost:3000/forms/chromium/convert/url \
    --form marginTop=0 \
    --form marginBottom=0 \
    --form marginLeft=0 \
    --form marginRight=0 \
    --form preferCssPageSize=false \
    --form printBackground=true \
    --form omitBackground=true \
    --form landscape=false \
    --form scale=1.0 \
    --form nativePageRanges=1-2 \
    -o "$original_tmp"

  gs -sDEVICE=pdfwrite \
    -dCompatibilityLevel=1.4 \
    -dPDFSETTINGS=/ebook \
    -dNOPAUSE -dQUIET -dBATCH \
    -sOutputFile="$compressed_tmp" \
    "$original_tmp"

  mv "$original_tmp" "$original"
  mv "$compressed_tmp" "$compressed"
}

for variant in en en1 de de1 es es1; do
  generate_pdf "$variant"
done

if (( generate_docx )); then
  for variant in en en1 de de1 es es1; do
    language="${variant%1}"
    data_file="src/${language}/language.json"
    if [[ "$variant" == *1 ]]; then
      data_file="src/${language}/language1.json"
    fi

    "$python_cmd" docx.py \
      --file "$data_file" \
      --out "${staging_dir}/alejandro-prieto-cv-${variant}.docx"
  done
fi

mv "$staging_dir" "$run_dir"
staging_dir=""

echo "Generated artifacts saved in ./${run_dir}."
