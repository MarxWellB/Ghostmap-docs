---
id: notices
title: Third-Party Notices
sidebar_label: Third-Party Notices
---

# Third-Party Notices

**Effective date:** June 18, 2026 · **Version:** 1.0

GhostMap is built on top of open source components. Each carries its own license. Full attribution is below.

## Runtime dependencies

**web-tree-sitter** · `^0.26.8` · MIT License. The WebAssembly runtime that powers the Tree-sitter layer of the Ghost Engine. Authored by the tree-sitter project. Source: [github.com/tree-sitter/tree-sitter](https://github.com/tree-sitter/tree-sitter).

## Bundled Tree-sitter grammars

The following 19 grammars ship as precompiled WebAssembly files inside the extension. Each is the work of its respective authors and is redistributed unmodified.

| Grammar | Upstream | License |
|---|---|---|
| `tree-sitter-c` | tree-sitter/tree-sitter-c | MIT |
| `tree-sitter-cpp` | tree-sitter/tree-sitter-cpp | MIT |
| `tree-sitter-c_sharp` | tree-sitter/tree-sitter-c-sharp | MIT |
| `tree-sitter-dart` | UserNobody14/tree-sitter-dart | MIT |
| `tree-sitter-elixir` | elixir-lang/tree-sitter-elixir | Apache-2.0 |
| `tree-sitter-go` | tree-sitter/tree-sitter-go | MIT |
| `tree-sitter-groovy` | murtaza64/tree-sitter-groovy | MIT |
| `tree-sitter-java` | tree-sitter/tree-sitter-java | MIT |
| `tree-sitter-javascript` | tree-sitter/tree-sitter-javascript | MIT |
| `tree-sitter-julia` | tree-sitter/tree-sitter-julia | MIT |
| `tree-sitter-objc` | jiyee/tree-sitter-objc | MIT |
| `tree-sitter-php` | tree-sitter/tree-sitter-php | MIT |
| `tree-sitter-python` | tree-sitter/tree-sitter-python | MIT |
| `tree-sitter-ruby` | tree-sitter/tree-sitter-ruby | MIT |
| `tree-sitter-rust` | tree-sitter/tree-sitter-rust | MIT |
| `tree-sitter-scala` | tree-sitter/tree-sitter-scala | MIT |
| `tree-sitter-solidity` | JoranHonig/tree-sitter-solidity | MIT |
| `tree-sitter-tsx` | tree-sitter/tree-sitter-typescript | MIT |
| `tree-sitter-typescript` | tree-sitter/tree-sitter-typescript | MIT |

License labels in the table above reflect the most commonly published license for each upstream as of the WASM compilation date. For commercial redistribution, verify the exact license text shipped by each upstream at the version pinned in the source repository.

## VS Code Extension API

GhostMap calls into the VS Code Extension API published by Microsoft. The API contract is governed by the [VS Code Extension Guidelines](https://code.visualstudio.com/api).

## Site fonts

The documentation site and marketing site use the **Space Grotesk**, **Inter**, and **JetBrains Mono** typefaces, all open source under the SIL Open Font License 1.1, served via Google Fonts.

## Reporting an attribution issue

If you believe a component is missing from this page, or that an attribution or license is incorrect, please open an issue on the project's issue tracker so it can be corrected.
