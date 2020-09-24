<template>
  <div class="bg-white rounded-lg pt-4 form-wrapper">
    <div class="mx-8 text-right text-lg xs:text-4xl">
      Contact Us
    </div>
    <form id="contact_form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" class="px-8 xs:pt-6 pb-8 mb-4">
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
      <!-- <label for="lead_source" class="hidden">Lead Source</label> -->
      <select id="lead_source" v-model="lead_source" class="hidden" name="lead_source">
        <option value="Website">
          Website
        </option>
      </select>
      <button
        class="bg-so-blue shadow-lg border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-4 -ml-1"
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
      description: this.text
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
    }
  }
}
</script>

<style scoped>
.form-wrapper {
  width: 19rem;
}
@media (min-width: 480px) {
  .form-wrapper {
    width: 35rem;
  }
}
</style>
