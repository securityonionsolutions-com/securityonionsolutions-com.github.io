<template>
  <div :style="indexVars" class="modal-mask flex justify-center items-center">
    <div class="flex opacity-100 modal-wrapper">
      <slot />
      <div class="flex justify-start text-2xl -ml-2 -mt-4">
        <fa-layers class="cursor-pointer" @click="$emit('close')">
          <fa icon="circle" class="text-white" />
          <fa :icon="['far', 'times-circle']" class="text-black" />
        </fa-layers>
      </div>
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
