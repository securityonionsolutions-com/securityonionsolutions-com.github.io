<template>
  <div class="rounded bg-white p-8" :style="sizeVar">
    <img :src="importImage()">
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '', required: true },
    imageType: { type: String, default: 'thumbnail', required: true }
  },
  data: () => ({
    wide: true
  }),
  computed: {
    sizeVar () {
      if (window.innerHeight >= 800) {
        return { '--size': `${this.wide ? 75 : 50}rem` }
      } else {
        return { '--size': `${this.wide ? 65 : 45}rem` }
      }
    }
  },
  mounted () {
    const img = new Image()
    img.src = this.importImage()
    if (img.width / img.height <= 1) { this.wide = false }
  },
  methods: {
    importImage () {
      let fileName
      let folder

      if (this.imageType === 'appliance') {
        fileName = this.name.replace('-thumb', '')
        folder = 'appliances'
      } else if (this.imageType === 'fullsize') {
        fileName = this.name.replace('-thumb', '')
        folder = 'graphics'
      } else if (this.imageType === 'screenshot') {
        fileName = this.name
        folder = 'graphics'
      } else {
        fileName = this.name
        folder = 'graphics'
      }

      return `/img/${folder}/${fileName}`;
    }
  }
}
</script>

<style scoped>
img {
  width: var(--size);
  display: block;
}
div {
  display: inline-block;
}
</style>
