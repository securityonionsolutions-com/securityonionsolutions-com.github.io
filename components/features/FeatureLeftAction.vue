<template>
  <div class="flex flex-row flex-wrap justify-center sm:justify-end items-center">
    <div class="flex flex-col items-center xs:items-end order-2 sm:order-1 mt-6 sm:mt-0">
      <detail-para class="mx-4 xs:mx-12 mb-10">
        <template #header>
          <slot name="header" />
        </template>
        <template #body>
          <slot name="body" />
        </template>
      </detail-para>
      <so-button class="mx-10 xs:ml-24 xs:mr-10 block" :alt="alt" @click.native="$emit('button-click')">
        <slot name="button-text" />
      </so-button>
    </div>
    <div class="order-1 sm:order-2">
      <slot name="graphic">
        <graphic />
      </slot>
    </div>
  </div>
</template>

<script>
import Graphic from '~/components/GraphicPlaceholder'
import DetailPara from '~/components/features/DetailPara'
import SoButton from '~/components/SoButton'

export default {
  components: {
    Graphic,
    DetailPara,
    SoButton
  },
  props: {
    alt: { type: Boolean, default: false }
  }
}
</script>
