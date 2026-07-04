---
id: project-status
title: Project status
sidebar_label: Project status
---

# Project status

> **V1, pre-1.0 versioning:**
> GhostMap V1 has good functional and test coverage. Some functions may still receive small refinements between versions; see the [Changelog](/changelog) for what changed in each release.

## Distribution status

GhostMap is available on the VS Code Marketplace. See [Install](/install).

Once installed, the extension runs locally with no network access.

## Available today (v1)

- Symbol-first hierarchy (symbols first, Ghosts after).
- Contextual Ghost ownership.
- Named anchors (`#name`).
- Range anchors.
- Diagnostics (`unclosed-range`, `malformed-syntax`, `detached`, `ambiguous`, etc.).
- Hover with descriptions.
- Status tracking.
- Multi-language parsing (LSP, Tree-sitter, regex fallback).
- Native VS Code integration.

## Known MVP limitations

- **Very large files:** files over 60,000 lines are not recomputed automatically to avoid blocking the editor. See [Loading Policy](/architecture/loading-policy) for the detail and how to enable manual refresh.
- **Unnamed ranges:** a `@ghost ... start` without `#name` is syntactically valid, but does not produce a visible node in the tree. See [Range Anchor](/guide/range-anchor#important-the-name-is-required-for-the-range-to-show).
- **Line comments only:** `@ghost` annotations inside block comments (`/* */`, `/** */`) are not recognized in V1. See [Syntax: line comments only](/reference/syntax#line-comments-only).

## Warnings and future direction

- **Project languages (separate workstream):** GhostMap supports 19 languages today. An expansion of roughly 20 more is planned, blocked by Tree-sitter WASM packaging and provenance, query validity, and fixture coverage. Those languages are not announced as supported until they pass that gate. See [Requirements](/get-started/requirements) and [Disclaimer](/legal/disclaimer).
- **V2 engine and Enterprise integrations (not shipped):** workspace-level indexing, the Ghost Watcher, and Enterprise integrations (Jira / Slack, Ghost Threads, Ghost Graph, dashboards, AI explanations, permissions / audit log) are designed but **not shipped**. Any integration with server services would need its own clear privacy notice and explicit consent before leaving. See [Roadmap: v2 vision](/roadmap/v2). For a copy of the active Privacy Policy, write to [getghostmap@proton.me](mailto:getghostmap@proton.me).

## Next steps

See **[Roadmap: v2 vision](/roadmap/v2)** for the longer-term direction.
