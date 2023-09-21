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
        sans: [
          'GeneralSans-Variable',
          'GeneralSans',
          ...defaultTheme.fontFamily.sans,
        ],
        glow: [
          'Glow',
          {
            fontFeatureSettings: '"liga"',
          },
        ],
      },
      screens: {
        md: '820px',
        'layout-no-p': '1800px',
        layout: '1736px',
        '3xl': '1600px',
        wide: '1920px',
        '2k': '2000px',
      },
      fontSize: {
        xs: ['12px', '18px'],
        'body-xs': ['14px', '19px'],
        'body-s': ['16px', '22px'],
        'body-m': ['20px', '27px'],
        'body-m2': ['18px', '26px'],
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
        'heading-h1-2': [
          '72px',
          {
            fontWeight: '500',
            lineHeight: '67px',
            tracking: '-2px',
          },
        ],
        'heading-h2': [
          '48px',
          {
            fontWeight: '500',
            lineHeight: '64px',
          },
        ],
        'heading-h2-2': [
          '56px',
          {
            fontWeight: '500',
            lineHeight: '56px',
            tracking: '-2px',
          },
        ],
        'heading-h3': [
          '32px',
          {
            fontWeight: '500',
            lineHeight: '37px',
          },
        ],
        'heading-h4': [
          '24px',
          {
            fontWeight: '500',
            lineHeight: '32px',
            letterSpacing: '0.02em',
          },
        ],
        'subtitle-s': [
          '20px',
          {
            lineHeight: '27px',
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
        lred: '#FFE7EA',
        dim: '#F3F2F4',
        'checkbox-dark': 'rgba(240, 246, 255, 0.15)',
      },
      spacing: {
        screenx: 'calc(var(--vh, 1vh) * 100);',
      },
      borderWidth: {
        ['1.5']: '1.5px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#000',
            '--tw-prose-headings': '#000',
            '--tw-prose-counters': '#000',
            '--tw-prose-quotes': '#000',
            '--tw-prose-bold': '#000',
            '--tw-prose-captions': '#000',
          },
        },
      }),
      gridTemplateColumns: {
        'description-list': 'repeat(auto-fill, 152px)',
        24: 'repeat(24, minmax(0, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
