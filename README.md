# refined-whatsapp

> Supercharge Whatsapp™ Web with hotkeys and a dark theme 🚀


<img width="1400" alt="GithubBanner" src="https://user-images.githubusercontent.com/6417910/82126610-6d87e800-97cb-11ea-8201-50ced4a2de0b.png">

## Keyboard Shortcuts

| Action | Hotkey |
|---|---|
| Start a new chat / Quick search | `⌘ Command + K` or `Ctrl + K` |
| Show/hide current chats | `⌘ Command + L` or `Ctrl + L` |
| Show/hide chat sidebar | `⌘ Command + \` or `Ctrl + \` |
| Show/hide chat info | `⌘ Command + I` or `Ctrl + I` |
| Search messages in chat | `⌃ Ctrl + Space` |

## Dark Mode

![dark-mode](https://user-images.githubusercontent.com/6426069/82143287-59da9100-9860-11ea-92bc-5a0674c3e920.jpg)

## local setup

If you'd like to try this extension out before a stable release:-

1. Setup the repo:

```sh
# clone the repo
$ git clone git@github.com:campvanilla/refined-whatsapp.git
$ cd refined-whatsapp

# install && build
$ npm install && npm run build

# take note of the output directory, it'll be /path/to/refined-whatsapp/dist
```

2. Head over to `chrome://extensions/`
3. Select "load unpacked" & load the "dist" directory from above.
4. Head over to `https://web.whatsapp.com/` & check out the features! 💰

If you want to edit the extension yourself, we use `rollup-plugin-chrome-extension` with `simpleReloader` so after you load the unpacked extension (after running `npm start`) it will automatically reload the extension on every change. 🙃
