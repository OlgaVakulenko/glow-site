// prettier.config.js
module.exports = {
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('prettier-plugin-organize-imports'),
  ],
};
