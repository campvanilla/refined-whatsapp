export const log = (s: any) => {
  if (__DEBUG__) {
    console.log("[DEBUG] ", s);
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
    os = 'Mac OS';
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
