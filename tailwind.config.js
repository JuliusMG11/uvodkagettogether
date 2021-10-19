module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#ffffff',
    },
    textColor: {
      'primary': '#121212',
    },
    backgroundSize: {
      
    },
    extend: {
      backgroundImage: {

        // HOMEPAGE

        'home-hero': "url('/img/first-part-building-test.d26c3985.svg')",
        'land-one': "url('/img/land1.2a562f63.svg')",
        'land-two': "url('/img/land2.9469cac7.svg')",
        '102%': '102%',
        'land-three': "url('/img/land3-new.336bbff7.svg')",
        'footer': "url('/img/land4-new.b08c6d3b.svg')",
        'billboard-bg': "url('/img/billboard-one.35d86720.svg')",

        // OUR SERVICE PAGE
        'pop-circle': "url('/img/concert-popmusic-new.a26a4faf.svg')",
        'culture-circle': "url('/img/culture-cinema.16b5309e.svg')",
        'forkids-circle': "url('/img/forkids-zoo.fe7c1a7a.svg')",


        // ABOUT PAGE
        'about': "url('/img/team-land.a4a6d353.png')",
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
