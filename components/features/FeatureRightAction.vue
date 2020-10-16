<template>
  <div class="flex flex-row justify-end items-center">
    <slot name="graphic">
      <graphic class="graphic px-12" />
    </slot>
    <div class="flex flex-col items-start">
      <detail-para align="left" class="mx-12 mb-10">
        <template #header>
          <slot name="header" />
        </template>
        <template #body>
          <slot name="body" />
        </template>
      </detail-para>
      <so-button class="mr-24 ml-10 block" @click.native="$emit('button-click')">
        Action item
      </so-button>
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
  }
}
</script>

<style scoped>
.graphic {
  height: 400px;
  width: 800px;
}
</style>
