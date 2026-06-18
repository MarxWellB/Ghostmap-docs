# GhostMap Documentation Site

This repository hosts the user-facing documentation for [GhostMap](https://github.com/MarxWellB/genesis), a VS Code extension that turns `@ghost` annotations into a navigable Ghost Tree.

The site is built with [Docusaurus 3](https://docusaurus.io/) and deployed to GitHub Pages.

## Local development

```bash
npm install
npm start
```

This launches the dev server on `localhost:3000` with hot reload.

## Build

```bash
npm run build
```

The static output is written to `build/` and can be served from any static host.

## Deploy

GitHub Pages deployment happens via the standard Docusaurus deploy command; see `docusaurus.config.js` for the deployment configuration.

## Content structure

| Folder | Purpose |
|---|---|
| `docs/intro.md` | Landing page of the documentation. |
| `docs/get-started/` | Requisitos, instalación, primeros 5 minutos. |
| `docs/guide/` | Conceptos: symbols, anchors, ownership, validity gate, etc. |
| `docs/reference/` | Syntax, Ghost Tree, diagnostics, settings, rendimiento. |
| `docs/architecture/` | Arquitectura v1, loading policy, local state. |
| `docs/roadmap/` | Visión v2 (Ghost Index v2, Ghost Watcher, Ghost Comments, Ghost Threads, Ghost Graph). |
| `docs/status/` | Estado del proyecto y limitaciones conocidas. |
| `docs/changelog.md` | User-visible release notes. |
| `docs/legal/` | Privacy Policy, Terms of Use, Third-Party Notices, Disclaimer. |
| `sidebars.js` | Sidebar layout. |
| `docusaurus.config.js` | Site configuration. |

## Contributing to the docs

The docs are currently written in Spanish. The legal section and the changelog are in English (since they need to be canonical). A full English translation is on the roadmap.

To add a new page:

1. Create the `.md` file under the appropriate `docs/<category>/` folder with a YAML frontmatter block (`id`, `title`, `sidebar_label`).
2. Add the page id to `sidebars.js` under the right category.
3. Run `npm start` to verify the page renders and links resolve.
4. Open a pull request.

## Related repositories

- [`MarxWellB/genesis`](https://github.com/MarxWellB/genesis): the extension source code.
- [`MarxWellB/Ghostmap-site`](https://github.com/MarxWellB/Ghostmap-site): the marketing site.
