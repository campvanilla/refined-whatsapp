// this file runs at "document_idle" (see manifest)
import { handleHotKeys } from './hotkeys';
import { setTheme, Theme } from '../theme';

console.clear();

document.addEventListener('keydown', handleHotKeys);

// const poller = setInterval(() => {
//   const controlList = document.getElementById('side') as HTMLDivElement;
//   if (controlList) {
//     clearInterval(poller);
//     const themeBtn = document.createElement('BUTTON');
//     themeBtn.innerText = 'Change Theme';
//     themeBtn.addEventListener('click', () => {
//       setTheme(Theme.OvernightSlumber);
//     });

//     controlList.children[0].appendChild(themeBtn);
//   }
// }, 1000);

setTheme(Theme.OvernightSlumber);
