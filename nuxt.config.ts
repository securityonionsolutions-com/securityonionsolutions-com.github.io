// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
  	public: {
        sitekey: process.env.NODE_ENV === 'development' ? '6LcfdNAZAAAAAK7JI_iWN86_sBkE0mtu4gtLj5Wz' : '6LeRbtAZAAAAAAUXLyY1xJHUdssTwSp8MloDVZ2Y',
        gtag: 'GTM-MQ9GHLB7',
      adtag: 'AW-11380471320'
    }
  },

  modules: [
        'nuxt-icon',
        '@nuxtjs/tailwindcss'
  ],

  compatibilityDate: '2024-11-22'
})