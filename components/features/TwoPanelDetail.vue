<template>
  <div>
    <header class="text-4xl mb-6">
      <slot name="section-heading" />
    </header>
    <div class="flex flex-wrap xs:-mx-12">
      <detail-para align="left" class="xs:px-12 w-full md:w-1/2 mb-6 md:mb-0">
        <template #header>
          <slot name="header-left" />
        </template>
        <template #body>
          <slot name="body-left" />
        </template>
      </detail-para>
      <detail-para align="left" class="xs:px-12 w-full md:w-1/2">
        <template #header>
          <slot name="header-right" />
        </template>
        <template #body>
          <slot name="body-right" />
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
