# Run a local go server and gotenberg
docker compose up -d
docker compose down

# To update the PDF
./reload.sh

# Reload firefox
cmd + shift + R

# Create the PDF
Check reload.sh script