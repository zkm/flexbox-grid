# Sass starter using Vite

## How to use this repo
1. Clone the repo
2. In your terminal, run `yarn`
3. In your terminal, run `yarn dev`

You are good to go! Vite will watch all your files for changes automatically and live update your browser.

## When you are ready to go to production
1. In your terminal, run `yarn build`. The final version of your site will be in the `dist` folder.
2. Optionally, preview the production build locally with `yarn preview`.

## Notes
- We migrated from Parcel to Vite to resolve a security advisory reported by `yarn audit` in `@parcel/reporter-dev-server` with no available patch. After the change and pinning `esbuild` to a patched version via Yarn `resolutions`, `yarn audit` reports 0 vulnerabilities.

