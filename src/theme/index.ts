import { log } from '../content-scripts/utils';
import { ThemeType, ThemeStyles } from './themes';
import { getPreferredTheme, setPreferredTheme } from '@src/storage';

const internalStyleOverride = document.createElement('style');
internalStyleOverride.id = 'refined-whatsapp--internal-style';

const THEME_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`;

// module context variables :(
let appended = false;
let currentTheme = ThemeType.WhatsappWeb;

export const toggleTheme = () => {
  const to = currentTheme === ThemeType.WhatsappWeb ? ThemeType.RefinedDark : ThemeType.WhatsappWeb;
  log({ setThemeTo: to });

  if (appended === false) {
    document.head.append(internalStyleOverride);
    appended = true;
  }

  if (ThemeStyles.has(to)) {
    internalStyleOverride.innerText = ThemeStyles.get(to) as string;
    currentTheme = to;
    setPreferredTheme(to);
  }
};

export const setInitialTheme = async () => {
  const theme = await getPreferredTheme(currentTheme);
  if (theme !== currentTheme) {
    toggleTheme();
  }
};

export const setupThemes = () => {
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
    }
  }, 500);

  // override default dark mode with extension's
  document.body.classList.remove('dark');
};
