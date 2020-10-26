import { getCloseNewChatSidebarButton, getNewChatButton } from './selectors';
import { log, checkCombo } from './utils';

import { os } from './utils';

const openNewChat = () => {
  log("openNewChat");

  const closeBtn = getCloseNewChatSidebarButton();
  const newChatButton = getNewChatButton();

  if (closeBtn) {
    closeBtn.click();
    log('openNewChat -> close');
  } else if (newChatButton) {
    newChatButton.click();
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

  const searchBtn = getSearchButton();
  searchBtn.click();
};

const Labels = {
  MetaMacOS: '⌘ Command',
  CtrlMacOS: '⌃ Control',
  Ctrl: 'Ctrl',
};

const hotKeyConfiguration = {
  MacOS: {
    OPEN_NEW_CHAT: {
      key: 'k',
      metaKey: true,
      label: `${Labels.MetaMacOS} + K`
    },
    TOGGLE_VISIBILITY: {
      key: 'l',
      metaKey: true,
      label: `${Labels.MetaMacOS} + L`
    },
    TOGGLE_SIDEBAR: {
      key: '\\',
      metaKey: true,
      label: `${Labels.MetaMacOS} + \\`
    },
    TOGGLE_INFO: {
      key: 'i',
      metaKey: true,
      label: `${Labels.MetaMacOS} + I`
    },
    TOGGLE_SEARCH: {
      key: ' ',
      ctrlKey: true,
      label: `${Labels.CtrlMacOS} + Space`
    },
  },
  Windows: {
    OPEN_NEW_CHAT: {
      key: 'k',
      ctrlKey: true,
      label: `${Labels.Ctrl} + K`,
    },
    TOGGLE_VISIBILITY: {
      key: 'l',
      ctrlKey: true,
      label: `${Labels.Ctrl} + L`,
    },
    TOGGLE_SIDEBAR: {
      key: '\\',
      ctrlKey: true,
      label: `${Labels.Ctrl} + \\`,
    },
    TOGGLE_INFO: {
      key: 'i',
      ctrlKey: true,
      label: `${Labels.Ctrl} + I`,
    },
    TOGGLE_SEARCH: {
      key: ' ',
      ctrlKey: true,
      label: `${Labels.Ctrl} + Space`,
    },
  },
  Linux: {
    OPEN_NEW_CHAT: {
      key: 'k',
      ctrlKey: true,
      label: `${Labels.Ctrl} + K`,
    },
    TOGGLE_VISIBILITY: {
      key: 'l',
      ctrlKey: true,
      label: `${Labels.Ctrl} + L`,
    },
    TOGGLE_SIDEBAR: {
      key: '\\',
      ctrlKey: true,
      label: `${Labels.Ctrl} + \\`,
    },
    TOGGLE_INFO: {
      key: 'i',
      ctrlKey: true,
      label: `${Labels.Ctrl} + I`,
    },
    TOGGLE_SEARCH: {
      key: ' ',
      ctrlKey: true,
      label: `${Labels.Ctrl} + Space`,
    },
  },
};

export const getHotkeyConfigurationForCurrentOS = () => {
  const OS = os();
  return hotKeyConfiguration[OS];
};

const keyCombinations = {
  ...getHotkeyConfigurationForCurrentOS(),
  run: {
    OPEN_NEW_CHAT: openNewChat,
    TOGGLE_VISIBILITY: toggleCurrentChatVisibility,
    TOGGLE_SIDEBAR: toggleSidebar,
    TOGGLE_INFO: toggleInfo,
    TOGGLE_SEARCH: toggleSearch,
  }
};

const runHotKey = (keyValues: { key: string; metaKey: boolean; ctrlKey: boolean; shiftKey: boolean }, event: KeyboardEvent) => {
  const run = keyCombinations.run;

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
  if (!event.getModifierState('Control') && !event.getModifierState('Meta')) {
    // If a modifier is not selected, we can short-circuit this.
    log('No Modifier selected. Early return.');
    return;
  }

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
