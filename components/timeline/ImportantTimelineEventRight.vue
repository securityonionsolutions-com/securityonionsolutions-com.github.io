<template>
  <div class="flex justify-between items-center grow" @click="$emit('event-click', index)">
    <div class="mr-4 flex-1 font-bold text-right text-2xl mt-1">
      <slot name="year" />
    </div>
    <div class="flex-none">
      <div class="vertical-line h-16 relative">
        <div class="circle grow-child" :class="[focused ? 'bg-so-blue' : 'bg-white']" />
      </div>
    </div>
    <div class="ml-4 flex-1 mt-1">
      <slot name="event" />
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

<style lang="postcss" scoped>
  @reference "../../assets/css/tailwind.css";
  .circle {
    @apply rounded-full border-4 border-gray-900;
    position: absolute;
    top: 50%;
    margin-top: -6px;
    height: 18px;
    width: 18px;
    margin-left: -7px;
  }
</style>
