docker info >/dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "Docker is running"
else
  echo "Docker is NOT running"
  exit 1
fi

docker compose down
docker rmi cv-web:latest
# docker image prune -a  
rm -r ./output

docker compose up -d

mkdir ./output

until curl -sf http://localhost:3000/health; do
  echo "Waiting for Gotenberg..."
  sleep 5
done

curl -X POST -F "url=http://host.docker.internal:8080/en" \
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
  -o ./output/cv-en-orig.pdf

gs -sDEVICE=pdfwrite \
   -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=./output/alejandro-prieto-cv-en.pdf \
   ./output/cv-en-orig.pdf

curl -X POST -F "url=http://host.docker.internal:8080/en1" \
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
  -o ./output/cv-en1-orig.pdf

gs -sDEVICE=pdfwrite \
   -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=./output/alejandro-prieto-cv-en1.pdf \
   ./output/cv-en1-orig.pdf



curl -X POST -F "url=http://host.docker.internal:8080/de" \
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
  -o ./output/cv-de-orig.pdf

gs -sDEVICE=pdfwrite \
   -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=./output/alejandro-prieto-cv-de.pdf \
   ./output/cv-de-orig.pdf

curl -X POST -F "url=http://host.docker.internal:8080/de1" \
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
  -o ./output/cv-de1-orig.pdf

gs -sDEVICE=pdfwrite \
   -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=./output/alejandro-prieto-cv-de1.pdf \
   ./output/cv-de1-orig.pdf



curl -X POST -F "url=http://host.docker.internal:8080/es" \
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
  -o ./output/cv-es-orig.pdf

gs -sDEVICE=pdfwrite \
   -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=./output/alejandro-prieto-cv-es.pdf \
   ./output/cv-es-orig.pdf

curl -X POST -F "url=http://host.docker.internal:8080/es1" \
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
  -o ./output/cv-es1-orig.pdf

gs -sDEVICE=pdfwrite \
   -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=./output/alejandro-prieto-cv-es1.pdf \
   ./output/cv-es1-orig.pdf