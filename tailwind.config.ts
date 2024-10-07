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
        "textContacts": '#0c4a6e',
        "secondaryTextColor": '#e2e8f0',
        // "borderColor": '#d97706'        
      },
      backgroundColor: {
        "numberBG": "#0c4a6e",        
        "btmContacts": '#d97706',
        "bgColor": '#bae6fd',
        "secondaryBG": "#e2e8f0"

      },

      backgroundImage: {
        "hero-BG": "url('/img/hero/bgImage.png')",
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
