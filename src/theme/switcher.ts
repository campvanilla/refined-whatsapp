import { ThemeType, ThemeStyles, ThemesList } from '@src/theme/themes';
import { getPreferredTheme, setPreferredTheme } from '@src/storage';
import { log } from '@src/content-scripts/utils';
import { getSidebarControlsSettingsMenuButton } from '@src/content-scripts/selectors';

const THEME_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`;

const createThemeControls = async () => {
  const internalStyleOverride = document.createElement('style');
  internalStyleOverride.id = 'refined-whatsapp--internal-style';

  // state
  let appended = false;
  let currentTheme: ThemeType;
  let currentThemeIndex: number;
  const lastIndex = ThemesList.length - 1;

  const appendStyleContainerIfMissing = () => {
    if (!appended || document.getElementById(internalStyleOverride.id) === null) {
      document.head.append(internalStyleOverride);
      appended = true;
    }
  };

  const setTheme = (theme: ThemeType) => {
    if (currentTheme === theme) {
      currentThemeIndex = ThemesList.indexOf(currentTheme);
      log('🎨 :no change');
      return;
    }

    log(`🎨 : changed "${currentTheme || 'none'}" → "${theme}"`);
    appendStyleContainerIfMissing();

    // override theme if required
    if (theme === ThemeType.WhatsappWebDark && !document.body.classList.contains('dark')) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    const themeStyles = ThemeStyles.get(theme);
    if (typeof themeStyles === 'string') {
      internalStyleOverride.innerText = themeStyles;
    }
    // finally set theme
    currentTheme = theme;
    currentThemeIndex = ThemesList.indexOf(currentTheme);
    setPreferredTheme(theme);
  };

  const cycleThemes = () => {
    const nextThemeIndex = currentThemeIndex === lastIndex ? 0 : currentThemeIndex + 1;
    setTheme(ThemesList[nextThemeIndex]);
  };

  const preferredTheme = await getPreferredTheme(ThemeType.RefinedDark);
  setTheme(preferredTheme);

  return {
    cycleThemes,
    setTheme,
  };
};

export const createSwitcher = async ({ sidebarControls }: { sidebarControls: HTMLDivElement }) => {
  const menuButton = getSidebarControlsSettingsMenuButton(sidebarControls);
  const menuButtonItem = menuButton.parentElement as HTMLDivElement;
  const controlsList = menuButtonItem.parentElement as HTMLDivElement;

  const themeBtn = document.createElement('span');
  themeBtn.setAttribute('role', 'button');
  themeBtn.setAttribute('title', 'Cycle themes');

  themeBtn.innerHTML = THEME_ICON;
  themeBtn.style.color = 'var(--icon)';
  themeBtn.style.marginLeft = '12px';

  const themeControls = await createThemeControls();
  themeBtn.addEventListener('click', themeControls.cycleThemes);

  controlsList.appendChild(themeBtn);
};
