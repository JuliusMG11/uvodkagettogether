module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "@/scss/_variables.scss";
            @import "@/scss/_responsive.scss";
            @import "@/scss/_animation.scss";
          `,
      },
    },
  },
}
