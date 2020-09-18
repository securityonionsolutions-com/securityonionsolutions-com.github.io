<template>
  <div class="flex flex-col lg:flex-row justify-start items-center">
    <detail-para class="px-2 xs:px-12 order-2 lg:order-1">
      <template #header>
        <div class="text-3xl xs:text-4xl">
          <slot name="header" />
        </div>
      </template>
      <template #body>
        <div class="text-base xs:text-xl">
          <slot name="body" />
        </div>
      </template>
    </detail-para>
    <div class="order-1 lg:order-2 mb-4 lg:mb-0">
      <slot name="graphic">
        <graphic class="graphic xs:px-12" />
      </slot>
    </div>
  </div>
</template>

<script>
import Graphic from '~/components/GraphicPlaceholder'
import DetailPara from '~/components/features/DetailPara'

export default {
  components: {
    Graphic,
    DetailPara
  }
}
</script>

<style>
</style>
