<template>
  <div class="flex flex-col lg:flex-row justify-center sm:justify-end items-center">
    <div class="flex flex-col items-center xs:items-start order-2 lg:order-1 mt-6 sm:mt-0 w-full lg:w-3/5">
      <detail-para class="xs:mr-6 mb-10">
        <template #header>
          <slot name="header" />
        </template>
        <template #body>
          <slot name="body" />
        </template>
      </detail-para>
      <so-button class="mx-10 xs:mx-0 block" :alternate="alternate" @click.native="$emit('button-click')">
        <slot name="button-text" />
      </so-button>
    </div>
    <div class="order-1 lg:order-2 w-full lg:w-2/5 my-6 lg:my-0">
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
    alternate: { type: Boolean, default: false }
  }
}
</script>
