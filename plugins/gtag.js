import VueGtag from 'vue-gtag'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: useRuntimeConfig().public.gtag,
      anonymize_ip: true,
      linker: {
        domains: ['securityonionsolutions.com']
      }
    },
    includes: [
      { id: useRuntimeConfig().public.adtag }
    ]
  }, nuxtApp.$router)
})