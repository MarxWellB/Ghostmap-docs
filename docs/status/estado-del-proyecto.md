---
id: estado-del-proyecto
title: Estado del proyecto
sidebar_label: Estado del proyecto
---

# Estado del proyecto

:::caution V1 en pruebas finales
GhostMap V1 tiene buena cobertura de funcionalidad y pruebas automatizadas, pero todavía está pasando por validaciones manuales finales antes de un release amplio. Algunas funciones pueden comportarse de forma ligeramente distinta a lo descrito hasta que esas validaciones terminen.
:::

## Disponible hoy (v1)

- Jerarquía symbol-first (símbolos primero, Ghosts después).
- Ownership contextual de Ghosts.
- Named anchors (`#nombre`).
- Range anchors.
- Diagnósticos (`unclosed-range`, `malformed-syntax`, `detached`, `ambiguous`, etc.).
- Hover con descripciones.
- Status tracking.
- Parsing multi-lenguaje (LSP, tree-sitter, regex fallback).
- Integración nativa en VS Code.

## Limitaciones conocidas del MVP

- **Archivos muy grandes:** archivos que superan las 60,000 líneas no se recalculan automáticamente para evitar bloquear el editor. Ver [Loading Policy](/architecture/loading-policy) para el detalle y cómo habilitar el refresco manual.
- **Rangos sin nombre:** un `@ghost ... start` sin `#nombre` es válido sintácticamente, pero no genera un nodo visible en el árbol. Ver [Range Anchor](/guide/range-anchor#importante-el-nombre-es-obligatorio-para-que-se-vea).
- **Solo comentarios de línea:** las anotaciones `@ghost` dentro de comentarios de bloque (`/* */`, `/** */`) no son reconocidas en V1. Ver [Sintaxis](/reference/sintaxis#solo-comentarios-de-línea).

## Próximos pasos

Ver **[Roadmap — Visión v2](/roadmap/vision-v2)** para la dirección a más largo plazo del proyecto.
