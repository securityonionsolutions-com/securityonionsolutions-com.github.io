<template>
  <div id="contact_form" class="bg-white rounded-lg pt-2 form-wrapper flex flex-col items-center">
    <div class="text-2xl xs:text-3xl ">
      Contact Us
    </div>
    <div class="flex text-center px-2 xs:px-0 xs:w-2/3 justify-center my-4">
      <p>
        Looking for free support of Security Onion or reporting an issue?
        <span class="text-so-blue cursor-pointer"><a href="https://securityonion.net/discuss">Click here</a></span>.
      </p>
    </div>
    <form id="contact_form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" class="flex flex-col items-center px-2 xs:px-10 pt-3 xs:pt-2 pb-5 mb-4 w-full">
      <!-- eslint-disable-next-line vue/html-quotes -->
      <div class="block w-full">
        <input type="hidden" name="captcha_settings" :value="JSON.stringify(captchaSettings)">
        <input type="hidden" name="oid" value="00D1U000000DI9i">
        <input v-model="retUrl" type="hidden" name="retURL" value="">
        <div class="flex flex-row">
          <div class="w-1/2 block mr-3">
            <label for="first_name" class="block text-gray-800 text-sm font-bold mb-2">First Name<span class="text-red-500"> *</span></label>
            <input
              id="first_name"
              v-model="first_name"
              class="shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2"
              maxlength="40"
              name="first_name"
              size="20"
              type="text"
            >
          </div>
          <div class="w-1/2 block">
            <label for="last_name" class="block text-gray-800 text-sm font-bold mb-2">Last Name<span class="text-red-500"> *</span></label>
            <input
              id="last_name"
              v-model="last_name"
              class="shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2"
              maxlength="80"
              name="last_name"
              size="20"
              type="text"
            >
          </div>
        </div>
        <label for="email" class="block text-gray-800 text-sm font-bold mb-2">Email<span class="text-red-500"> *</span></label>
        <input
          id="email"
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2"
          maxlength="80"
          name="email"
          size="20"
          type="text"
        >
        <label for="company" class="block text-gray-800 text-sm font-bold mb-2">Company<span class="text-red-500"> *</span></label>
        <input
          id="company"
          v-model="company"
          class="shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2"
          maxlength="40"
          name="company"
          size="20"
          type="text"
        >
        <label for="description" class="block text-gray-800 text-sm font-bold mb-2">Description<span class="text-red-500"> *</span></label>
        <textarea
          v-model="description"
          name="description"
          placeholder="..."
          rows="5"
          class="shadow appearance-none border rounded w-full py-2 px-3 font-sans leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base"
        />
      </div>
      <div class="block text-red-500 text-sm font-bold mb-4 mt-1 ml-auto">
        * Required
      </div>
      <recaptcha
        ref="recaptcha"
        class="mb-4"
        @success="captchaPassed = true"
        @error="captchaPassed = false"
        @expired="captchaPassed = false"
      />
      <select id="lead_source" v-model="lead_source" class="hidden" name="lead_source">
        <option value="Website">
          Website
        </option>
      </select>
      <button
        id="form_submit"
        class="submit-button"
        :class="[buttonEnabled ? 'enabled' : 'disabled']"
        type="submit"
        @click="recordSubmit()"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: '' },
    source: { type: String, default: '' }
  },
  data () {
    return {
      oid: '00D1U000000DI9i',
      lead_source: 'Website',
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      description: this.text,
      captchaPassed: false,
      sitekey: process.env.sitekey,
      t: '',
      captchaSettings: ''
    }
  },
  computed: {
    retUrl () {
      return `${window.location.origin}/thank_you`
    },
    buttonEnabled () {
      return this.captchaPassed &&
        this.first_name !== '' &&
        this.last_name !== '' &&
        this.company !== '' &&
        this.email !== '' &&
        this.description !== ''
    }
  },
  beforeMount () {
    this.captchaSettings = { keyname: 'reCAPTCHA', fallback: 'true', orgId: '00D1U000000DI9i', ts: '' }
  },
  mounted () {
    this.t = setInterval(this.timestamp, 500)
  },
  beforeDestroy () {
    clearInterval(this.t)
  },
  methods: {
    recordSubmit () {
      this.$gtag('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: `${window.location.pathname}, ${this.source}`
      })
    },
    timestamp () {
      const response = document.getElementById('g-recaptcha-response')
      if (response == null || (response !== undefined && response.value.trim() === '')) {
        this.captchaSettings.ts = JSON.stringify(new Date().getTime())
      }
    }
  }
}
</script>

<style scoped lang="postcss">
.form-wrapper {
  width: 20rem;
}
@media (min-width: 480px) {
  .form-wrapper {
    width: 25rem;
  }
}
@media (min-width: 640px) {
  .form-wrapper {
    width: 35rem;
  }
}
.submit-button {
  @apply shadow-lg border font-bold mt-1 py-2 px-4 rounded-full -ml-1
}
.enabled {
  @apply bg-so-blue text-white
}
.enabled:hover {
  @apply bg-blue-700
}
.enabled:focus {
  @apply outline-none shadow-outline
}
.disabled {
  @apply cursor-not-allowed bg-gray-600 text-white;
}
</style>
