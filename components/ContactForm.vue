<template>
  <div id="contact_form" class="mx-auto bg-white rounded-lg pt-2 form-wrapper flex flex-col items-center">
    <div class="text-2xl xs:text-3xl ">
      <span v-if="mode == 'contact_us'">Contact Us</span>
      <span v-if="mode == 'feedback'">Send Feedback</span>
    </div>
    <div class="flex text-center px-2 xs:px-0 xs:mx-12 justify-center my-4">
      <p v-if="mode == 'contact_us'">
        Looking for free support of Security Onion or reporting an issue?
        <span class="text-so-blue cursor-pointer"><a href="https://securityonion.net/discuss">Click here</a></span>.
      </p>
      <p v-if="mode == 'feedback'">
        Please tell us what you think of Security Onion and our team. 
        <div class="mt-4">
          We may share this feedback outside of the team, but will keep your contact information confidential unless we've been given permission to publically disclose it by an authorized representative of your organization.
        </div>
        <div class="mt-4 text-blue-800">
          We are looking for case studies! If you're interested in assisting with a case study to help us grow, please let us know below!
        </div>
      </p>
    </div>
    <form id="contact_form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" class="flex flex-col items-center px-2 xs:px-10 pt-3 xs:pt-2 pb-5 mb-4 w-full">
      <!-- eslint-disable-next-line vue/html-quotes -->
      <div class="block w-full">
        <input type="hidden" name="captcha_settings" :value="JSON.stringify(captchaSettings)">
        <input type="hidden" name="oid" value="00D1U000000DI9i">
        <input v-model="retUrl" type="hidden" name="retURL">
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
          id="description"
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
      <select id="lead_source" v-model="lead_source" class="hidden" name="lead_source">
        <option value="Website">
          Website
        </option>
        <option value="Website Feedback">
          Website Feedback
        </option>
      </select>
      <div class="g-recaptcha" :data-sitekey="sitekey" data-callback="recordSubmit"></div>
      <input id="00NJx000001kPE9" maxlength="255" name="00NJx000001kPE9" size="20" type="hidden" />
      <input id="00NJx000001kPFl" maxlength="255" name="00NJx000001kPFl" size="20" type="hidden" />
      <input id="00NJx000001kPIz" maxlength="255" name="00NJx000001kPIz" size="20" type="hidden" />
      <input id="00NJx000001kOTO" maxlength="255" name="00NJx000001kOTO" size="20" type="hidden" />
      <input id="00NJx000001kPKb" maxlength="255" name="00NJx000001kPKb" size="20" type="hidden" />
      <button
        id="form_submit"
        :class="[buttonEnabled() ? 'enabled' : 'disabled']"
        :disabled="!buttonEnabled()">
        Send Message
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    mode: { type: String, default: 'contact_us' },
    text: { type: String, default: '' },
    source: { type: String, default: '' }
  },
  data () {
    return {
      oid: '00D1U000000DI9i',
      lead_source: mode == 'contact_us' ? 'Website' : 'Website Feedback',
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      description: this.text,
      sitekey: useRuntimeConfig().public.sitekey,
      t: '',
      captchaSettings: ''
    }
  },
  computed: {
    retUrl () {
      if (typeof window == 'undefined') {
        return "";
      }
      return window.location.origin + '/thank_you';
    },
  },
  beforeMount () {
    this.captchaSettings = { keyname: 'reCAPTCHA', fallback: 'true', orgId: '00D1U000000DI9i', ts: '' }
    var script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    document.head.appendChild(script);
  },
  mounted () {
    this.t = setInterval(this.timestamp, 500)
    window.recordSubmit = this.recordSubmit;
    this.updateField('00NJx000001kPE9', 'utm_source');
    this.updateField('00NJx000001kPIz', 'utm_medium');
    this.updateField('00NJx000001kPFl', 'utm_campaign');
    this.updateField('00NJx000001kOTO', 'utm_term');
    this.updateField('00NJx000001kPKb', 'utm_content');
  },
  beforeDestroy () {
    clearInterval(this.t)
  },
  methods: {
    buttonEnabled () {
      var result = 
        this.first_name !== '' &&
        this.last_name !== '' &&
        this.company !== '' &&
        this.email !== '' &&
        this.description !== ''
      return result;
    },    
    recordSubmit () {
      this.$gtag('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: window.location.pathname + ', ' + this.source,
      });
      document.getElementById("contact_form").submit();
    },
    timestamp () {
      const response = document.getElementById('g-recaptcha-response')
      if (response == null || (response !== undefined && response.value.trim() === '')) {
        this.captchaSettings.ts = JSON.stringify(new Date().getTime())
      }
    },
    updateField(inputId, paramName) {
      const field = document.getElementById(inputId);
      if (field) {
        const params = new URLSearchParams(window.location.search);
        if (params && params.has(paramName)) {
          field.value = params.get(paramName);
        } else {
          const search = useCookie("ads_search").value;
          if (search) {
            const params = new URLSearchParams(search);
            if (params && params.has(paramName)) {
              field.value = params.get(paramName);
            }
          }
        }
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
#form_submit {
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
