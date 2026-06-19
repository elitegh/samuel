#!/usr/bin/env bash
# Re-download portfolio media (PNG + MP4) into public/media/
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MEDIA="$ROOT/public/media"

mkdir -p "$MEDIA"/{hero,contact,experience,journey}

echo "Downloading images..."
curl -fsSL "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=85&fm=jpg" -o "$MEDIA/hero/hero.jpg" || true
curl -fsSL "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=900" -o "$MEDIA/contact/location.jpg" || true

for pair in \
  "contact/email:https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=900&q=85&fm=jpg" \
  "contact/github:https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=85&fm=jpg" \
  "contact/linkedin:https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85&fm=jpg" \
  "contact/phone:https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=900&q=85&fm=jpg" \
  "experience/databricks:https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=85&fm=jpg" \
  "experience/solarwinds:https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=85&fm=jpg" \
  "experience/sailpoint:https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85&fm=jpg" \
  "experience/uship:https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=85&fm=jpg" \
  "journey/degree:https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=900" \
  "journey/career:https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900" \
  "journey/remote:https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=900"
do
  path="${pair%%:*}"
  url="${pair#*:}"
  curl -fsSL "$url" -o "$MEDIA/${path}.jpg" 2>/dev/null || true
  [ -f "$MEDIA/${path}.jpg" ] && cp "$MEDIA/${path}.jpg" "$MEDIA/${path}.png"
done

[ -f "$MEDIA/hero/hero.jpg" ] && cp "$MEDIA/hero/hero.jpg" "$MEDIA/hero/hero.png"

echo "Downloading videos (Google sample CDN)..."
BASE="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample"
curl -fL --retry 3 -o "$MEDIA/hero/hero.mp4" "$BASE/ForBiggerBlazes.mp4" || true
curl -fL --retry 3 -o "$MEDIA/experience/darabricks.mp4" "$BASE/ForBiggerEscapes.mp4" || true
curl -fL --retry 3 -o "$MEDIA/experience/solarwinds.mp4" "$BASE/ForBiggerFun.mp4" || true
curl -fL --retry 3 -o "$MEDIA/experience/sailpoint.mp4" "$BASE/ForBiggerJoyrides.mp4" || true
curl -fL --retry 3 -o "$MEDIA/experience/uship.mp4" "$BASE/ForBiggerMeltdowns.mp4" || true
curl -fL --retry 3 -o "$MEDIA/journey/highlights.mp4" "$BASE/ForBiggerBlazes.mp4" || true

echo "Done. Files in $MEDIA"
