/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        readex: ['"Readex Pro"', 'sans-serif'],
      },
      backgroundColor: {
        'primary': '#869F44',
        'secondary': '#FFFFFF',
        'footer':'#0E3D4D'
      },
      textColor: {
        'primary': '#869F44',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'), // Add this line
  ],
}

