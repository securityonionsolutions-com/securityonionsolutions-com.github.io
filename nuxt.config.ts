const sitekey = process.env.NODE_ENV === 'development' ? '6LcfdNAZAAAAAK7JI_iWN86_sBkE0mtu4gtLj5Wz' : '6LeRbtAZAAAAAAUXLyY1xJHUdssTwSp8MloDVZ2Y'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	target: 'static',
  runtimeConfig: {
  	public: {
    	sitekey,
    	gtag: 'UA-177202545-1'
    }
  },
  modules: [
		'nuxt-icon',
		'@nuxtjs/tailwindcss'
  ],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'terms',
        path: '/terms',
        redirect: { name: 'license' }
      })
    }
  },
})
