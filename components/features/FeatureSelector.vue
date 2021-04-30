<template>
  <div class="flex flex-col lg:flex-row items-center justify-center">
    <div
      class="w-full
        lg:w-3/5
        rounded-md
        overflow-hidden
        m-8
        shadow-xl
        px-2
        xs:px-0
        transform
        hover:scale-105
        transition
        duration-200
        ease-in-out
        cursor-pointer"
      @click="handleImageClick(activeFeat)"
    >
      <img :src="screenshot(activeFeat)">
    </div>
    <div class="flex flex-col items-center lg:w-1/3 lg:mx-4">
      <button
        v-for="(feat, index) in featureArr"
        :key="index"
        class="flex justify-center items-center my-1 focus:outline-none w-4/5 xs:w-full"
        :class="[ activeFeat===index ? 'bg-gray-200 bg-opacity-25 shadow-lg rounded-lg' : '']"
        @click="setActiveFeat(index)"
        @focus="setActiveFeat(index)"
      >
        <detail-para class="px-6 w-full mt-4 mb-6">
          <template #header>
            {{ feat.header }}
          </template>
          <template #body>
            {{ feat.body }}
          </template>
        </detail-para>
      </button>
    </div>
  </div>
</template>

<script>
import DetailPara from '~/components/features/DetailPara'

export default {
  components: {
    DetailPara
  },
  props: {
    featureArr: {
      type: Array,
      default: () => { return [] }
    }
  },
  data: () => ({
    activeFeat: 0
  }),
  methods: {
    setActiveFeat (num) {
      this.activeFeat = num
    },
    screenshot (index) {
      const fileName = this.featureArr[index].image
      return require(`../../assets/img/${fileName}`)
    },
    handleImageClick (index) {
      const fileName = this.featureArr[index].image.replace('screenshots/', '')
      this.$nuxt.$emit('show-image-zoom', { imageName: fileName, imageType: 'screenshot' })
    }
  }
}
</script>

<style scoped>
.graphic {
  height: 400px;
  width: 300px;
}
</style>
