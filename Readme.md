# Run a local go server and gotenberg
docker compose up -d
docker compose down

# To update the PDF
./reload.sh

# Reload firefox
cmd + shift + R

# Create the PDF
curl -X POST \
  -F "url=http://host.docker.internal:8080" \
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
-o ./output/cv-english.pdf

curl -X POST \
  -F "url=http://host.docker.internal:8080/de" \
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
-o ./output/cv-de.pdf

curl -X POST \
  -F "url=http://host.docker.internal:8080/de1" \
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
-o ./output/cv-de1.pdf

curl -X POST \
  -F "url=http://host.docker.internal:8080/es" \
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
-o ./output/cv-es.pdf
