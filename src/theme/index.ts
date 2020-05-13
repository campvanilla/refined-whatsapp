import { OvernightSlumber } from './overnight';
import { log } from '../content-scripts/utils';

export enum Theme {
  'WhatsappWeb',
  'OvernightSlumber',
}

const THEMES = new Map<Theme, string>([
  [Theme.WhatsappWeb, ''],
  [Theme.OvernightSlumber, OvernightSlumber],
]);

const internalStyleOverride = document.createElement('style');
internalStyleOverride.id = 'refined-whatsapp--internal-style';
let appended = false;

const currentTheme = Theme.WhatsappWeb;

export const setTheme = (to: Theme) => {
  log({ setThemeTo: to });
  if (appended === false) {
    appended = true;
    document.head.append(internalStyleOverride);
  }

  if (to !== currentTheme && THEMES.has(to)) {
    internalStyleOverride.innerText = THEMES.get(to) as string;
  }
};
