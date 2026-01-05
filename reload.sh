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
   -sOutputFile=./output/cv-en.pdf \
   ./output/cv-en-orig.pdf



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
  -o ./output/cv-de.pdf

gs -sDEVICE=pdfwrite \
   -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=./output/cv-de.pdf \
   ./output/cv-de-orig.pdf



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
  -o ./output/cv-es.pdf

gs -sDEVICE=pdfwrite \
   -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=./output/cv-es.pdf \
   ./output/cv-es-orig.pdf

