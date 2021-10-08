<template>
  <div class="rounded bg-white p-4" :style="sizeVar">
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
        return { '--size': `${this.wide ? 65 : 40}rem` }
      } else {
        return { '--size': `${this.wide ? 55 : 35}rem` }
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
        folder = 'screenshots'
      } else {
        fileName = this.name
        folder = 'graphics'
      }

      return require(`~/assets/img/${folder}/${fileName}`)
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
