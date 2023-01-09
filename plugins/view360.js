import SpinViewer from "@egjs/vue3-view360";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SpinViewer)
})