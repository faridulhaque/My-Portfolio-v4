/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    extend: {},
    screens: {
      'zero': '0px',
      'xxs': '320px',
      'xs': '480px',
      'sm': '640px',

      'ms': "768px",
      'md': '960px',
      'ml': '1280px',

      'lg': '1440px',
      'xl': '1680px',
      'xxl': '2049px'

    },
  },
  plugins: [],
}