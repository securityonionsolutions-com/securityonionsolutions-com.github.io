<template>
  <div :style="indexVars" class="modal-mask flex justify-center items-center">
    <div class="flex justify-center opacity-100 modal-wrapper ma-4">
      <slot />
    </div>
    <div class="bg-black opacity-75 absolute top-0 left-0 h-full w-full modal-bg" @click="$emit('close')" />
  </div>
</template>

<script>
export default {
  props: {
    index: { type: Number, default: 0 }
  },
  computed: {
    indexVars () {
      return {
        '--bg-z-index': `${this.index + 9980}`,
        '--modal-z-index': `${this.index + 9981}`
      }
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: var(--bg-z-index);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-bg {
  z-index: var(--bg-z-index);
}
.modal-wrapper {
  z-index: var(--modal-z-index);
}
</style>
