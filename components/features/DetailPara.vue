<template>
  <div
    :class="alignment()"
  >
    <header v-if="showHeader" class="text-lg xs:text-2xl font-bold mb-2">
      <slot name="header" />
    </header>
    <div class="text-sm xs:text-base">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    align: { type: String, default: 'center' },
    showHeader: { type: Boolean, default: true }
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
