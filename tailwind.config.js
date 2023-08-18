/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgblack' : '#252422',
        'bgdarkgray' : '#403D39',
        'bglightgray' : '#CCC5B9',
        'bgwhite' : '#FFFCF2',
        'bgred' : '#EB5E28',
      },
    },
  },
  plugins: [],
}