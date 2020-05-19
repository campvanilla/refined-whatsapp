import { get, set } from './sync';
import { log } from '@src/content-scripts/utils';

export * as storageSync from './sync';

export const getPreferredTheme = async (defaultTheme?: string) => {
  let selectedTheme;

  if (typeof chrome !== 'undefined') {
    const { preferredTheme } = await get<{
      preferredTheme?: string;
    }>(['preferredTheme']);
    selectedTheme = preferredTheme;
  } else {
    selectedTheme = localStorage.preferredTheme;
  }

  log('received preferred theme', { selectedTheme });

  if (typeof selectedTheme === 'undefined') {
    return defaultTheme;
  }
  return selectedTheme;
};

export const setPreferredTheme = async (theme: string) => {
  log('setting preferred theme to', { theme });

  if (typeof chrome !== 'undefined') {
    return set({ preferredTheme: theme });
  } else {
    return localStorage.setItem('preferredTheme', theme);
  }
};
