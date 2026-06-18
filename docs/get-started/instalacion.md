---
id: instalacion
title: Instalación
sidebar_label: Instalación
---

# Instalación

GhostMap es una extensión de Visual Studio Code. No necesitas configurar nada externo: ni servidores, ni cuentas, ni archivos de configuración antes de empezar.

:::note
¿Tienes dudas sobre si GhostMap funcionará en tu máquina o con archivos muy grandes? Consulta [Requisitos mínimos](/get-started/requisitos) antes de instalar.
:::

## Editor

- Visual Studio Code (versión reciente).
- Un proyecto en alguno de los lenguajes soportados: JavaScript, TypeScript, TSX, Python, PHP, Java, C#, Go, Rust, C, C++, Ruby, Dart, Elixir, Groovy, Julia, Objective-C, Scala o Solidity.

Si tu lenguaje no tiene un *language server* activo, GhostMap usa automáticamente un parser de respaldo (tree-sitter o regex), así que la extracción de símbolos funciona igual.

## Pasos

1. Abre VS Code.
2. Ve a la pestaña **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`).
3. Busca **GhostMap**.
4. Haz clic en **Install**.

También puedes instalarla directamente desde el [Marketplace de VS Code](https://marketplace.visualstudio.com/).

## Verifica que quedó instalada

Abre cualquier archivo de código en un lenguaje soportado. En la barra lateral de VS Code debería aparecer un nuevo panel llamado **GhostMap** (icono de fantasma). Si el archivo todavía no tiene anotaciones `@ghost`, el panel se mostrará vacío — es el comportamiento esperado.

## Siguiente paso

Continúa con **[Primeros 5 minutos](/get-started/primeros-5-minutos)** para escribir tu primer `@ghost` y ver el árbol en acción.
