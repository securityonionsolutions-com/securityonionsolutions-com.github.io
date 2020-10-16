<template>
  <div class="flex flex-col lg:flex-row lg:justify-start items-center">
    <detail-para class="order-2 lg:order-1" :class="[textMargin ? 'lg:mr-12' : 'xs:pr-4']">
      <template #header>
        <div class="text-3xl">
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
      <slot name="graphic" />
    </div>
  </div>
</template>

<script>
import DetailPara from '~/components/features/DetailPara'

export default {
  components: {
    DetailPara
  },
  props: {
    textMargin: { type: Boolean, default: true }
  }
}
</script>

<style>
</style>
