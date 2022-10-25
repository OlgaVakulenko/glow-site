const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['GeneralSans-Variable', ...defaultTheme.fontFamily.sans],
        glow: 'Glow',
      },
      fontSize: {
        xs: ['12px', '18px'],
      },
      colors: {
        brand: '#E33230',
        // brand: '#d6dbe0', //Dev only
        black: '#19191B',
        lblue: '#F0F6FF',
        dim: '#F3F2F4',
      },
      borderWidth: {
        ['1.5']: '1.5px',
      },
    },
  },
  plugins: [
    // plugin((api) => {
    //   api.addVariant('phover', ({ container }) => {
    //     const mediaRule = api.postcss.atRule({
    //       name: 'media',
    //       params: '(hover: hover)',
    //     });
    //     mediaRule.append(container.nodes);
    //     container.append(mediaRule);
    //   });
    // }),
  ],
};
