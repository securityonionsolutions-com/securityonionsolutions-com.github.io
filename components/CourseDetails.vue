<template>
  <div class="flex flex-col justify content-center px-6 py-6 sm:py-10 sm:px-20 bg-white border border-gray-800 rounded detail-wrapper">
    <div class="text-4xl font-semibold mb-6">
      {{ courseName }}
    </div>
    <div class="text-lg mb-1">
      {{ detailText }}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    courseName: { type: String, default: '' },
    detailText: { type: String, default: '' },
    registerText: {type: String, default: ''}
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
