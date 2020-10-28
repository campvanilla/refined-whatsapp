// this file runs at "document_idle" (see manifest)
import { handleHotKeys } from './hotkeys';
import { setupThemes } from '../theme';


document.addEventListener('keydown', handleHotKeys);
setupThemes();
