import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F6B3F', // Primary Green
          light: '#6FAE6A',   // Secondary Green
          dark: '#1A3F24',
        },
        secondary: {
          DEFAULT: '#6FAE6A', // Secondary Green
        },
        accent: {
          DEFAULT: '#F4A261', // CTA Buttons
          hover: '#E76F51',
        },
        background: '#F6F8F5', // Background
        text: '#1A1A1A',       // Text
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
