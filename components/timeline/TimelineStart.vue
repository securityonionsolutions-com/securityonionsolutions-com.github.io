<template>
  <div class="flex flex-col items-center grow" @click="$emit('event-click', index)">
    <div class="flex flex-col items-center">
      <div class="text-xl">
        <slot name="event" />
      </div>
      <div class="text-2xl font-bold mb-2">
        <slot name="year" />
      </div>
      <div class="rounded-full h-6 w-6 border-4 border-gray-900 grow-child" :class="[focused ? 'bg-so-blue' : 'bg-white']" />
    </div>
    <div class="vertical-line h-6" />
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    focused: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
