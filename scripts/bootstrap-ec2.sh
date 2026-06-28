#!/usr/bin/env bash
set -euo pipefail

if command -v apt-get >/dev/null 2>&1; then
  sudo apt-get update
  sudo apt-get install -y awscli docker.io
elif command -v dnf >/dev/null 2>&1; then
  sudo dnf install -y awscli docker
elif command -v yum >/dev/null 2>&1; then
  sudo yum install -y awscli docker
else
  echo "Unsupported package manager. Install Docker and AWS CLI manually."
  exit 1
fi

if command -v systemctl >/dev/null 2>&1; then
  sudo systemctl enable docker
  sudo systemctl start docker
else
  sudo service docker start
fi

if ! id -nG "$USER" | grep -qw docker; then
  sudo usermod -aG docker "$USER"
  echo "Added $USER to the docker group. Log out and back in before testing Docker without sudo."
fi

echo "EC2 bootstrap complete."
