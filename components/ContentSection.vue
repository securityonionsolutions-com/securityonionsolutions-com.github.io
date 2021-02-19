<template>
  <div>
    <div class="flex flex-col">
      <div :class="[alternate ? 'bg-so-blue' : '']" style="height: 90px" class="xs:-ml-12 xs:-mr-12" />
      <slot />
      <div :class="[alternate ? 'bg-so-blue' : '']" style="height: 70px" class="xs:-ml-12 xs:-mr-12" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alternate: {
      type: Boolean,
      default: false
    }
  }
}
</script>
