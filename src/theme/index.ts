import { createSwitcher } from './switcher';
import { SIDEBAR_CONTROLS_ID } from '@src/selectors';

export const setupThemes = () => {
  const poller = setInterval(() => {
    const sidebarControls = document.getElementById(SIDEBAR_CONTROLS_ID) as HTMLDivElement;

    if (sidebarControls) {
      clearInterval(poller);
      createSwitcher({ sidebarControls });
    }
  }, 500);
};
