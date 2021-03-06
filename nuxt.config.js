import colors from 'vuetify/es5/util/colors'

// dotenvの設定
require("dotenv").config();

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css' },
      { rel: 'stylesheet', href: 'http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/reset.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/localStorage.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Simple usage
    // leaflet（地図）
    'nuxt-leaflet',
    // axios通信
    '@nuxtjs/axios',
    // env管理
    '@nuxtjs/dotenv',
    // With options
    ['nuxt-leaflet', { /* module options */ }],
    // webfontloader
    ['nuxt-webfontloader'],
  ],
  dotenv: {
    path: process.cwd()
  },
  webfontloader: {
    // Googleフォント「Kosugi Maru」
    google: {
      families: ['Kosugi+Maru']
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // env設定
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    // OpenWeatherMap_API_key
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    // News_API_key
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    // 楽天WebサービスAPI
    TRAVEL_API_KEY: process.env.TRAVEL_API_KEY,
  },
  axios: {
    baseURL: process.env.BASE_URL	|| '/'	// 追記
  },
}
