<template>
  <div class="flex flex-row flex-wrap justify-center content-center mx-4 xs:mx-0 my-16">
    <div class="xs:w-4/6 xs:pr-10">
      <slot name="graphic">
        <graphic-placeholder />
      </slot>
    </div>
    <div class="flex flex-col justify-center content-center xs:w-2/6 my-4">
      <div class="text-3xl xs:text-5xl my-8 text-center">
        <slot name="blurb" />
      </div>
      <div class="flex justify-center mb-8">
        <so-button :link="link" class="block" @click.native="$emit('button-click')">
          <slot name="button-text" />
        </so-button>
      </div>
    </div>
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
    link: { type: String, default: '' }
  }
}
</script>

<style scoped>
#hero {
  height: 480px
}
</style>
