<template>
  <div class="xs:px-12">
    <div class="xs:-mx-12 mb-2">
      <nuxt-link to="/" class="text-md xs:text-xl font-light w-full px-4 py-1 flex items-center nav-style bg-gray-100">
        &lt; Back to home
      </nuxt-link>
    </div>
    <div class="flex flex-col justify-center items-center flex-grow xs:h-auto height-xs">
      <img src="/img/icons/so-onion.svg" class="h-20 mb-4">
      <DetailPara :align-center="true">
        <template #header>
          <div class="text-lg xs:text-3xl">
            Thank you for your message!
          </div>
        </template>
        <template #body>
          <div class="flex flex-col items-center">
            <div class="text-sm xs:text-lg">
              We'll get back to you shortly.
            </div>
          </div>
          <!-- <nuxt-link to="/" class="text-so-blue hover:text-black">
            Return home
          </nuxt-link> -->
        </template>
      </DetailPara>
    </div>
  </div>
</template>

<script>
import DetailPara from '~/components/features/DetailPara'

export default {
  components: {
    DetailPara,
  }
}
</script>

<style>
.height-xs {
  height: 24rem;
}
</style>
