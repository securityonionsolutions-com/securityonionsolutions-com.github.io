<template>
  <div class="flex flex-row justify-center items-center">
    <div class="flex flex-col justify-center items-end my-4 mx-10">
      <div class="text-5xl my-8 text-right font-bold">
        <slot name="header" />
      </div>
      <div v-if="buttonText.length!==0" class="flex justify-center mb-8">
        <so-button class="block" @click.native="$emit('button-click')">
          {{ buttonText }}
        </so-button>
      </div>
    </div>
    <slot name="graphic">
      <graphic-placeholder />
    </slot>
  </div>
</template>

<script>
import SoButton from '~/components/SoButton'
import GraphicPlaceholder from '~/components/GraphicPlaceholder'
export default {
  components: {
    SoButton,
    GraphicPlaceholder
  },
  props: {
    buttonText: { type: String, default: '' }
  }
}
</script>

<style scoped>
#hero {
  height: 480px
}
</style>
