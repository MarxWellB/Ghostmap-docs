---
id: ghost-status
title: Ghost Status
sidebar_label: Ghost Status
---

# Ghost Status

## Definición

El **status** es el estado asociado a una metadata o a un anchor.

## Valores soportados

Estos son los valores validados por el Code Action Provider y ofrecidos por autocompletado:

```text
todo
in-progress
done
review
blocked
pending
```

## Normalización

El valor se normaliza automáticamente:

- Se convierte a minúsculas.
- Se recorta (sin espacios al inicio/fin).
- Los espacios internos se convierten en guiones: `in progress` → `in-progress`.

## Quick fixes relacionados

- Si el valor no es uno de los soportados, GhostMap sugiere el más parecido (por prefijo) o `todo` por defecto.
- Si la clave está mal escrita (por ejemplo `statu:` o `staus:`), se ofrece corregirla a `status:`.

## Siguiente paso

Continúa con **[Ghost Description](/guide/ghost-description)**.
