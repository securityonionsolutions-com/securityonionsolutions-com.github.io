import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: useRuntimeConfig().gtag,
      anonymize_ip: true,
      linker: {
        domains: ['securityonionsolutions.com']
      }
    }
  }, nuxtApp.$router)
})