import { log, checkCombo } from './utils';

const openNewChat = () => {
  log("openNewChat");

  const newChatButton = document.querySelector('div[title="New chat"]') as HTMLDivElement;
  const closeBtn = document.querySelector('span[data-icon="back-light"]') as HTMLSpanElement;

  if (closeBtn) {
    closeBtn.click();
    log('openNewChat -> close');
  } else if (newChatButton) {
    newChatButton.dispatchEvent(new Event('mousedown', { bubbles: true }));
    log('openNewChat -> open');
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

const toggleInfo = () => {
  log('toggleInfo');

  const header = document.querySelector('#main header img') as HTMLDivElement;
  const closeBtn = document.querySelector('div[data-animate-drawer-title="true"] button') as HTMLButtonElement;

  if (closeBtn) {
    closeBtn.click();
    log('toggleInfo -> close');
  } else if (header) {
    header.click();
    log('toggleInfo -> open');
  }
}

const hotKeyConfiguration = {
  OPEN_NEW_CHAT_WITH_CTRL: {
    run: openNewChat,
    keyCombo: {
      key: 'k',
      ctrlKey: true,
    },
  },
  OPEN_NEW_CHAT_WITH_CMD: {
    run: openNewChat,
    keyCombo: {
      key: 'k',
      metaKey: true,
    },
  },
  TOGGLE_VISIBILITY: {
    run: toggleCurrentChatVisibility,
    keyCombo: {
      key: 'l',
      ctrlKey: true,
    },
  },
  TOGGLE_SIDEBAR_WITH_CTRL: {
    run: toggleSidebar,
    keyCombo: {
      key: '\\',
      shiftKey: true,
      ctrlKey: true,
    },
  },
  TOGGLE_SIDEBAR_WITH_CMD: {
    run: toggleSidebar,
    keyCombo: {
      key: '\\',
      shiftKey: true,
      metaKey: true,
    },
  },
  TOGGLE_INFO_WITH_CTRL: {
    run: toggleInfo,
    keyCombo: {
      key: 'i',
      ctrlKey: true,
    },
  },
  TOGGLE_INFO_WITH_CMD: {
    run: toggleInfo,
    keyCombo: {
      key: 'i',
      metaKey: true,
    },
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

  runHotKey({
    key,
    metaKey,
    ctrlKey,
    shiftKey,
  });
};
