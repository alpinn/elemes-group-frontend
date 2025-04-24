/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8BAC3E',
        'primary-light': '#F0FEEB',
        'primary-bg': '#F9FFF6',
        secondary: '#40A2B1',
        'secondary-light': '#E6F3F5',
        'accent-blue': '#405EB6',
        'accent-blue-light': '#EAEEFA',
        'accent-pink': '#B23F74',
        'accent-pink-light': '#F9EEF3',
        'accent-olive': '#A4B441',
        'accent-olive-light': '#F3F7D9',
      },
    },
  },
  plugins: [],
} 