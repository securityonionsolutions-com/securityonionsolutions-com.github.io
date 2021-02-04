<template>
  <div class="flex flex-col xl:flex-row justify-between items-center xl:mx-12">
    <div class="flex flex-col xl:mr-6 text-center xl:text-left">
      <div class="text-3xl xs:text-4xl">
        <slot name="info" />
      </div>
      <div class="text-sm xs:text-xl mb-3 xl:mb-0">
        <slot name="info-detail" />
      </div>
    </div>
    <div class="block">
      <so-button class="w-full" :alternate="alternate" :link="link" @click.native="$emit('button-click')">
        <slot name="button-text" />
      </so-button>
    </div>
  </div>
</template>

<script>
import SoButton from '~/components/SoButton'

export default {
  components: {
    SoButton
  },
  props: {
    alternate: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
