// this file runs at "document_idle" (see manifest)
import { handleHotKeys } from './hotkeys';
import { toggleTheme, setInitialTheme } from '../theme';

const THEME_ICON = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="currentColor" d="M22.6 11.29L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6c-.39-.39-1.02-.39-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6c-.39.39-.39 1.02 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69l2.6-2.6c.39-.39.39-1.03 0-1.42zm-4.68 1.69c-.34 2.12-1.85 3.94-3.88 4.66-1.21.43-2.41.45-3.5.18-.41-.1-.48-.65-.13-.9C11.98 15.84 13 14.04 13 12s-1.02-3.84-2.58-4.92c-.35-.24-.29-.79.13-.9 1.09-.27 2.29-.25 3.5.18 2.02.72 3.54 2.54 3.88 4.66.05.33.07.66.07.98-.01.32-.03.65-.08.98z"/></svg>`;

document.addEventListener('keydown', handleHotKeys);
setInitialTheme();

function removeDefaultDarkTheme() {
  // override default dark mode with extension's
  document.body.classList.remove('dark');
}

const poller = setInterval(() => {
  const controlList = document.getElementById('side') as HTMLDivElement;

  if (controlList) {
    clearInterval(poller);

    const themeBtn = document.createElement('span');
    themeBtn.setAttribute('role', 'button');
    themeBtn.innerHTML = THEME_ICON;
    themeBtn.style.color = 'var(--icon)';
    themeBtn.style.marginLeft = '12px';
    themeBtn.addEventListener('click', () => {
      toggleTheme();
    });

    controlList.children[0].appendChild(themeBtn);
    removeDefaultDarkTheme();
  }
}, 500);

removeDefaultDarkTheme();
