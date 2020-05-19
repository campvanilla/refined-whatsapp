import { log } from '@src/content-scripts/utils';

/**
 * Fetch given keys from Chrome's storage API
 * @see https://developer.chrome.com/apps/storage#property-sync
 */
export const get = <T = unknown>(keys: (keyof T)[]): Promise<T> => new Promise((resolve, reject) => {
  try {
    chrome.storage.sync.get(keys, (data: T) => {
      resolve(data);
    });
  } catch (error){
    log(error);
    reject(error);
  }
});

/**
 * Store data via Chrome's storage API
 * @see https://developer.chrome.com/apps/storage#property-sync
 */
export const set = <T = unknown>(data: T): Promise<void> => new Promise((resolve, reject) => {
  try {
    chrome.storage.sync.set(data, resolve);
  } catch (error) {
    reject(error);
  }
});
