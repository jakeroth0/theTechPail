/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{handlebars, html, js}"],
  theme: {
    extend: {
      colors: {
        gren: '#E5F0D5',
        yelr: '#FCF0CB',
        orng: '#F7D7AE',
        purp: '#FBE7FD',
      },
    },
  },
  plugins: [],
}
