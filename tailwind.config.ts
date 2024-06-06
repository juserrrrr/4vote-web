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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        corPrincipal: '#052A76',
        corSecundaria: '#02A6F4',
        corSucesso: '#06FF5B',
        corErro: '#FF4444',
        corContraste: '#F3CD4B',
        corNeutro: '#F0F0F0',
      },
      boxShadow: {
        sombraCard: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        sombraHeader: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
