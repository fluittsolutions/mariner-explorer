# Mariner Explorer 1.0 — clean release

14 bundled PNG deck plans in `deck-plans/` (Decks 2–15). No manual deck import required. Offline service worker precaches all plans. Discovery markers, drawings, photos, and JSON backup/merge are included. Discoveries are saved per device, not synchronized automatically.

## Upload to GitHub
Upload the *contents* of this ZIP to the repository root, keeping the `deck-plans/` folder and its 14 images together. GitHub Pages should serve from main / root. Do not upload the ZIP itself.

## Important when replacing an old deployment
Old service workers may briefly display older files. Do not clear browser site data if you need to preserve discoveries. If you want a completely fresh installation, using a new repository URL avoids old service worker caches.
