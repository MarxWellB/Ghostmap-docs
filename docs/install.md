---
id: install
title: Install
sidebar_label: Install
slug: /install
---

# Install

## Quick path

Install GhostMap from the VS Code Marketplace:

[Install from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Ghostmap.ghostmap)

If VS Code is available on this machine, you can also open the listing directly:

[Open in VS Code](vscode:extension/Ghostmap.ghostmap)

## Install from VS Code Quick Open

Press `Ctrl+P` or `Cmd+P`, paste this command, then press Enter:

```text
ext install Ghostmap.ghostmap
```

## Install from VS Code

1. Open the **Extensions** panel (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Search for `GhostMap`.
3. Select **GhostMap** by `GhostMap`.
4. Click **Install**.

After install:

1. Open a file in any supported language (TypeScript, Python, Rust, C#, Java, PHP, C++, Go, Ruby, Dart, and others: 19 in total).
2. Open the **GhostMap** view in the activity bar.
3. The tree shows every detected symbol; click an item to jump.
4. Drop a `@ghost` anchor in a comment: it appears in the tree.

## Update or uninstall

Marketplace installs update through VS Code. To uninstall, run:

```powershell
code --uninstall-extension ghostmap.ghostmap
```

Or use the Extensions panel: find GhostMap, click the gear icon, choose **Uninstall**.

## Next step

- Check [Requirements](/get-started/requirements) if you want to confirm GhostMap fits your machine and language.
- Continue with [First 5 minutes](/get-started/first-5-minutes) to write your first `@ghost`.
