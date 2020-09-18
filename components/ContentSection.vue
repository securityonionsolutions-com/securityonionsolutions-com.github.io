<template>
  <div>
    <div :class="[bottomMargin ? 'mb-24' : '']" class="flex flex-col">
      <div style="height: 90px" />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bottomMargin: {
      type: Boolean,
      default: true
    }
  }
}
</script>
