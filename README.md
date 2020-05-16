# refined-whatsapp

> Supercharge Whatsapp™ Web with hotkeys and a dark theme 🚀

## setup

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
