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
