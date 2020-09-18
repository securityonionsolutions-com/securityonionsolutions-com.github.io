<template>
  <div class="bg-white rounded-lg pt-4 form-wrapper">
    <div class="mx-8 text-right text-lg xs:text-4xl">
      Contact Us
    </div>
    <form class="px-8 xs:pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Name
        </label>
        <input id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base" type="text" placeholder="Required">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base" type="text" placeholder="Required">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Company
        </label>
        <input id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base" type="text" placeholder="Required">
      </div>
      <div class="mb-4">
        <div class="block text-gray-700 text-sm font-bold mb-2">
          Message
        </div>
        <textarea
          id="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm xs:text-base"
          type="text"
          placeholder="..."
          rows="5"
        />
      </div>
      <div class="flex items-center justify-start">
        <button
          class="bg-so-blue shadow-lg border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          type="button"
          @click="$emit('close')"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {

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
