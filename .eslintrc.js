module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  env: {
    browser: true,
    es6: true,
    node: false,
    webextensions: true,
  },
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
  },
  "overrides": [
    {
      "files": ["*.js"],
      "rules": {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ],
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    'react/prop-types': 0,
  },
  globals: {
    __DEBUG__: true,
    __DEV__: true,
    __PROD__: true,
  }
};
