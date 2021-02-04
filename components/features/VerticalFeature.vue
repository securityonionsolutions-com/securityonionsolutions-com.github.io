<template>
  <div class="flex flex-col items-center text-center">
    <div
      :class="[alternate ? 'rounded bg-white text-black shadow-lg p-4' : '']"
      class="flex flex-col items-center"
    >
      <div class="text-2xl font-semibold mb-1">
        <slot name="title" />
      </div>
      <slot name="graphic">
        <graphic class="w-full h-48 mb-8" />
      </slot>
      <div class="text-m w-5/6">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script>
import Graphic from '~/components/GraphicPlaceholder'

export default {
  components: {
    Graphic
  },
  props: {
    alternate: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.graphic {
  height: 200px;
  width: 300px;
}
</style>
