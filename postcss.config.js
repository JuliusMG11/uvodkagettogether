module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },

  css: {
    loaderOptions: {
      sass: {
        data: 
        `
          @import "@/scss/_variables.scss";
        `
      }
    }
  }
}
