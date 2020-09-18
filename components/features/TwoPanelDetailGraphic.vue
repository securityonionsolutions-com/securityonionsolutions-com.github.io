<template>
  <div>
    <header class="text-5xl text-center mb-12 mt-10">
      <slot name="section-heading" />
    </header>
    <div class="flex flex-col">
      <div class="flex flex-row flex-wrap lg:flex-no-wrap mt-10 mb-20">
        <slot name="graphic-left">
          <graphic class="graphic md:w-1/2 mr-12" />
        </slot>
        <div class="flex flex-col justify-center items-start p-10 mb-0 sm:mb-16 md:mb-0">
          <detail-para align="left" class="sm:px-12 mb-3">
            <template #header>
              <slot name="header-left" />
            </template>
            <template #body>
              <slot name="body-top-left" />
            </template>
          </detail-para>
          <detail-para align="left" class="sm:px-12 mb-5" :show-header="false">
            <template #body>
              <slot name="body-bottom-left" />
            </template>
          </detail-para>
          <so-button class="sm:mx-12 h-12" :alt="alt" @click.native="$emit('button-click')">
            <slot name="left-button-text" />
          </so-button>
        </div>
      </div>
      <div class="flex flex-row flex-wrap lg:flex-no-wrap">
        <div class="flex flex-col justify-center items-end px-2 xs:px-10 py-10 mb-0 sm:mb-16 md:mb-0 sm:order-1 order-2">
          <detail-para align="right" class="sm:px-12 mb-3">
            <template #header>
              <slot name="header-right" />
            </template>
            <template #body>
              <slot name="body-top-right" />
            </template>
          </detail-para>
          <detail-para align="right" class="sm:px-12 mb-4" :show-header="false">
            <template #body>
              <slot name="body-bottom-right" />
            </template>
          </detail-para>
          <so-button class="sm:mx-12 h-12" :alt="alt" @click.native="$emit('button-click')">
            <slot name="right-button-text" />
          </so-button>
        </div>
        <div class="order-1 sm:order-2 w-full">
          <slot name="graphic-right">
            <graphic class="graphic md:w-1/2 mr-12" />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailPara from '~/components/features/DetailPara'
import Graphic from '~/components/GraphicPlaceholder'
import SoButton from '~/components/SoButton'

export default {
  components: {
    DetailPara,
    Graphic,
    SoButton
  },
  props: {
    alt: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.graphic {
  height: 200px;
  width: 200px;
}
</style>
