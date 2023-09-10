/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-base-red': '#ff2f23',
        'custom-light-red': '#fb4a40',
        'custom-white': '#fefcfb',
        'custom-dark-gray': '#5f5f6c',
        'custom-light-gray': '#f7f7f7',
        'custom-border-gray': '#eeeeee',
        'custom-footer-bg': '#1d2124',
      },
      fontFamily: {
        poppins: ["'Poppins'", 'sans-serif'],
      },
      dropShadow: {
        'custom-btn-shadow': '0px 5px 15px rgba(255, 47, 35, 0.4)',
      },
    },
  },

  plugins: [],
}

