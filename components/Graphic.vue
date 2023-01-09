<template>
  <div
    class="flex justify-center items-center m-auto size"
    :style="sizeVar"
    :class="[
      padding ? 'bg-white rounded-full overflow-hidden' : 'xs:p-0',
      clickable ? 'transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer' : ''
    ]"
    @click="handleClick()"
  >
    <img :src="`/img/graphics/${fileName}`">
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'

export default {
  data: () => ({
    sos,
  }),
  props: {
    size: { type: Number, default: 20 },
    padding: { type: Boolean, default: true },
    fileName: { type: String, default: '', required: true },
    clickable: { type: Boolean, default: false }
  },
  computed: {
    sizeVar () {
      return { '--size': `${this.size}rem` }
    }
  },
  methods: {
    handleClick () {
      if (this.clickable) {
        const type = this.fileName.includes('-thumb') ? 'fullsize' : 'thumbnail'
        sos.showImageZoom({ imageName: this.fileName, imageType: type });
      }
    }
  }
}
</script>

<style scoped lang="postcss">
.size {
  height: 15rem;
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
