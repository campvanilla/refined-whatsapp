export const log = (s: any) => {
  if (__DEBUG__) {
    console.log("[DEBUG] ", s);
  }
}

export const checkCombo = (keys, modifiers) => {
  console.log("checkCombo -> modifiers", modifiers);
  console.log("checkCombo -> keys", keys);
  for (let i = 0; i < keys.length; i++) {
    if (
      keys[i].key === 'cmd'
      && !(
        modifiers.ctrlKey
        || modifiers.metaKey
      )
    ) {
      return false;
    } else if (modifiers[keys[i].key] !== keys[i].value) {
      return false;
    }
  }

  return true;
}
