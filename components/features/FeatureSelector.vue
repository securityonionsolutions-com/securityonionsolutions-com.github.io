<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col lg:flex-row items-center lg:mx-4 mt-3">
      <button
        v-for="(feat, index) in featureArr"
        :key="index"
        class="flex justify-center items-center my-1 focus:outline-none w-4/5 xs:w-full h-full"
        :class="[ activeFeat===index ? 'bg-gray-200 bg-opacity-25 shadow-lg rounded-lg' : '']"
        @click="setActiveFeat(index)"
        @focus="setActiveFeat(index)"
      >
        <detail-para class="px-6 w-full mt-4 mb-4">
          <template #header>
            {{ feat.header }}
          </template>
        </detail-para>
      </button>
    </div>
    <div
      class="w-full
        lg:w-4/5
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
    <div v-text="description(activeFeat)" />
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'
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
    sos,
    activeFeat: 0
  }),
  methods: {
    setActiveFeat (num) {
      this.activeFeat = num
    },
    screenshot (index) {
      const fileName = this.featureArr[index].image
      return `/img/${fileName}`
    },
    description (index) {
      const text = this.featureArr[index].body
      return text
    },
    handleImageClick (index) {
      const fileName = this.featureArr[index].image.replace('screenshots/', '')
      sos.showImageZoom({ imageName: fileName, imageType: 'screenshot' })
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
