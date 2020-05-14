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
