<template>
  <div>
    <header class="text-5xl mb-6 font-semibold">
      <slot name="section-heading" />
    </header>
    <div class="flex flex-wrap">
      <detail-para align="left" class="w-full md:w-1/2 md:pr-24 mb-6">
        <template #header>
          <slot name="header-top-left" />
        </template>
        <template #body>
          <slot name="body-top-left" />
        </template>
      </detail-para>
      <detail-para align="left" class=" w-full md:w-1/2 md:pl-12 mb-6">
        <template #header>
          <slot name="header-top-right" />
        </template>
        <template #body>
          <slot name="body-top-right" />
        </template>
      </detail-para>
      <detail-para align="left" class="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0">
        <template #header>
          <slot name="header-bottom-left" />
        </template>
        <template #body>
          <slot name="body-bottom-left" />
        </template>
      </detail-para>
      <detail-para align="left" class="w-full md:w-1/2 md:pl-12">
        <template #header>
          <slot name="header-bottom-right" />
        </template>
        <template #body>
          <slot name="body-bottom-right" />
        </template>
      </detail-para>
    </div>
  </div>
</template>

<script>
import DetailPara from '~/components/features/DetailPara'
export default {
  components: {
    DetailPara
  }
}
</script>
