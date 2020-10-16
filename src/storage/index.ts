import { get, set } from './sync';
import { log } from '@src/content-scripts/utils';
import { ThemeType, ThemesList } from '@src/theme/themes';

export * as storageSync from './sync';

export const getPreferredTheme = async (defaultTheme?: string): Promise<ThemeType> => {
  const { preferredTheme } = await get<{
    preferredTheme?: string;
  }>(['preferredTheme']);
  log('received preferred theme', { preferredTheme });

  if (typeof preferredTheme === 'undefined' || !ThemesList.includes(preferredTheme as ThemeType)) {
    return defaultTheme as ThemeType;
  }
  return preferredTheme as ThemeType;
};

export const setPreferredTheme = async (theme: string) => {
  log('setting preferred theme to', { theme });
  return set({ preferredTheme: theme });
};
