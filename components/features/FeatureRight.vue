<template>
  <div class="flex flex-col lg:flex-row lg:justify-start items-center">
    <div class="mb-4 lg:mb-0">
      <slot name="graphic" />
    </div>
    <detail-para :class="[textMargin ? 'lg:ml-12' : 'xs:pl-4']">
      <template #header>
        <div class="text-3xl xs:text-4xl font-semibold">
          <slot name="header" />
        </div>
      </template>
      <template #body>
        <div class="text-base xs:text-xl">
          <slot name="body" />
        </div>
      </template>
    </detail-para>
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
