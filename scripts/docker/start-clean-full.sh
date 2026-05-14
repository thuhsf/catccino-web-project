#!/usr/bin/env bash

set -e

echo "🛑 Derrubando containers antigos..."
docker compose down --remove-orphans

echo "🧹 Removendo containers órfãos/parados..."
docker container prune -f

echo "🗑️ Removendo images e volumes antigos do compose..."
docker compose down --rmi all --volumes --remove-orphans

echo "🔨 Buildando sem cache..."
docker compose build --no-cache

echo ""
read -p "Deseja iniciar em background (-d)? (y/N): " detached

echo "🚀 Iniciando containers..."

if [[ "$detached" == "y" || "$detached" == "Y" ]]; then
    docker compose up -d
    echo "✅ Containers iniciados em background."
else
    docker compose up
fi