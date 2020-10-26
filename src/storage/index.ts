import { get, set } from './sync';
import { log } from '@src/content-scripts/utils';

export * as storageSync from './sync';

export const getPreferredTheme = async (defaultTheme?: string) => {
  const { preferredTheme } = await get<{
    preferredTheme?: string;
  }>(['preferredTheme']);
  log('received preferred theme', { preferredTheme });

  if (typeof preferredTheme === 'undefined') {
    return defaultTheme;
  }
  return preferredTheme;
};

export const setPreferredTheme = async (theme: string) => {
  log('setting preferred theme to', { theme });
  return set({ preferredTheme: theme });
};
