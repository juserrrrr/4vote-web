import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        checkBoxAnimation: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        checkBoxAnimation: 'checkBoxAnimation 0.5s forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient-landingpage': 'linear-gradient(to right, #034F9C 0%, #0282DF 50%)',
        'background-word': "url('../components/landingPage/assets/background-word.svg')",
        'background-rectangle': "url('../components/landingPage/assets/rectangle-gray.svg')",
        'background-blue': "url('../components/landingPage/assets/background-blue.svg')",
        'custom-gradient-footer': 'linear-gradient(to right, #052A76 0%, #02A6F4 100%)',
      },
      colors: {
        corPrincipal: '#052A76',
        corSecundaria: '#02A6F4',
        corSucesso: '#06FF5B',
        corErro: '#FF4444',
        corContraste: '#F3CD4B',
        corNeutro: '#F0F0F0',
        corBotaoLP: '#0199F4',
      },
      boxShadow: {
        sombraCard: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        sombraHeader: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        sombraLogin: '4px 4px 20px 0px rgba(0, 0, 0, 0.50)',
      },
      height: {
        percent90: '90vh',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '6px',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          backgroundColor: '#052A76', // Cor principal ou qualquer cor desejada
          borderRadius: '6px',
        },
      });
    },
  ],
};
export default config;
