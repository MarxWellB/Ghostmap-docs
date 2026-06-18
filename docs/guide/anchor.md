---
id: anchor
title: Anchor
sidebar_label: Anchor
---

# Anchor

## Definición

Un **Anchor** es una entidad explícita creada por el usuario mediante `#nombre`. A diferencia de la metadata contextual, **tiene identidad propia** y aparece como nodo independiente en el árbol, sin necesidad de estar atado a un símbolo del lenguaje.

## Ejemplo

```ts
// @ghost #authentication description: validación jwt | status: todo
```

Esto genera un nodo `authentication` en el árbol, que puede contener a su vez otros símbolos o anchors si se usa como rango.

## Los tres tipos de Anchor

Un Anchor puede tomar tres formas, según cómo se escriba:

| Tipo | Tiene nombre (`#`) | Crea nodo propio | Página |
|---|---|---|---|
| **Semantic Anchor** | Sí | Sí | [Semantic Anchor](/guide/semantic-anchor) |
| **Contextual Anchor** | No | No (se pega al símbolo más cercano) | [Contextual Anchor](/guide/contextual-anchor) |
| **Range Anchor** | Sí, con `start`/`end` | Sí, y agrupa a otros nodos | [Range Anchor](/guide/range-anchor) |

## Siguiente paso

Continúa con **[Semantic Anchor](/guide/semantic-anchor)**.
