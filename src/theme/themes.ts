export enum ThemeType {
  'WhatsappWeb' = 'WhatsappWeb',
  'RefinedDark' = 'RefinedDark',
}

export const ThemeStyles = new Map<ThemeType, string>([
  [ThemeType.WhatsappWeb, ''],
]);

ThemeStyles.set(
  ThemeType.RefinedDark,
  `
:root {
  --app-background-stripe: #151515;
  --primary: #eee;
  --border-default: rgb(36, 36, 36);
  --butterbar-default-background: #00bfa5;
  --panel-background-rgb: 36, 36, 36;
  --drawer-background: rgb(36, 36, 36);
  --drawer-section-background: #2c2c2c;
  --incoming-background: rgb(36, 36, 36);
  --incoming-background-rgb: 67, 67, 67;
  --incoming-background-deeper: #383838;
  --outgoing-background: rgb(36, 36, 36);
  --outgoing-background-rgb: 67, 67, 67;
  --outgoing-background-deeper: #383838;
  --overlay-rgb: #383838;
  --popup-panel-background: #383838;
  --outgoing-background-deeper-rgb: 67, 67, 67;
  --dropdown-background: rgb(36, 36, 36);
  --panel-background-deep: #434343;
  --panel-background-deeper: #151515;
  --drawer-gallery-background: #242424;
  --compose-background: #434343;
  --message-selection-highlight: rgba(0,0,0, 0.2);
  --modal-backdrop: rgba(0,0,0, 0.6);
  --modal-background: rgb(36, 36, 36);
  --button-primary-background: #434343;
  --button-primary-background-hover: #434343;
  --button-primary: #cbd4d9;
  --bubble-meta-icon: #eee;
  --chatlist-icon: #eee;
  --bubble-meta: #eee;
  --button-secondary: #cbd4d9;
  --button-secondary-hover: #cbd4d9;
  --button-secondary-background-hover: #434343;
  --rich-text-panel-background: rgb(36, 36, 36);
  --panel-background-hover: #232d36;
  --panel-background-hover-rgb: 35, 45, 54;
  --background-default-active: #151515;
  --drawer-background-rgb: 16, 29, 37;
  --drawer-section-background-rgb: 16, 29, 37;
  --conversation-panel-background: #151515;
  --intro-background: #151515;
  --background-default: rgb(36, 36, 36);
  --panel-background-lighter: rgb(36, 36, 36);
  --panel-header-background: rgb(36, 36, 36);
  --panel-background: rgb(36, 36, 36);
  --background-default-hover: #434343;
  --primary-strong: #eee;
  --primary-strong-rgb: 209, 216, 221;
  --primary-stronger: #fff;
  --secondary: #ddd;
  --secondary-stronger:: #ddd;
  --secondary-lighter: #ddd;
  --secondary-light: #158ccc;
  --icon-lighter: #ddd;
  --icon-lighter-rgb: #ddd;
  --icon-strong-rgb: #fff;
  --border-list: rgba(0, 0, 0, 0);
  --system-message-background: #434343;
  --system-message-text: #fff;
  --dropdown-background-hover: #434343;
  --primary-title: #eee;
  --unread-background: #2e2e2e;
  --unread-bar-background: #434343;
  --media-viewer-background: #151515;
  --icon-strong: #adadad;
  --intro-secondary: #ddd;
  --message-primary: #fff;
  --search-input-background:  rgb(36, 36, 36);
  --compose-border: #434343;
  --compose-primary: #eee;
}
body {
    color: #d1d8dd;
}

.app {
  border-radius: 6px !important;
}

.app-wrapper-web {
    background-color: #1C2022;
}

#startup, #initial_startup {
  background-color: rgb(36, 36, 36);
}
`.trim()
);
