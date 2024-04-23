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
          'Inter-Variable',
          'GeneralSans',
          ...defaultTheme.fontFamily.sans,
        ],
        glow: ['Satoshi'],
        satoshi: 'Satoshi',
        inter: 'Inter-Variable',
      },
      screens: {
        md: '820px',
        'md-safe': '1000px',
        'x-920': '904px',
        'x-1400': '1440px',
        '4xl': '1800px',
        layout: '1736px',
        '3xl': '1600px',
        wide: '1920px',
        '2k': '2000px',
      },
      fontSize: {
        'next-tag': [
          '12px',
          {
            lineHeight: '24px',
            letterSpacing: '0.02em',
          },
        ],
        'next-heading-0': [
          '72px',
          {
            lineHeight: '80px',
            letterSpacing: '-1px',
          },
        ],
        'next-heading-1': [
          '64px',
          {
            lineHeight: '80px',
            letterSpacing: '-1px',
          },
        ],
        'next-heading-2': [
          '56px',
          {
            lineHeight: '72px',
            letterSpacing: '-1px',
          },
        ],
        'next-heading-3': [
          '48px',
          {
            lineHeight: '64px',
            letterSpacing: '-1px',
          },
        ],
        'next-heading-4': [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '-1px',
          },
        ],
        'next-heading-5': [
          '32px',
          {
            lineHeight: '40px',
            letterSpacing: '-1px',
          },
        ],
        'next-heading-6': [
          '24px',
          {
            lineHeight: '32px',
            letterSpacing: '0px',
          },
        ],
        'next-heading-7': [
          '20px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
          },
        ],
        'next-body-xxl': [
          '24px',
          {
            lineHeight: '36px',
            letterSpacing: '-1px',
          },
        ],
        'next-body-xl': [
          '22px',
          {
            lineHeight: '32px',
            letterSpacing: '-1px',
          },
        ],
        'next-body-l': [
          '20px',
          {
            lineHeight: '32px',
            letterSpacing: '-1px',
          },
        ],
        'next-body-m': [
          '18px',
          {
            lineHeight: '28px',
            letterSpacing: '-1px',
          },
        ],
        'next-body-m-reading': [
          '18px',
          {
            lineHeight: '32px',
            letterSpacing: '0px',
          },
        ],
        'next-body-s': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '-1px',
          },
        ],
        'next-body-xs': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '-1px',
          },
        ],
        xs: ['12px', '18px'],
        'body-xs': ['14px', '19px'],
        'body-s': ['16px', '22px'],
        'body-m': ['20px', '27px'],
        'body-m2': ['18px', '26px'],
        'body-m2-2': ['18px', '24px'],
        'body-l': ['24px', '36px'],
        'body-l2': ['24px', '34px'],
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
            lineHeight: '32px',
            fontWeight: '500',
          },
        ],
        'body-heading-m2': [
          '20px',
          {
            lineHeight: '24px',
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
        'button-m2': [
          '14px',
          {
            lineHeight: '24px',
            letterSpacing: '0.42px',
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
            lineHeight: '72px',
            tracking: '-2px',
          },
        ],
        'heading-h2': [
          '48px',
          {
            fontWeight: '500',
            lineHeight: '56px',
          },
        ],
        'heading-h2-hero': [
          '56px',
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
        'heading-h2-hero': [
          '56px',
          {
            fontWeight: '500',
            lineHeight: '64px',
            tracking: '-1px',
          },
        ],
        'heading-h3': [
          '32px',
          {
            fontWeight: '500',
            lineHeight: '37px',
          },
        ],
        'heading-h3-2': [
          '40px',
          {
            fontWeight: '500',
            lineHeight: '48px',
          },
        ],
        'heading-2-h4': [
          '32px',
          {
            fontWeight: '500',
            lineHeight: '40px',
            letterSpacing: '-1px',
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
        'heading-h4-2': [
          '24px',
          {
            fontWeight: '500',
            lineHeight: '28px',
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
        'brand-focus-ring': 'rgba(227, 50, 48, 0.2)',
        'text-dim': '#6F6F6F',
        ['border-gray']: '#D1D1D1',
        'text-dim': '#6F6F6F',
        // brand: '#d6dbe0', //Dev only
        black: '#19191B',
        'black-dim': 'rgba(25, 25, 27, 0.04)',
        'black-dim-border': 'rgba(25, 25, 27, 0.15)',
        lblue: '#F0F6FF',
        lred: '#FFE7EA',
        dim: '#F3F2F4',
        'checkbox-dark': 'rgba(255, 255, 255, 0.3)',
        'checkbox-dark-hover': 'rgba(240, 246, 255, 0.2)',
        'checkbox-light': 'rgba(25, 25, 27, 0.15)',
        'dim-gray': 'rgba(25, 25, 27, 0.03)',
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
        'footer-links': 'repeat(auto-fill, minmax(80px, 1fr));',
      },
      boxShadow: {
        ['btn-focus']: '0px 0px 0px 4px rgba(227, 50, 48, 0.20)',
        checkbox: 'inset 0 0 0 1px white',
        ['checkbox-checked']: 'inset 0 0 0 1px #E33230',
        service:
          '0px 6px 9px rgba(0, 0, 0, 0.05), 0px 1.80882px 2.71324px rgba(0, 0, 0, 0.0325794), 0px 0.751293px 1.12694px rgba(0, 0, 0, 0.025), 0px 0.271728px 0.407592px rgba(0, 0, 0, 0.0174206)',
      },
      transformOrigin: {
        'left-center': '24px center',
      },
      keyframes: {
        'btn-reveal': {
          '0%': {
            transform: 'scale(0)',
            width: 'var(--btn-height)',
            height: 'var(--btn-height)',
          },
          '35%': {
            transform: 'scale(0)',
            width: 'var(--btn-height)',
            height: 'var(--btn-height)',
          },
          '50%': {
            width: 'var(--btn-height)',
            height: 'var(--btn-height)',
          },
          '75%': {
            transform: 'scale(1)',
          },
          '100%': {
            width: '100%',
          },
        },
        'btn-reveal-txt': {
          '0%': {
            transform: 'translateY(200%)',
          },

          '35%': {
            transform: 'translateY(200%)',
          },

          '65%': {
            transform: 'translateY(200%)',
          },

          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'btn-reveal': '1.8s ease-in-out 0s btn-reveal',
        'btn-reveal-txt': '1.9s ease-in-out 0s btn-reveal-txt',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
