<template>
  <div
    class="flex justify-center items-center m-auto size"
    :style="sizeVar"
    :class="[padding ? 'bg-white rounded-full overflow-hidden' : 'xs:p-0']"
  >
    <img :src="importImage()">
  </div>
</template>

<script>
export default {
  props: {
    size: { type: Number, default: 20 },
    padding: { type: Boolean, default: true },
    fileName: { type: String, default: '', required: true }
  },
  computed: {
    sizeVar () {
      return { '--size': `${this.size}rem` }
    }
  },
  methods: {
    importImage () {
      return require(`../assets/img/graphics/${this.fileName}`)
    }
  }
}
</script>

<style scoped lang="postcss">
.size {
  height:15rem;
  width: 15rem;
  min-width: 15rem
}

@media (min-width: 480px) {
  .size {
    height: var(--size);
    width: var(--size);
    min-width: var(--size);
  }
}
</style>
