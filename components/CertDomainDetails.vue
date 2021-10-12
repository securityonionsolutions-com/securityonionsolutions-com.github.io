<template>
  <div class="flex flex-col justify-center content-center text-center px-6 py-12 sm:py-10 sm:px-20 bg-white border border-gray-800 rounded detail-wrapper">
    <div class="text-4xl font-semibold mb-8">
      {{ domainName }}
    </div>
    <div class="text-lg mb-10">
      {{ detailText }}
    </div>
    <div class="text-md font-light">
      {{ testPercent }}% of questions
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailText: { type: String, default: '' },
    domainName: { type: String, default: '' },
    testPercent: { type: Number, default: 0 }
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
