
import { log } from '../content-scripts/utils';
import { ThemeType, ThemeStyles } from './themes'
import { getPreferredTheme, setPreferredTheme } from '@src/storage';

const internalStyleOverride = document.createElement('style');
internalStyleOverride.id = 'refined-whatsapp--internal-style';

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
