<template>
  <div class="flex flex-row justify-center h-auto">
    <div class="flex flex-col items-center">
      <section-header class="mb-4 order-1">
        <slot name="callout" />
      </section-header>
      <div class="order-3 lg:order-2">
        <slot name="graphic" />
      </div>
      <div v-if="button" class="block order-2 lg:order-3 mt-2 lg:mt-0">
        <so-button :link="link" @click.native="$emit('button-click')">
          <slot name="button-text" />
        </so-button>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '~/components/SectionHeader'

export default {
  components: {
    SectionHeader
  },
  props: {
    link: {
      type: String,
      default: ''
    },
    button: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.graphic {
  height: 300px;
  width: 600px;
}
</style>
