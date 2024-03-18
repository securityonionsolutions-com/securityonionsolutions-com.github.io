// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
  	public: {
    	sitekey: process.env.NODE_ENV === 'development' ? '6LcfdNAZAAAAAK7JI_iWN86_sBkE0mtu4gtLj5Wz' : '6LeRbtAZAAAAAAUXLyY1xJHUdssTwSp8MloDVZ2Y'
    }
  },
  modules: [
    'nuxt-gtag',
		'nuxt-icon',
		'@nuxtjs/tailwindcss'
  ],
  gtag: {
    id: 'GTM-TGFXZBT6'
  }

})
