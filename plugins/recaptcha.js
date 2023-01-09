import {VueRecaptcha} from "vue-recaptcha";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VueRecaptcha', VueRecaptcha)
})