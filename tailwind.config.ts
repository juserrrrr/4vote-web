import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      gap: {
        '-2px': '-2px',
      },
      borderRadius: {
        '7px': '7px',
        '28px': '28px',
      },
    },
  },
  plugins: [],
};
export default config;
