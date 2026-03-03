<template>
  <div class="flex flex-col justify content-center px-6 py-6 sm:py-10 sm:px-20 bg-white border border-gray-800 rounded detail-wrapper">
    <div class="text-4xl font-semibold mb-6">
      {{ courseName }}
    </div>
    <div class="text-lg mb-1">
      {{ detailText }}
    </div>
    <div class="mt-8 flex justify-center">
      <a v-if="registerText && !isInternal(registerText)" :href="registerText" target="_blank" class="bg-so-blue text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition-colors flex items-center">
        <span class="mr-2">Register Now</span>
        <icon name="fa-solid:external-link-alt" />
      </a>
      <a v-else-if="registerText && isInternal(registerText)" :href="registerText" class="bg-so-blue text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition-colors flex items-center">
        <span class="mr-2">View Training</span>
      </a>
    </div>
  </div>
</template>


<script>

export default {
  props: {
    courseName: { type: String, default: '' },
    detailText: { type: String, default: '' },
    registerText: { type: String, default: '' },
  },
  methods: {
    isInternal(link) {
      return link.startsWith('#');
    }
  }
}
</script>

<style scoped lang="postcss">
.detail-wrapper {
  width: 20rem;
}
@media (min-width: 480px) {
  .detail-wrapper {
    width: 25rem;
  }
}
@media (min-width: 640px) {
  .detail-wrapper {
    width: 35rem;
  }
}
</style>

