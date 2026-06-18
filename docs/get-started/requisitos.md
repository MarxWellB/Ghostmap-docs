---
id: requisitos
title: Requisitos mínimos
sidebar_label: Requisitos mínimos
---

# Requisitos mínimos

GhostMap es una extensión de VS Code. No requiere configuración de servidor, cuenta externa, ni dependencias del sistema fuera del editor.

## Editor

| Requisito | Valor |
|---|---|
| Visual Studio Code | Versión reciente recomendada (la extensión usa APIs estables de VS Code, no hay versión mínima documentada de forma rígida). |
| Sistema operativo | Windows, macOS, Linux — cualquier plataforma donde corra VS Code. |

:::note
GhostMap fue desarrollado y probado principalmente en Windows. Las rutas de archivos usan `path.sep` para compatibilidad cross-platform, pero macOS y Linux no han sido verificados de forma exhaustiva en V1. Si encuentras un problema específico de plataforma, repórtalo en GitHub.
:::

## Lenguaje del proyecto

No necesitas instalar nada extra solo para usar GhostMap. La extensión incluye:

- **20 gramáticas Tree-sitter compiladas a WASM** — empaquetadas dentro de la extensión. No se descargan en tiempo de ejecución.
- **Regex fallback** — funciona sin ninguna dependencia externa.

La única dependencia opcional que mejora la calidad del árbol es tener activo un **language server (LSP)** para tu lenguaje. GhostMap lo usa automáticamente si está disponible; si no lo está, cae al siguiente nivel de extracción sin que tengas que hacer nada.

## RAM y CPU

GhostMap no tiene un requisito de RAM mínima documentado. Sin embargo, hay comportamientos a tener en cuenta en entornos con poca memoria:

- Con **80–90% de RAM en uso**, el arranque de un language server puede tardar entre 5 y 30 segundos. GhostMap espera hasta 800 ms y luego cae al fallback automáticamente — el árbol sigue apareciendo, pero sin el detalle que daría el LSP.
- En esas condiciones, el **Ghost Index** es especialmente útil: en lugar de esperar al LSP en cada apertura, el árbol carga desde el snapshot local en menos de 50 ms.

## Proyectos muy grandes

GhostMap analiza archivos, no workspaces completos. Para archivos muy grandes hay límites automáticos:

| Límite | Valor por defecto | Setting para ajustarlo |
|---|---|---|
| Líneas por archivo (auto-refresh) | 60,000 líneas | `ghostmap.loading.maxAutoLines` |
| Tamaño por archivo (auto-refresh) | 10 MB | `ghostmap.loading.maxAutoBytes` |
| Archivos "tiny" (sin backpressure) | ≤ 50 líneas | `ghostmap.loading.tinyLineThreshold` |

Si trabajas habitualmente con archivos que superan estos límites, puedes subirlos en `settings.json`. Consulta [Settings](/reference/settings) y [Loading Policy](/architecture/loading-policy) para el detalle.

## Resumen rápido

Si VS Code corre en tu máquina, GhostMap corre en tu máquina. Los límites de rendimiento aparecen con archivos muy grandes o bajo presión de RAM extrema — no en uso normal.
