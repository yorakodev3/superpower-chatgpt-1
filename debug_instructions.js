// Este archivo contiene instrucciones para probar y depurar la extensión Superpower ChatGPT

// INSTRUCCIONES PARA CHROME:
// 1. Desinstala cualquier versión anterior de la extensión
// 2. Ve a chrome://extensions/
// 3. Activa el "Modo desarrollador" (interruptor en la esquina superior derecha)
// 4. Haz clic en "Cargar descomprimida"
// 5. Selecciona la carpeta raíz que contiene el manifest.json
// 6. Abre la consola de desarrollador de la extensión:
//    - Haz clic en "Detalles" en la tarjeta de la extensión
//    - Haz clic en "Inspeccionar vistas" -> "service worker"
// 7. Observa si hay errores en la consola
// 8. Abre https://chat.openai.com/ e inicia sesión
// 9. Observa la consola del navegador para ver mensajes de error

// INSTRUCCIONES PARA FIREFOX:
// Firefox requiere una modificación en el manifest.json para funcionar correctamente
// 1. Modifica el manifest.json según las instrucciones del README
// 2. Abre Firefox y escribe about:debugging en la barra de URL
// 3. Haz clic en "Este Firefox" en la barra lateral izquierda
// 4. Haz clic en el botón "Cargar complemento temporal"
// 5. Navega hasta la carpeta donde extrajiste el código fuente de la extensión 
//    y selecciona el archivo manifest.json
// 6. Abre la consola del navegador para ver mensajes de error
// 7. Visita https://chat.openai.com/ e inicia sesión

// ERRORES COMUNES Y SOLUCIONES:
// 1. Error "Failed to load resource: net::ERR_BLOCKED_BY_CLIENT"
//    - Desactiva bloqueadores de anuncios o extensiones similares
// 2. Error "Manifest version 3 requires service_worker as background.type"
//    - Asegúrate de que el manifest.json está configurado correctamente
// 3. Error con importScripts o fetch
//    - Esto puede indicar problemas con los permisos o CORS
