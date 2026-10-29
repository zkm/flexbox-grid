# Sass starter using Vite

[![Deploy to Pages](https://github.com/zkm/flexbox-grid/actions/workflows/pages.yml/badge.svg)](https://github.com/zkm/flexbox-grid/actions/workflows/pages.yml)
[![live demo](https://img.shields.io/website?url=https%3A%2F%2Fzkm.github.io%2Fflexbox-grid%2F&label=live%20demo)](https://zkm.github.io/flexbox-grid/)
[![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue)](LICENSE)

![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)
![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Node.js 20](https://img.shields.io/badge/Node.js-20-5FA04E?logo=nodedotjs&logoColor=white)

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

