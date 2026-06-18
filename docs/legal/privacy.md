---
id: privacy
title: Privacy Policy
sidebar_label: Privacy Policy
---

# Privacy Policy

**Effective date:** June 18, 2026 · **Version:** 1.0

:::tip The whole policy in one line
GhostMap runs entirely on your machine, makes no network calls of its own, transmits no source code or metadata, stores no analytics, and does not communicate with the maintainers or any third party.
:::

## 1. What data we collect

None. GhostMap does not collect, process, transmit, or store any personally identifiable information, source code, file contents, file paths, telemetry, crash reports, usage statistics, or any other data about you, your machine, or your projects.

## 2. What the extension reads locally

To do its job, GhostMap reads the following inside the VS Code Extension Host process running on your computer:

- The text of the file currently open in the active editor.
- The list of open and visible editors (used for the optional background indexing queue, which is off by default).
- Symbol information returned by VS Code Language Servers you have installed.
- A SHA-256 fingerprint of file contents, used purely for cache validation.

All of the above stays inside the VS Code process. None of it is transmitted off your machine by GhostMap.

## 3. What the extension stores locally

GhostMap maintains a per-workspace cache file at `<workspace>/.ghostmap/ghostmap.json`. This file contains the symbol tree, anchors, and metadata for files you have opened. It is capped at 2 megabytes and is stored exclusively on your filesystem. It is never transmitted anywhere. You can delete it at any time without consequence beyond a slower first-open of recently used files.

## 4. Network activity

GhostMap itself makes zero outbound network requests. The VS Code application and the Language Servers you have installed may make their own network requests according to their respective policies. GhostMap has no involvement in those.

## 5. Third-party services

GhostMap integrates with no third-party services, no analytics provider, no error-tracking service, no advertising network, and no AI service. The Tree-sitter parsers shipped inside the extension are static WebAssembly files that run locally with no network capability.

## 6. Cookies and tracking

The GhostMap extension is not a web property and uses no cookies. The marketing site and documentation site may use minimal server logs operated by their hosting provider; consult that provider for details. The maintainers do not run analytics on either site.

## 7. Children's privacy

GhostMap is a developer tool not directed at children under 13. Since GhostMap collects no data, no information about any user is ever obtained, regardless of age.

## 8. Your rights

Because GhostMap collects, transmits, processes and stores zero data about you, there is nothing to request access to, delete, port, rectify, or restrict. Under GDPR, CCPA, and equivalent regimes, the "no data" posture satisfies the spirit of every right by removing the data category entirely.

## 9. Future changes

If a future version of GhostMap ever introduces an optional feature that involves data collection (for example, an optional opt-in telemetry signal, or a server-backed Enterprise feature), that feature will be:

- Off by default.
- Clearly disclosed in this Privacy Policy before being shipped.
- Accompanied by an in-extension consent prompt before any data leaves your machine.
- Documented with the exact data fields, retention period, and recipients.

This policy will carry an updated effective date and version when that happens. The current version commits to collecting nothing.

## 10. Contact

Questions about this policy can be opened as a GitHub Issue at the project's issue tracker or sent through the maintainer profile.

## 11. Disclaimer

This document is provided in good faith and reflects the design of the extension as published. It is not a substitute for legal advice. If you operate under a regulated regime that requires a Data Processing Agreement or similar instrument, please reach out before deploying GhostMap at scale.
