<template>
  <div class="text-3xl xl:text-4xl font-semibold" :class="alignment()">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    align: { type: String, default: 'center' }
  },
  methods: {
    alignment () {
      switch (this.align) {
        case 'center':
          return 'text-center'
        case 'right':
          return 'text-right'
        case 'left':
          return 'text-left'
        default:
          return 'text-center'
      }
    }
  }
}
</script>
