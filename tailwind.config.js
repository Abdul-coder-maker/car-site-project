module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        75: '18.5rem',
        30: '7.5rem',
      },
      fontFamily: {
        sans: 'Lato, sans-serif',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
