// Archivo de depuración para verificar la carga de la extensión
console.log('Superpower ChatGPT: Debug script loaded - ' + new Date().toISOString());

// Verificar cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM cargado - ' + new Date().toISOString());
  
  // Intentar cargar el script de interceptor manualmente
  try {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('scripts/interceptor/interceptor.js');
    script.onload = function() {
      console.log('✅ Script de interceptor cargado manualmente');
    };
    script.onerror = function(error) {
      console.error('❌ Error al cargar el script de interceptor:', error);
    };
    document.head.appendChild(script);
  } catch (error) {
    console.error('❌ Error al intentar cargar el script de interceptor:', error);
  }
  
  // Intentar inicializar la extensión manualmente
  setTimeout(function() {
    console.log('Intentando inicializar...');
    try {
      // Verificar si se ha cargado initialize.js
      if (typeof initialize === 'function') {
        console.log('✅ Función initialize encontrada, ejecutando...');
        initialize();
      } else {
        console.error('❌ Función initialize NO encontrada');
        
        // Cargar initialize.js manualmente
        const script = document.createElement('script');
        script.src = chrome.runtime.getURL('scripts/content/initialize.js');
        script.onload = function() {
          console.log('✅ initialize.js cargado manualmente');
          if (typeof initialize === 'function') {
            initialize();
          }
        };
        document.head.appendChild(script);
      }
    } catch (error) {
      console.error('❌ Error al intentar inicializar:', error);
    }
  }, 2000);
});

// También verificamos cuando la ventana está completamente cargada
window.addEventListener('load', function() {
  console.log('Ventana completamente cargada - ' + new Date().toISOString());
  
  // Verificar componentes de la extensión
  setTimeout(checkComponents, 3000);
});

// Función para verificar si los componentes principales están cargados
function checkComponents() {
  console.log('Verificando componentes...');
  
  // Verificar si el script de intercepción se ha cargado
  try {
    if (window.fetch.toString().includes('originalFetch')) {
      console.log('✅ Script de intercepción cargado correctamente');
    } else {
      console.error('❌ Script de intercepción NO cargado');
    }
  } catch (error) {
    console.error('❌ Error al verificar script de intercepción:', error);
  }
  
  // Verificar si la función initialize existe
  if (typeof initialize === 'function') {
    console.log('✅ Función initialize existe');
  } else {
    console.error('❌ Función initialize NO existe');
  }
  
  // Verificar si el elemento del historial de prompts existe
  const historyButton = document.querySelector('a[id="my-prompt-history-button"]');
  if (historyButton) {
    console.log('✅ Botón de historial de prompts encontrado');
  } else {
    console.error('❌ Botón de historial de prompts NO encontrado - Posiblemente la extensión no esté funcionando');
  }
}

function showInstructionsBanner() {
  // Verificar si estamos en chat.openai.com
  if (window.location.hostname === 'chat.openai.com') {
    // Crear un banner de instrucciones
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = '#4a47a3';
    banner.style.color = 'white';
    banner.style.padding = '10px';
    banner.style.zIndex = '9999';
    banner.style.textAlign = 'center';
    banner.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    
    banner.innerHTML = `
      <p style="margin: 0; font-weight: bold;">Superpower ChatGPT: Depuración activada</p>
      <p style="margin: 5px 0;">Si la extensión no funciona, abre la consola del navegador (F12) para ver errores.</p>
      <button id="close-banner" style="background: white; color: #4a47a3; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-left: 10px;">Cerrar</button>
    `;
    
    // Añadir el banner al body
    document.body.appendChild(banner);
    
    // Configurar el botón para cerrar el banner
    document.getElementById('close-banner').addEventListener('click', function() {
      banner.style.display = 'none';
    });
    
    console.log('Banner de instrucciones mostrado');
  }
}

// Ejecutar la verificación después de 5 segundos para dar tiempo a que todo se cargue
setTimeout(checkComponents, 5000);

// Esperar a que la página se cargue completamente para mostrar el banner
window.addEventListener('load', function() {
  setTimeout(showInstructionsBanner, 2000);
});

// Escuchar errores
window.addEventListener('error', function(event) {
  console.error('Error en Superpower ChatGPT:', event.error);
});
