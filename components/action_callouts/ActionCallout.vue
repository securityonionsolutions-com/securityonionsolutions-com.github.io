<template>
  <div class="flex flex-col xl:flex-row justify-between items-center xl:mx-12">
    <div v-if="showInfo" class="text-3xl xs:text-4xl xl:mr-6 mb-5 xl:mb-0 text-center xs:text-left">
      <slot name="info" />
    </div>
    <div class="block">
      <so-button class="whitespace-nowrap w-full" :alternate="alternate" :link="link" @click.native="$emit('button-click')">
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
    },
    showInfo: {
      type: Boolean,
      default: true
    }
  }
}
</script>
