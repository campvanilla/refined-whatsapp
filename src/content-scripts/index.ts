// this file runs at "document_idle" (see manifest)

console.clear();

const openNewChat = () => {
  const newChatButton = document.querySelector('div[title="New chat"]');
  if (newChatButton) {
    newChatButton.dispatchEvent(new Event('mousedown', { bubbles: true }));
  }
};

const toggleCurrentChatVisibility = () => {
  const chatHistory = document.querySelector('div.copyable-area') as HTMLDivElement;
  console.log({ chatHistory });
  if (chatHistory) {
    console.log(chatHistory.style.opacity);
    if (chatHistory.style.opacity === '0') {
      chatHistory.style.opacity = '1';
    } else {
      chatHistory.style.opacity = '0';
    }
  }
};

const toggleSidebar = () => {
  const sideBar = document.getElementById('side') as HTMLDivElement;
  if (sideBar) {
    const sideBarParent = sideBar.parentElement as HTMLDivElement;

    if (sideBarParent.style.maxWidth === '35%') {
      const chatHistory = document.querySelector('div.copyable-area') as HTMLDivElement;
      if (chatHistory) {
        chatHistory.style.maxWidth = '970px';
      }
      sideBarParent.style.maxWidth = '35%';
      sideBarParent.style.transition = 'all 0.15s ease-out';
      sideBarParent.style.maxWidth = '0%';
    } else {
      sideBarParent.style.maxWidth = '35%';
    }
  }
};

const handleKeyPress = (event: KeyboardEvent) => {
  const { metaKey,ctrlKey, key, shiftKey } = event;
  console.log({ metaKey, key, ctrlKey });

  if (key === 'k' && (metaKey || ctrlKey)) {
    console.log('cmd/ctrl+k');
    const newChatButton = document.querySelector('div[title="New chat"]');
    if (newChatButton) {
      newChatButton.dispatchEvent(new Event('mousedown', { bubbles: true }));
    }
  } else if (key === 'l' && ctrlKey) {
    console.log('ctrl+l');
    toggleCurrentChatVisibility();
  } else if (key === '\\' && shiftKey && (metaKey || ctrlKey)) {
    toggleSidebar();
  }
};

document.addEventListener('keydown', handleKeyPress);
