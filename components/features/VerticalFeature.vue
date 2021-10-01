<template>
  <div class="h-full text-center">
    <div
      :class="[alternate ? 'rounded bg-white text-black shadow-lg p-4' : '']"
      class="flex flex-col h-full items-center content-between"
    >
      <div class="text-2xl font-semibold mb-3">
        <slot name="title" />
      </div>
      <slot name="graphic">
        <graphic class="w-full h-48" />
      </slot>
      <div class="flex items-center text-m w-5/6 flex-grow">
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
