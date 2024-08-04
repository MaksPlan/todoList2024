/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'baseBlue': '#312e81',
      'activeBlue': '#a5b4fc',
      'wrapBlue': '#6366f1',

    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    container: {
      padding: '20px',
      center: true,

    },

    extend: {},
  },
  plugins: [],
}

