import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {        
        "textContacts": '#e2e8f0',
        "borderColor": '#d97706'        
      },
      backgroundColor: {
        "baseColor": "#2F7A3A",
        "btmContacts": '#d97706',
        "swiperCardBg": '#bae6fd'        
      },

      screens: {
        sm: "390px",
        md: "768px",
        desk: "1200px",        
      }, 

    },
  },
  plugins: [],
};
export default config;
