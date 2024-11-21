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
        "btmTextColor": "#d97706",               
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
        sm: "320px",
        md: "768px",
        desk: "1200px",        
      }, 

      boxShadow: {  
        'custom': '0 4px 15px rgba(0, 0, 0, 0.3), 0 2px 30px rgba(0, 0, 0, 0.2)',  
        'light': '2px 2px 10px rgba(255, 255, 255, 0.6)', 
      }, 
      
    },
  },
  plugins: [],
};
export default config;
