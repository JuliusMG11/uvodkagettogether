module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#ffffff',
    },
    extend: {
      backgroundImage: {
        'section-one': "url('/src/assets/svg/concert-bg.svg')",
      },
    },
  },
  variants: {
    extend: {
    },
  },
  screens: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  plugins: [],
}
