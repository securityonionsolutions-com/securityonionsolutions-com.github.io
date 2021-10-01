<template>
  <div>
    <div class="flex flex-col">
      <div :class="[alternate ? 'bg-so-blue' : '']" style="height: 90px" class="xs:-mx-12" />
      <div :class="[alternate ? 'bg-so-blue text-white xs:-mx-12' : '']">
        <slot />
      </div>
      <div :class="[alternate ? 'bg-so-blue' : '']" style="height: 70px" class="xs:-mx-12" />
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
