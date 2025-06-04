# Instrucciones para Depurar Superpower ChatGPT

## Paso 1: Desinstalar la extensión actual
1. Abre Chrome y ve a `chrome://extensions/`
2. Encuentra "Superpower ChatGPT" y haz clic en "Eliminar"
3. Confirma la eliminación

## Paso 2: Limpiar el caché del navegador
1. Presiona `Ctrl+Shift+Del`
2. Marca "Imágenes y archivos en caché" y "Cookies y datos del sitio"
3. Haz clic en "Borrar datos"

## Paso 3: Reinstalar la extensión en modo de depuración
1. Abre Chrome y ve a `chrome://extensions/`
2. Activa el "Modo desarrollador" (interruptor en la esquina superior derecha)
3. Haz clic en "Cargar descomprimida"
4. Selecciona la carpeta `C:\Users\hp\Documents\GitHub\superpower-chatgpt`
5. Asegúrate de que la extensión aparezca y esté habilitada

## Paso 4: Verificar errores en la extensión
1. En `chrome://extensions/`, busca la extensión "Superpower ChatGPT"
2. Si hay errores, aparecerá un mensaje de "Error" debajo de la extensión
3. Haz clic en "Errores" para ver los detalles

## Paso 5: Inspeccionar la página de fondo
1. En `chrome://extensions/`, haz clic en "detalles" para Superpower ChatGPT
2. Desplázate hacia abajo hasta "Inspeccionar vistas"
3. Haz clic en "página de fondo"
4. Mira la consola para ver los mensajes de depuración y errores

## Paso 6: Probar la extensión en ChatGPT
1. Abre `https://chat.openai.com/` en una nueva pestaña
2. Inicia sesión si es necesario
3. Abre las herramientas de desarrollador con F12
4. Ve a la pestaña "Consola"
5. Busca mensajes que comiencen con "Superpower ChatGPT:"

### ¿Qué buscar en la consola?
- "Superpower ChatGPT: Debug script loaded" - Indica que el script de depuración se cargó
- "✅ Script de intercepción cargado correctamente" - El interceptor funciona
- "✅ Función initialize existe" - La función de inicialización está disponible
- "✅ Botón de historial de prompts encontrado" - La extensión está funcionando

### Errores comunes:
- "❌ Script de intercepción NO cargado" - Problema con el interceptor
- "❌ Función initialize NO existe" - Problema con la carga de scripts
- "❌ Botón de historial de prompts NO encontrado" - La extensión no se ha inicializado correctamente

Si después de seguir estos pasos la extensión sigue sin funcionar, considera descargar la versión oficial desde la Chrome Web Store: [Superpower ChatGPT](https://chrome.google.com/webstore/detail/superpower-chatgpt/amhmeenmapldpjdedekalnfifgnpfnkc)
