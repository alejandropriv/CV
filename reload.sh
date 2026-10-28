#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

if ! docker info >/dev/null 2>&1; then
  echo "Docker is not running. Start Docker and try again." >&2
  exit 1
fi

if ! command -v gs >/dev/null 2>&1; then
  echo "Ghostscript (gs) is required to compress the generated PDFs." >&2
  exit 1
fi

mkdir -p output
docker compose up -d --build --wait --wait-timeout 180

generate_pdf() {
  local variant="$1"
  local original="output/cv-${variant}-orig.pdf"
  local compressed="output/alejandro-prieto-cv-${variant}.pdf"
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

echo "PDFs generated successfully in ./output."
