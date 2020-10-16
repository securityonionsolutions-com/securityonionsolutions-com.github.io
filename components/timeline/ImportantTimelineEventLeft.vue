<template>
  <div class="flex justify-between items-center grow" @click="$emit('event-click', index)">
    <div class="mr-4 flex-1 text-right mt-1">
      <slot name="event" />
    </div>
    <div class="flex-none">
      <div class="vertical-line h-24">
        <div class="rounded-full h-4 w-4 -ml-1 mt-10 border-4 border-gray-900 grow-child" :class="[focused ? 'bg-so-blue' : 'bg-white']" />
      </div>
    </div>
    <div class="ml-4 flex-1 font-bold text-2xl mt-1">
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
    },
    focused: {
      type: Boolean,
      default: false
    }
  }
}
</script>
