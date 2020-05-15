import { RefinedDark } from './themes';
import { log } from '../content-scripts/utils';

export enum Theme {
  'WhatsappWeb',
  'RefinedDark',
}

const THEMES = new Map<Theme, string>([
  [Theme.WhatsappWeb, ''],
  [Theme.RefinedDark, RefinedDark],
]);

const internalStyleOverride = document.createElement('style');
internalStyleOverride.id = 'refined-whatsapp--internal-style';
let appended = false;

let currentTheme = Theme.WhatsappWeb;

export const toggleTheme = () => {
  const to = currentTheme === Theme.WhatsappWeb ? Theme.RefinedDark : Theme.WhatsappWeb;
  log({ setThemeTo: to });

  if (appended === false) {
    document.head.append(internalStyleOverride);
    appended = true;
  }

  if (THEMES.has(to)) {
    internalStyleOverride.innerText = THEMES.get(to) as string;
    currentTheme = to;
  }
};

