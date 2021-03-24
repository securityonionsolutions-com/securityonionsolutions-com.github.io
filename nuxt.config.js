const sitekey = process.env.NODE_ENV === 'development' ? '6LcfdNAZAAAAAK7JI_iWN86_sBkE0mtu4gtLj5Wz' : '6LeRbtAZAAAAAAUXLyY1xJHUdssTwSp8MloDVZ2Y'

export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Security Onion Solutions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Security Onion Solutions, LLC' }
    ],
    link: [
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css', rel: 'stylesheet', type: 'text/css' }
    ]
  },
  env: {
    sitekey
  },
  /*
  ** Global CSS
  */
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/scrollto.js', mode: 'client' },
    { src: '@/plugins/vue-360.js', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-gtag', {
      id: 'UA-177202545-1',
      config: {
        anonymize_ip: true,
        linker: {
          domains: ['securityonionsolutions.com']
        }
      },
      debug: process.env.NODE_ENV === 'development'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt/content
    'vue-scrollto/nuxt',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: ['far']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }],
    [
      '@nuxtjs/recaptcha', {
        siteKey: sitekey,
        version: 2
      }
    ]
  ],
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}
