<template>
  <div class="flex flex-col items-center">
    <div
      class="shadow-sm border font-bold p-4 xs:p-6 xl:py-4 xl:px-4 rounded-xl m-1 relative mx-2 lg:mx-12"
      :class="[alternate ? 'bg-so-blue text-white' : 'bg-white text-black']"
    >
      <div class="mx-4 text-sm xs:text-base">
        <slot name="text" />
      </div>
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

<style scoped>
.name {
  right: -2%;
  bottom: -40%;
}
</style>
