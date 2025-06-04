/* global getPrompt, getAllFavoritePrompts */
chrome.contextMenus.onClicked.addListener(genericOnClick);
let newChat = true;
// A generic onclick callback function.
async function checkHasPermission(permissions) {
  const hasPermission = await chrome.permissions.contains({
    permissions,
  });
  return hasPermission;
}
async function askForPermisson(permissions) {
  const granted = await chrome.permissions.request({
    permissions,
  });
  return granted;
}
async function removePermission(permissions) {
  const removed = await chrome.permissions.remove({
    permissions,
  });
  return removed;
}

function genericOnClick(info, tab) {
  if (info.menuItemId === "superpower-chatgpt") {
    // Abrir ChatGPT en una nueva pestaña con el texto seleccionado
    const text = info.selectionText;
    const url = `https://chat.openai.com/chat?prompt=${encodeURIComponent(text)}`;
    chrome.tabs.create({ url: url });
  }
}

// Crear menús contextuales
function addCustomPromptContextMenu() {
  // Menú principal
  chrome.contextMenus.create({
    id: "superpower-chatgpt",
    title: "Ask ChatGPT",
    contexts: ["selection"]
  });

  // Submenús para diferentes acciones
  chrome.contextMenus.create({
    id: "explain",
    title: "Explain this",
    parentId: "superpower-chatgpt",
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    id: "summarize",
    title: "Summarize this",
    parentId: "superpower-chatgpt",
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    id: "translate",
    title: "Translate this",
    parentId: "superpower-chatgpt",
    contexts: ["selection"]
  });
}

// Inicializar menús contextuales
chrome.runtime.onInstalled.addListener(() => {
  addCustomPromptContextMenu();
});
