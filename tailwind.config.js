const defaultTheme = require('tailwindcss/defaultTheme');

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
        glow: [
          'Glow',
          {
            fontFeatureSettings: '"liga"',
          },
        ],
      },
      screens: {
        md: '965px',
      },
      fontSize: {
        xs: ['12px', '18px'],
        'body-xs': ['14px', '19px'],
        'body-s': ['16px', '22px'],
        'body-m': ['20px', '27px'],
        'body-l': ['24px', '36px'],
        'body-heading-s': [
          '12px',
          {
            lineHeight: '18px',
            fontWeight: '500',
          },
        ],
        'body-heading-m': [
          '20px',
          {
            lineHeight: '30px',
            fontWeight: '500',
          },
        ],
        'body-list-s': [
          '16px',
          {
            lineHeight: '32px',
          },
        ],
        'body-list-m': [
          '20px',
          {
            lineHeight: '40px',
          },
        ],
        'button-s': [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0.03em',
            fontWeight: '500',
          },
        ],
        'button-m': [
          '14px',
          {
            lineHeight: '19px',
            letterSpacing: '0.03em',
            fontWeight: '500',
          },
        ],
        'button-l': [
          '16px',
          {
            lineHeight: '22px',
            letterSpacing: '0.03em',
            fontWeight: '500',
          },
        ],
        'body-link': [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '19px',
            letterSpacing: '0.03em',
          },
        ],
        'heading-h1': [
          '64px',
          {
            fontWeight: '500',
            lineHeight: '64px',
          },
        ],
        'heading-h2': [
          '48px',
          {
            fontWeight: '500',
            lineHeight: '64px',
          },
        ],
        'heading-h3': [
          '32px',
          {
            fontWeight: '500',
            lineHeight: '48px',
          },
        ],
        'heading-h4': [
          '24px',
          {
            fontWeight: '500',
            lineHeight: '40px',
            letterSpacing: '0.02em',
          },
        ],
        'subtitle-s': [
          '20px',
          {
            lineHeight: '32px',
          },
        ],
        'subtitle-m': [
          '20px',
          {
            lineHeight: '27px',
          },
        ],
        'subtitle-l': [
          '24px',
          {
            lineHeight: '32px',
          },
        ],
      },
      colors: {
        brand: '#E33230',
        // brand: '#d6dbe0', //Dev only
        black: '#19191B',
        lblue: '#F0F6FF',
        dim: '#F3F2F4',
      },
      spacing: {
        screenx: 'calc(var(--vh, 1vh) * 100);',
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
