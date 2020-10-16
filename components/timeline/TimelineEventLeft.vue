<template>
  <div class="flex justify-between items-center">
    <div class="mr-3 flex-1 text-right">
      <slot name="event" />
    </div>
    <div class="vertical-line h-16" />
    <div class="ml-3 flex-1">
      <slot name="year" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    focused: false
  }),
  methods: {
    handleClick () {
      this.focused = true
      this.$emit('event-click', this.index)
    }
  }
}
</script>

<style scoped>

</style>
