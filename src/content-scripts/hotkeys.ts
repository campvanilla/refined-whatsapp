import { log, checkCombo } from './utils';

const openNewChat = () => {
  log("openNewChat");

  const newChatButton = document.querySelector('div[title="New chat"]');
  if (newChatButton) {
    newChatButton.dispatchEvent(new Event('mousedown', { bubbles: true }));
  }
};

const toggleCurrentChatVisibility = () => {
  log('toggleCurrentChatVisibility');

  const chatHistory = document.querySelector('div.copyable-area') as HTMLDivElement;

  if (chatHistory) {
    if (chatHistory.style.opacity === '0') {
      chatHistory.style.opacity = '1';
    } else {
      chatHistory.style.opacity = '0';
    }
  }
};

const toggleSidebar = () => {
  log('toggleSidebar');

  const sideBar = document.getElementById('side') as HTMLDivElement;

  if (sideBar) {
    const sideBarParent = sideBar.parentElement as HTMLDivElement;

    if (sideBarParent.style.maxWidth === '35%') {
      sideBarParent.style.maxWidth = '35%';
      sideBarParent.style.transition = 'all 0.15s ease-out';
      sideBarParent.style.maxWidth = '0%';
    } else {
      sideBarParent.style.maxWidth = '35%';
    }
  }
};

const hotKeyConfiguration = {
  OPEN_NEW_CHAT: {
    run: openNewChat,
    keyCombo: [{ key: 'key', value: 'k' }, { key: 'cmd', value: true }],
  },
  TOGGLE_VISIBILITY: {
    run: toggleCurrentChatVisibility,
    keyCombo: [{ key: 'key', value: 'l' }, { key: 'ctrlKey', value: true }],
  },
  TOGGLE_SIDEBAR: {
    run: toggleSidebar,
    keyCombo: [{ key: 'key', value: '\\' }, { key: 'shiftKey', value: true }, { key: 'cmd', value: true }],
  },
};

const runHotKey = (keyValues: { key: string; metaKey: boolean; ctrlKey: boolean; shiftKey: boolean }) => {
  Object
    .keys(hotKeyConfiguration)
    .forEach((action) => {
      if (checkCombo(hotKeyConfiguration[action].keyCombo, keyValues)) {
        hotKeyConfiguration[action].run();
      }
    })
}


export const handleHotKeys = (event: KeyboardEvent) => {
  const { metaKey, ctrlKey, key, shiftKey } = event;

  log({ metaKey, key, ctrlKey });

  if (key === 'k' && (ctrlKey || metaKey)) {
    openNewChat();
    return;
  }

  if (key === 'l' && ctrlKey) {
    toggleCurrentChatVisibility();
    return;
  }

  if (key === '\\' && shiftKey && (ctrlKey || metaKey)) {
    toggleSidebar();
    return;
  }

  // runHotKey({
  //   key,
  //   metaKey,
  //   ctrlKey,
  //   shiftKey,
  // });
};
