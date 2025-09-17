/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#2d5a88',
          dark: '#142a4c',
        },
        secondary: {
          DEFAULT: '#2d5a88',
          light: '#3d6a98',
          dark: '#1d4a78',
        },
        accent: {
          DEFAULT: '#daa520',
          light: '#eab530',
          dark: '#ca9510',
        },
      },
    },
  },
  plugins: [],
}