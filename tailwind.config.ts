import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },

      colors: {
        "brand-primary": "#4534AC",
        "brand-secondary": "#202020",
        "brand-primary-dark": "#2F2188",
        "brand-red": "#FF6B6B",
        "brand-green": "#0ECC5A",
        "brand-orange": "#FFA235",
        "brand-text": "#2D2D2D",
        "brand-background": "#EBEBEB",
      },
    },
  },
  plugins: [],
};
export default config;
