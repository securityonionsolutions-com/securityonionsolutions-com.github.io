<template>
  <div class="flex flex-col items-center grow" @click="$emit('event-click', index)">
    <div class="vertical-line h-6" />
    <div class="flex flex-col items-center">
      <div class="rounded-full h-6 w-6 border-4 border-gray-900 grow-child" :class="[focused ? 'bg-so-blue' : 'bg-white']" />
      <div class="text-2xl font-bold mb-1 mt-2">
        <slot name="year" />
      </div>
      <div class="text-xl">
        <slot name="event" />
      </div>
    </div>
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
