<template>
  <div class="bg-white rounded-lg pt-4 form-wrapper">
    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer />
    <script>
      function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response == undefined || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);
    </script>
    <div class="mx-8 text-right text-lg xs:text-4xl">
      Contact Us
    </div>
    <form id="contact_form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" class="px-8 xs:pt-6 pb-8 mb-4">
      <input type="hidden" name="captcha_settings" value="{&quot;keyname&quot;:&quot;reCAPTCHA&quot;,&quot;fallback&quot;:&quot;true&quot;,&quot;orgId&quot;:&quot;00D1U000000DI9i&quot;,&quot;ts&quot;:&quot;&quot;}">
      <input type="hidden" name="oid" value="00D1U000000DI9i">
      <input v-model="retUrl" type="hidden" name="retURL" value="">
      <label for="first_name" class="block text-gray-800 text-sm font-bold mb-2">First Name<span class="text-red-500"> *</span></label>
      <input
        id="first_name"
        v-model="first_name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-4"
        maxlength="40"
        name="first_name"
        size="20"
        type="text"
      >
      <label for="last_name" class="block text-gray-800 text-sm font-bold mb-2">Last Name<span class="text-red-500"> *</span></label>
      <input
        id="last_name"
        v-model="last_name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-4"
        maxlength="80"
        name="last_name"
        size="20"
        type="text"
      >
      <label for="email" class="block text-gray-800 text-sm font-bold mb-2">Email<span class="text-red-500"> *</span></label>
      <input
        id="email"
        v-model="email"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-4"
        maxlength="80"
        name="email"
        size="20"
        type="text"
      >
      <label for="company" class="block text-gray-800 text-sm font-bold mb-2">Company<span class="text-red-500"> *</span></label>
      <input
        id="company"
        v-model="company"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-4"
        maxlength="40"
        name="company"
        size="20"
        type="text"
      >
      <label for="description" class="block text-gray-800 text-sm font-bold mb-2">Description</label>
      <textarea
        v-model="description"
        name="description"
        placeholder="..."
        rows="5"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base mb-2"
      />
      <div class="block text-red-500 text-sm font-bold mb-4">
        * Required
      </div>
      <!-- <div class="g-recaptcha mb-4" data-sitekey="6LeRbtAZAAAAAAUXLyY1xJHUdssTwSp8MloDVZ2Y" data-callback="enableButton" /> -->
      <recaptcha
        ref="recaptcha"
        class="mb-4"
        @success="buttonEnabled = true"
        @error="buttonEnabled = false"
        @expired="buttonEnabled = false"
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
    text: { type: String, default: '' }
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
      buttonEnabled: false,
      sitekey: process.env.sitekey
    }
  },
  computed: {
    retUrl () {
      return window.location.href
    }
  },
  methods: {
    recordSubmit () {
      this.$gtag('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: window.location.pathname
      })
    },
    enableButton () {
      this.buttonEnabled = true
    }
  }
}
</script>

<style scoped lang="postcss">
.form-wrapper {
  width: 19rem;
}
@media (min-width: 480px) {
  .form-wrapper {
    width: 35rem;
  }
}
.submit-button {
  @apply shadow-lg border font-bold py-2 px-4 rounded-full mb-4 -ml-1
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
