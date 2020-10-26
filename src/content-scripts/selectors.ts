export const getNewChatButton = () => document.querySelector(`[data-testid='chat']`) as HTMLSpanElement;

export const getCloseNewChatSidebarButton = () =>
  document.querySelector(`button > [data-testid='back']`) as HTMLSpanElement;

export const getSearchButton = () => document.querySelector(`[data-testid='search-alt']`) as HTMLSpanElement;

export const getSidebarControls = () => document.getElementById(`side`) as HTMLDivElement;

export const getSidebarControlsSettingsMenuButton = (controls?: HTMLDivElement) => {
  const sidebarControls = controls || getSidebarControls();

  return sidebarControls.querySelector(`div[title="Menu"]`) as HTMLDivElement;
};
