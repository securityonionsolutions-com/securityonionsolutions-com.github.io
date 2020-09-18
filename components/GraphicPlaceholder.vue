<template>
  <div class="flex content-center justify-center text-gray-700 bg-gray-400" :class="[shadow ? 'shadow-xl' : '']">
    <div class="m-auto px-4 text-center text-4xl" :class="[isButton ? 'cursor-pointer' : 'cursor-default']">
      <div v-if="showText">
        <slot>
          Graphic
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showText: { type: Boolean, default: true },
    shadow: { type: Boolean, default: true },
    isButton: { type: Boolean, default: false }
  }
}
</script>
