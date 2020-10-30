module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'talk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8'
      }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */

    postcss: {
      plugins: {
        'postcss-pxtorem': {
          rootValue: 37.5,
          propList: ['*'],
          selectorBlackList: ['mint-']
        }
      }
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }, plugins: [
    { src: '~plugins/iview', ssr: true }
  ]
}

