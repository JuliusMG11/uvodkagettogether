module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#ffffff',
    },
    backgroundSize: {
      'cover': 'cover',
      '50%': '50%',
    },
    extend: {
      backgroundImage: {
        'home-hero-bg': "url('/img/first-part-building-test.d26c3985.svg')",
      },
    },
  },
  variants: {
    extend: {
    },
  },
  screens: {
  },
  plugins: [],
}
