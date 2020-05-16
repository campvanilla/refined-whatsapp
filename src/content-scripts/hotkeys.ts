import { log, checkCombo } from './utils';

import { os } from './utils';

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

const toggleSearch = () => {
  log('toggleSearch');

  const searchBtn = document.querySelector('div[title="Search…"]') as HTMLDivElement;

  searchBtn.dispatchEvent(new Event('mousedown', { bubbles: true }));
}

const hotKeyConfiguration = {
  MacOS: {
    OPEN_NEW_CHAT: {
      key: 'k',
      metaKey: true,
    },
    TOGGLE_VISIBILITY: {
      key: 'l',
      metaKey: true,
    },
    TOGGLE_SIDEBAR: {
      key: '\\',
      metaKey: true,
    },
    TOGGLE_INFO: {
      key: 'i',
      metaKey: true,
    },
    TOGGLE_SEARCH: {
      key: ' ',
      ctrlKey: true,
    },
  },
  Windows: {
    OPEN_NEW_CHAT: {
      key: 'k',
      ctrlKey: true,
    },
    TOGGLE_VISIBILITY: {
      key: 'l',
      ctrlKey: true,
    },
    TOGGLE_SIDEBAR: {
      key: '\\',
      ctrlKey: true,
    },
    TOGGLE_INFO: {
      key: 'i',
      ctrlKey: true,
    },
    TOGGLE_SEARCH: {
      key: ' ',
      ctrlKey: true,
    },
  },
  Linux: {
    OPEN_NEW_CHAT: {
      key: 'k',
      ctrlKey: true,
    },
    TOGGLE_VISIBILITY: {
      key: 'l',
      ctrlKey: true,
    },
    TOGGLE_SIDEBAR: {
      key: '\\',
      ctrlKey: true,
    },
    TOGGLE_INFO: {
      key: 'i',
      ctrlKey: true,
    },
    TOGGLE_SEARCH: {
      key: ' ',
      ctrlKey: true,
    },
  },
  run: {
    OPEN_NEW_CHAT: openNewChat,
    TOGGLE_VISIBILITY: toggleCurrentChatVisibility,
    TOGGLE_SIDEBAR: toggleSidebar,
    TOGGLE_INFO: toggleInfo,
    TOGGLE_SEARCH: toggleSearch,
  }
};

const runHotKey = (keyValues: { key: string; metaKey: boolean; ctrlKey: boolean; shiftKey: boolean }, event: KeyboardEvent) => {
  const OS = os();

  const keyCombinations = hotKeyConfiguration[OS];
  const run = hotKeyConfiguration.run;

  Object
    .keys(keyCombinations)
    .forEach((action) => {
      if (checkCombo(keyCombinations[action], keyValues)) {
        event.preventDefault();
        run[action]();
      }
    })
}


export const handleHotKeys = (event: KeyboardEvent) => {
  // To override chrome hotkeys
  const { metaKey, ctrlKey, key, shiftKey } = event;

  log({ metaKey, key, ctrlKey });

  runHotKey({
    key,
    metaKey,
    ctrlKey,
    shiftKey,
  }, event);
};
