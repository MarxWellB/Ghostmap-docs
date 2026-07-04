---
id: faq
title: Frequently asked questions
sidebar_label: FAQ
---

# Frequently asked questions

## How is this different from VS Code's "Outline" view?

The native Outline view shows the symbols of the active file from the language server, that is all. GhostMap adds:

- **Automatic fallback** when the language server is not responding or not available, using Tree-sitter and regex. In the **19 supported languages** (see [Requirements](/get-started/requirements)) this usually means you still have a tree even when Outline is empty. In languages outside that list (planned expansion workstream, see [Disclaimer](/legal/disclaimer)) there is no tree: GhostMap does not invent structure.
- **`@ghost` annotations** woven into the tree: named TODOs, marked regions, descriptions with status, all navigable.
- **Per-file persistent snapshot** across sessions: opening a previously seen file paints the tree in < 50 ms; you do not have to wait for the LSP. Today that cache is per-document, not a full workspace index: that is V2 (see [Roadmap](/roadmap/v2)).
- **Progressive scanner** for files of 60k lines without freezing the editor.
- **Diagnostics** on your anchors plus quick fixes.

Outline is still useful for languages where the LSP is excellent and you do not need anchors. GhostMap is the option when you work on large files, switch languages constantly, or want structured marks in your code.

## Does it require anything besides the extension?

No. The 19 Tree-sitter grammars are pre-compiled inside the extension; they are not downloaded at runtime. If you have an active language server for your language, GhostMap will use it automatically; otherwise it uses the fallback. See [Requirements](/get-started/requirements).

## Does it work offline?

Yes. GhostMap makes no network calls. All symbol extraction, anchor parsing, persistence, and analysis happens locally.

## Does it send data to any server?

No. The extension does not send project data (code, file content, paths, telemetry, or metadata) to maintainers or to GhostMap servers. For a copy of the active Privacy Policy, write to [getghostmap@proton.me](mailto:getghostmap@proton.me).

## Does it work on VS Code Web / vscode.dev?

In a limited way. In virtual or browser-hosted VS Code environments, GhostMap can show an in-memory Ghost Tree for the current session, but saved local Ghost Tree snapshots may not be available.

## What about the `.ghostmap/` folder?

It is the local cache GhostMap keeps per workspace. It contains the snapshot trees for files you have opened. See [Where does GhostMap store data?](/data-location) for more detail.

**Should I commit it?** No. Add it to `.gitignore`:

```text
.ghostmap/
```

**Is it safe to delete?** Yes. The next open of each file pays the extraction cost once and the cache is repopulated.

## Why are files > 60k lines flagged as `[skipped]`?

To keep the editor responsive. The regex scanner evaluates one pattern per line per language, and above roughly 60k lines the accumulated cost degrades responsiveness. If you need to analyze a larger file:

- Raise `ghostmap.loading.maxAutoLines`.
- Or enable `ghostmap.loading.allowManualLargeFileRefresh` and fire the refresh manually with `GhostMap: Refresh`.

See [Settings](/reference/settings).

## Why are there so many language "tiers"?

Some languages have grammars that a regex- and Tree-sitter-based scanner covers fully (Tier 1). Others have features that would need a real specific parser (Tier 2, Tier 3). The [Disclaimer](/legal/disclaimer) details known gaps per language.

## How big is the extension?

The download is about 35 MB, dominated by the 19 Tree-sitter grammars in WASM. Active memory cost is low: only the grammars for languages you have touched in the session are loaded.

## Does GhostMap use AI?

Not in V1. All extraction is deterministic (LSP / Tree-sitter / regex). V2 contemplates AI-assisted features (automatic explanations, Range Anchor suggestions) but they will be optional and announced explicitly when they arrive.

## How do I create an Anchor?

The quickest way is to type `gh` and press Tab on the line above a symbol. The snippet generates a Contextual Anchor that attaches to the closest symbol. See [First 5 minutes](/get-started/first-5-minutes) and [Syntax](/reference/syntax).

## Can I put `@ghost` inside a block comment `/* */`?

Not in V1. Only line comments are recognized (`//` or `#`). See [Syntax: line comments only](/reference/syntax#line-comments-only).

## Are there default keyboard shortcuts?

Yes, one: **Ctrl+Alt+G** (**Cmd+Alt+G** on macOS) runs `GhostMap: Refresh` while the editor has focus. See [Keyboard shortcuts](/keyboard-shortcuts).

## What license does GhostMap V1 use?

GhostMap V1 ships as **closed-source** software under the **GhostMap Free Non-Commercial License**: personal, educational, and evaluation/testing use is free. Commercial, business, production, or revenue-generating use requires written authorization (or a future commercial license flow). Donations do not grant commercial rights. The Enterprise vision is roadmap, not shipped today. See the Terms of Use (shipped as `LICENSE`; questions to getghostmap@proton.me) and the [Roadmap](/roadmap/v2).

## Where do I install GhostMap?

Install GhostMap from the VS Code Marketplace:

- [Install from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Ghostmap.ghostmap)
- [Open in VS Code](vscode:extension/Ghostmap.ghostmap)

## How do I uninstall it?

See [How to uninstall](/uninstall).

## Next step

If you have a specific problem, write to **getghostmap@proton.me** with reproduction steps.
