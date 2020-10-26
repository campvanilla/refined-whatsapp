import { createSwitcher } from './switcher';

import { getSidebarControls } from '@src/content-scripts/selectors';

export const setupThemes = () => {
  const poller = setInterval(() => {
    const sidebarControls = getSidebarControls();

    if (sidebarControls) {
      clearInterval(poller);
      createSwitcher({ sidebarControls });
    }
  }, 500);
};
