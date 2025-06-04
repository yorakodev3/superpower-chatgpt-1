// Debug para el service worker
console.log('Superpower ChatGPT: Background debug script loaded');

// Escuchar errores
self.addEventListener('error', function(event) {
  console.error('Error en el service worker:', event.error);
});

// Verificar la carga de initialize.js
try {
  importScripts('./initialize.js');
  console.log('✅ initialize.js cargado correctamente en el background');
} catch (error) {
  console.error('❌ Error al cargar initialize.js en el background:', error);
  
  // Intento alternativo con ruta absoluta
  try {
    importScripts('./scripts/background/initialize.js');
    console.log('✅ initialize.js cargado correctamente con ruta alternativa');
  } catch (error2) {
    console.error('❌ Error al cargar initialize.js con ruta alternativa:', error2);
  }
}
