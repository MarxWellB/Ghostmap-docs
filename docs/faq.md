---
id: faq
title: Preguntas frecuentes
sidebar_label: FAQ
---

# Preguntas frecuentes

## ¿En qué se diferencia de la vista "Outline" de VS Code?

La vista Outline nativa de VS Code muestra los símbolos del archivo activo según el language server, sin más. GhostMap añade:

- **Fallback automático** cuando el language server no responde o no está disponible, usando Tree-sitter y regex. Esto significa que **siempre** tienes un árbol, incluso en archivos donde Outline aparece vacío.
- **Anotaciones `@ghost`** integradas al árbol: TODOs nombrados, regiones marcadas, descripciones con status, todo navegable.
- **Snapshot persistente** entre sesiones: abrir un archivo conocido pinta el árbol en < 50 ms, no hay que esperar al LSP.
- **Scanner progresivo** para archivos de 60k líneas sin congelar el editor.
- **Diagnósticos** sobre tus anchors y quick fixes.

Outline sigue siendo útil para lenguajes donde el LSP es excelente y no necesitas anchors. GhostMap es la opción cuando trabajas en archivos grandes, cambias de lenguaje constantemente, o quieres dejar marcas estructuradas en el código.

## ¿Requiere instalar algo aparte del extension?

No. Las 19 gramáticas Tree-sitter vienen pre-compiladas dentro de la extensión, no se descargan en tiempo de ejecución. Si tienes un language server activo para tu lenguaje, GhostMap lo aprovechará automáticamente; si no, usa el fallback. Ver [Requisitos](/get-started/requisitos).

## ¿Funciona sin conexión a internet?

Sí. GhostMap no hace ninguna llamada de red. Toda la extracción de símbolos, parseo de anchors, persistencia y análisis sucede localmente.

## ¿Manda datos a algún servidor?

No. Ver [Privacy Policy](/legal/privacy).

## ¿Funciona en VS Code Web / vscode.dev?

De forma limitada. GhostMap se declara como `extensionKind: ["workspace"]`, lo que significa que requiere un host de extensión completo. En entornos virtuales como vscode.dev, el Ghost Tree funciona en memoria pero la persistencia a `.ghostmap/ghostmap.json` no está disponible.

## ¿Qué pasa con la carpeta `.ghostmap/`?

Es el caché local que GhostMap mantiene por workspace. Contiene los árboles snapshot de los archivos que has abierto. Ver [¿Dónde guarda los datos GhostMap?](/data-location) para más detalle.

**¿Debería commitearla?** No. Añádela a `.gitignore`:

```text
.ghostmap/
```

**¿Es seguro borrarla?** Sí. La próxima apertura de cada archivo paga el costo de extracción completa una vez y se vuelve a poblar.

## ¿Por qué los archivos > 60k líneas se marcan como `[skipped]`?

Para mantener el editor responsivo. El scanner regex evalúa un patrón por línea por lenguaje, y arriba de ~60k líneas el costo acumulado degrada la responsividad. Si necesitas analizar un archivo más grande:

- Sube `ghostmap.loading.maxAutoLines`.
- O activa `ghostmap.loading.allowManualLargeFileRefresh` y dispara el refresh manualmente con `GhostMap: Refresh`.

Ver [Settings](/reference/settings).

## ¿Por qué hay tantos "tiers" de lenguajes?

Algunos lenguajes tienen gramáticas que un scanner basado en regex y Tree-sitter cubre completamente (Tier 1). Otros tienen features que requerirían un parser específico real (Tier 2, Tier 3). El [Disclaimer](/legal/disclaimer) detalla los gaps conocidos por lenguaje.

## ¿Cuánto ocupa la extensión?

La descarga es de unos 35 MB, dominados por las 19 gramáticas Tree-sitter en formato WASM. En memoria activa el costo es bajo: solo las gramáticas de los lenguajes que has tocado en la sesión se cargan.

## ¿GhostMap usa IA?

No en V1. Toda la extracción es determinista (LSP / Tree-sitter / regex). La V2 contempla features asistidos por IA (explicaciones automáticas, sugerencias de Range Anchors) pero serán opcionales y se anunciarán explícitamente cuando lleguen.

## ¿Cómo creo un Anchor?

La forma más rápida es escribir `gh` y presionar Tab sobre la línea anterior a un símbolo. El snippet genera un Contextual Anchor que se adjunta al símbolo más cercano. Ver [Primeros 5 minutos](/get-started/primeros-5-minutos) y [Sintaxis](/reference/sintaxis).

## ¿Puedo poner `@ghost` en un comentario de bloque `/* */`?

No en V1. Solo se reconocen comentarios de línea (`//` o `#`). Ver [Sintaxis: solo comentarios de línea](/reference/sintaxis#solo-comentarios-de-línea).

## ¿Hay atajos de teclado por defecto?

Sí, uno: **Ctrl+Alt+G** (**Cmd+Alt+G** en macOS) ejecuta `GhostMap: Refresh` mientras el editor tiene foco. Ver [Atajos de teclado](/keyboard-shortcuts).

## ¿GhostMap es gratis?

Sí, V1 es gratuito y de código abierto bajo licencia MIT. La visión a futuro incluye una capa de "GhostMap Enterprise" con integraciones para equipos (Jira, Slack, dashboards) que será un producto separado; el V1 Core se mantiene libre. Ver [Roadmap](/roadmap/vision-v2).

## ¿Cómo lo desinstalo?

Ver [Cómo desinstalar](/uninstall).

## Siguiente paso

Si tienes un problema específico, ve a **[Solución de problemas](/troubleshooting)**.
