// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const log = (...args: any[]) => {
  if (__DEBUG__) {
    console.log("[DEBUG] ", ...args);
  }
}

export const checkCombo = (keyCombo, modifiers) => {
  const checkList = ['key', 'ctrlKey', 'metaKey', 'shiftKey'];

  for (let i = 0; i < checkList.length; i++) {
    const key = checkList[i];
    if ((keyCombo[key] || false) !== modifiers[key]) {
      return false;
    }
  }

  return true;
}

const getOS = () => {
  const platform = window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  let os = '';

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'MacOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return () => {
    return os;
  };
}

export const os = getOS();
