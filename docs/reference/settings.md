---
id: settings
title: Configuración / Settings
sidebar_label: Settings
---

# Configuración

GhostMap funciona con valores por defecto razonables, pero puedes ajustar estos settings desde la configuración de VS Code (`settings.json` o la UI de Settings).

| Setting | Default | Qué controla |
|---|---|---|
| `ghostmap.ownershipRadius` | `5` | Radio (en líneas) usado para las sugerencias de autocompletado `gh`+Tab y para los diagnósticos `detached`/`ambiguous`. Ver [Ownership Radius](/guide/ownership-radius). |
| `ghostmap.loading.maxAutoLines` | `60000` | Presupuesto de líneas por archivo para el refresco automático. Ver [Loading Policy](/architecture/loading-policy). |
| `ghostmap.loading.allowManualLargeFileRefresh` | `false` | Permite que el botón `Refresh` recalculé manualmente archivos que exceden `maxAutoLines`. |

:::note
GhostMap también incluye opciones de logging orientadas a diagnóstico interno, pensadas para soporte técnico más que para uso diario. Si necesitas reportar un problema de rendimiento, el equipo de soporte puede indicarte cómo activarlas.
:::

## Siguiente paso

Si quieres entender cómo funciona el pipeline completo por dentro, continúa con **[Arquitectura v1](/architecture/arquitectura-v1)**.
