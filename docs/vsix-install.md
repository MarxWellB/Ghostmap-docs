---
id: vsix-install
title: Instalar desde un archivo VSIX
sidebar_label: Instalar desde VSIX
---

# Instalar GhostMap desde un archivo VSIX

GhostMap se distribuye principalmente a través del [VS Code Marketplace](/get-started/instalacion). Si por cualquier razón no puedes usar el Marketplace (entorno restringido, pre-release no publicada, instalación offline), puedes instalar el extension manualmente desde un archivo `.vsix`.

## Obtener el VSIX

### Opción A: descargar desde GitHub Releases

Cada release tagged publica el VSIX en su página de Release:

```
https://github.com/MarxWellB/genesis/releases
```

Descarga `ghostmap.vsix` del release que te interese.

### Opción B: empaquetar desde el código fuente

Si tienes el repo clonado:

```bash
git clone https://github.com/MarxWellB/genesis.git
cd genesis
npm install
npm run compile
npx @vscode/vsce package --out ghostmap.vsix
```

El archivo `ghostmap.vsix` queda en el directorio actual.

## Instalar el VSIX

### Desde VS Code (UI)

1. Abre el panel **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Click en el menú "..." de la barra superior del panel.
3. **Install from VSIX...**
4. Selecciona el archivo `ghostmap.vsix`.
5. VS Code instala y te pide recargar.

### Desde la línea de comandos

```bash
code --install-extension ghostmap.vsix
```

## Verificar la instalación

Después de recargar VS Code:

1. Abre cualquier archivo de un lenguaje soportado (por ejemplo `.ts`).
2. En la barra lateral izquierda debería aparecer un icono nuevo de fantasma.
3. Click en el icono: el panel **GhostMap** muestra el árbol de símbolos del archivo activo.

Si el panel está vacío y el archivo tiene símbolos, ver [Solución de problemas](/troubleshooting).

## Actualizar a una versión nueva

Repite el proceso con el nuevo VSIX. VS Code detecta que es una nueva versión del mismo extension y la actualiza in-place. No hace falta desinstalar primero.

## Restricciones del modo VSIX

Cuando instalas desde VSIX:

- VS Code **no** te avisa automáticamente cuando hay una versión nueva. Tienes que comprobar manualmente.
- El extension se marca como "side-loaded" y no aparece en tus extensiones sincronizadas si usas Settings Sync.
- En entornos gestionados por IT, puede que la política bloquee instalaciones VSIX. Consulta con tu administrador.

## Siguiente paso

Continúa con **[Primeros 5 minutos](/get-started/primeros-5-minutos)** para escribir tu primer anchor `@ghost`.
