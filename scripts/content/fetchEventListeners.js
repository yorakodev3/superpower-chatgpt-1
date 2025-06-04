/* global getAllPlugins, getInstalledPlugins */

window.addEventListener('authReceived', (event) => {
  chrome.runtime.sendMessage({ authReceived: true, detail: event.detail });
});

window.addEventListener('accountReceived', (event) => {
  chrome.storage.local.set({ account: event.detail });
});

window.addEventListener('conversationLimitReceived', (event) => {
  chrome.storage.local.set({
    conversationLimit: event.detail,
  });
});

window.addEventListener('modelsReceived', (event) => {
  const data = event.detail;
  chrome.storage.local.get(['settings', 'models', 'account'], (res) => {
    const { settings, account } = res;
    if (!settings) return;
    chrome.storage.local.set({
      models: data.models,
      settings: { ...settings, selectedModel: settings.selectedModel || data.models?.[0] },
    });
    if (data.models.map((m) => m.slug).find((m) => m.includes('plugins'))) {
      // Siempre activar plugins, no importa el estado de suscripción
      getAllPlugins();
      getInstalledPlugins();
    }
  });
});
