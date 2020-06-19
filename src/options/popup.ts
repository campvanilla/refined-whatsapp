import { log } from '@src/content-scripts/utils';
import { getHotkeyConfigurationForCurrentOS } from '@src/content-scripts/hotkeys';

const ACTION_LABEL = {
  OPEN_NEW_CHAT: 'Start a new chat / Quick search',
  TOGGLE_VISIBILITY: 'Show/hide current chats',
  TOGGLE_SIDEBAR: 'Show/hide chat sidebar',
  TOGGLE_INFO: 'Show/hide chat info',
  TOGGLE_SEARCH: 'Search messages in chat',
};

const showHotkeys = () => {
  const tableBody = document.querySelector('table > tbody');

  if (tableBody) {
    const config = getHotkeyConfigurationForCurrentOS();
    log(config);
    const content = Object.entries(config)
      .map(([actionName, actionConfig]) => {
        const name = ACTION_LABEL[actionName];
        const label = ((actionConfig as unknown) as any).label as string; // TODO: @abinavseelan will get back to this :P
        return `
        <tr>
          <td>${name}</td>
          <td> <kbd>${label}</kbd> </td>
        </tr>
        `;
      })
      .join('');
    tableBody.innerHTML = content;
  }
};

const showVersion = () => {
  const { version } = chrome.runtime.getManifest();

  const versionContiainer: HTMLElement | null  = document.querySelector('small[data-version]');

  if (!versionContiainer) {
    return;
  }

  versionContiainer.innerText = `v${version}`;
}

showHotkeys();
showVersion();
