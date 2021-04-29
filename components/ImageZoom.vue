<template>
  <div class="rounded bg-white p-4">
    <img :src="importImage()">
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '', required: true },
    imageType: { type: String, default: 'thumbnail', required: true }
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

      return require(`../assets/img/${folder}/${fileName}`)
    }
  }
}
</script>

<style>

</style>
