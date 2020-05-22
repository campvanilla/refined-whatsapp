# refined-whatsapp

> Supercharge Whatsapp™ Web with hotkeys and a dark theme 🚀

<img width="1400" alt="GithubBanner" src="https://user-images.githubusercontent.com/6417910/82126610-6d87e800-97cb-11ea-8201-50ced4a2de0b.png">

<hr />

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<a href="https://chrome.google.com/webstore/detail/refined-whatsapp/alkoadailhkkeiaadmlkbhbegegjhiok" title="refined whatsapp on Chrome Web Store">
<img src="https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_206x58.png" />
</a>

<hr />

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



# For all the above features in Whatsapp MacOS App

> You need NodeJS and NPM. (Bare Minimum);


> You also need to make sure the Whatsapp app is not running.
> After the process is complete the App will start automatically.

```sh
# clone the repo
$ git clone git@github.com:campvanilla/refined-whatsapp.git
$ cd refined-whatsapp

# install && build
$ npm install && npm run ultra

# take note of the output directory, it'll be /path/to/refined-whatsapp/dist

$ sh mac.sh
```

That's it. Enjoy.
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://aditimohanty.com/?utm_source=github&utm_medium=documentation-allcontributors&utm_content=refined-whatsapp"><img src="https://avatars3.githubusercontent.com/u/6426069?v=4" width="100px;" alt=""/><br /><sub><b>Aditi Mohanty</b></sub></a><br /><a href="https://github.com/campvanilla/refined-whatsapp/commits?author=rheaditi" title="Code">💻</a> <a href="https://github.com/campvanilla/refined-whatsapp/commits?author=rheaditi" title="Documentation">📖</a> <a href="#ideas-rheaditi" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://abinavseelan.com/?utm_source=github&utm_medium=documentation-allcontributors&utm_content=refined-whatsapp"><img src="https://avatars2.githubusercontent.com/u/6417910?v=4" width="100px;" alt=""/><br /><sub><b>Abinav Seelan</b></sub></a><br /><a href="https://github.com/campvanilla/refined-whatsapp/commits?author=abinavseelan" title="Code">💻</a> <a href="https://github.com/campvanilla/refined-whatsapp/commits?author=abinavseelan" title="Documentation">📖</a> <a href="#ideas-abinavseelan" title="Ideas, Planning, & Feedback">🤔</a> <a href="#video-abinavseelan" title="Videos">📹</a></td>
    <td align="center"><a href="http://siddharthparmar.in"><img src="https://avatars3.githubusercontent.com/u/5427715?v=4" width="100px;" alt=""/><br /><sub><b>Siddharth Parmar</b></sub></a><br /><a href="https://github.com/campvanilla/refined-whatsapp/issues?q=author%3ASiddharth11" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
