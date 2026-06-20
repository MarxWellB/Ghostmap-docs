---
id: vision-v2
title: 'Roadmap — Visión v2'
sidebar_label: Visión v2
---

# Roadmap — Visión v2

GhostMap Core —todo lo descrito en el resto de esta documentación— es y seguirá siendo **gratuito y de código abierto** bajo la licencia MIT, en el plan **Community** para uso personal, estudiantes, OSS y desarrolladores individuales. Lo que sigue es la visión para **GhostMap Enterprise**, pensado para equipos donde esta información necesita fluir entre la capa técnica, operativa y directiva. La estructura de planes que financia ese camino (Commercial, Early Commercial, Early Supporter y Enterprise) está descrita en [Planes y precios](/legal/planes), y el detalle del programa de descuentos por antigüedad en el [Programa Early Access](/legal/programa-early-access).

## Ghost Project Index & Ghost Watcher

**Problema actual:** cada archivo recalcula símbolos, anchors, metadata y jerarquía desde cero al abrirse (mitigado parcialmente hoy por la caché de continuidad por archivo descrita en [Local State](/architecture/local-state), pero esa caché es local/por-documento, no un índice de workspace completo).

**Visión v2:** un índice persistente a nivel de workspace (el **Ghost Index v2**, evolución del Ghost Index per-archivo actual) que se construye una vez, al abrir el proyecto o al detectar archivos nuevos, y se mantiene actualizado de forma incremental mediante un **Ghost Watcher** que observa creación, eliminación, renombrado y modificación de archivos.

**Beneficio:** abrir un archivo ya no recalcula nada. El árbol carga en menos de 1 segundo desde el índice.

**Contenido potencial del índice:** archivos, símbolos, anchors, metadata, jerarquía resuelta, diagnósticos y, a futuro, relaciones/dependencias entre archivos (el **Ghost Graph**, también conocido como **Ghost Context Graph**).

## Pilar 1 — Retomar el trabajo sin fricción

Un dev termina su día. Al siguiente, abre VS Code y GhostMap.

- **Dashboard general** que muestra el estado de todos los archivos y los Ghosts marcados como urgentes.
- **Urgencia derivada de Jira:** GhostMap se conecta a Jira, obtiene los tiempos del sprint actual y de sprints dependientes, e identifica —con ayuda de IA— relaciones y dependencias entre sprints para marcar qué Ghosts son urgentes (por vencimiento propio o por bloquear otro sprint).
- **Chat local en VS Code** que resume conversaciones y contexto relevante, y propone qué hacer a continuación según urgencia y alcance.
- **Retomar contexto con un click:** el dev entra directo a la primera tarea urgente, o continúa exactamente donde lo dejó el día anterior.
- **Ghost Threads (discusiones por bloque de código):** cualquier función, clase o bloque puede tener su propia discusión, con responsable técnico, QA, etc., con permisos configurables, incluyendo comentarios enviados desde Slack hacia una discusión concreta.
- **Avance tangible en Jira:** al analizar un Ghost o un Range Anchor grande, GhostMap puede proponer una descomposición en subtareas dentro de Jira. Cada subtarea queda vinculada a su propio Ghost en el código, y a medida que se marcan como `done`, el avance de la tarea padre se actualiza de forma proporcional y visible.
- **Cierre de tarea automatizado:** al cambiar el status de un Ghost a `done` (o equivalente), GhostMap puede generar el commit correspondiente, actualizar Jira, notificar a QA/revisor, y reflejar el nuevo estado en tiempo real para todo el equipo.
- **Permisos y trazabilidad:** dado que esta capa puede generar commits, modificar tickets y crear subtareas automáticamente, Enterprise incluye control de permisos por rol y un registro de qué acción fue tomada por una persona y cuál por un agente de IA.

## Pilar 2 — Entender código ajeno

Un dev nuevo abre un archivo y no sabe qué hay realmente ahí.

- **Explicaciones generadas por IA** sobre símbolos sin documentación previa.
- **Ghost Graph:** grafos que muestran relaciones entre archivos, símbolos y dependencias (el **Ghost Context Graph** desde el índice).
- **Listas con contexto y urgencia:** al ver qué funciones/clases hay en un archivo, también se indica qué está marcado como urgente ahí mismo.
- **Historial de decisiones:** acceso directo a las discusiones pasadas sobre por qué se tomó tal decisión en ese bloque de código. Información que hoy solo vive en la memoria de quien lo escribió.
- **Recomendaciones de estructura no obligatorias:** GhostMap puede sugerir organizar el código (por ejemplo, con Range Anchors) sin forzarlo.
- **Notificaciones in-editor:** cambios de estado o nuevas discusiones relevantes llegan directo a VS Code, con un click para ir al lugar exacto.

## Ghost Comments y documentación retroactiva

- **Ghost Comments (ghosts invisibles):** en v2, la información Ghost deja de vivir como texto literal en el archivo. VS Code la muestra visualmente con decoraciones y CodeLens, sin que ocupe líneas en el código fuente. El código permanece limpio, y la información vive en el Ghost Index v2.
- **Conversión de comentarios existentes:** comentarios tipo `TODO`/`FIXME` ya presentes en el código pueden convertirse automáticamente en Ghost Metadata, reutilizando la misma resolución de ownership que ya existe hoy.
- **Documentación automática de código legacy:** análisis con IA y grafos sobre código sin ningún Ghost, que propone Range Anchors automáticos y genera descripciones. Útil para "bootstrapear" el índice en proyectos que nunca usaron GhostMap.

## Siguiente paso

Para ver el estado actual de V1 y sus limitaciones conocidas, continúa con **[Estado del proyecto](/status/estado-del-proyecto)**.
