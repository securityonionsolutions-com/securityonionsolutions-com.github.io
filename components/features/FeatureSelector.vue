<template>
  <div class="flex flex-col items-center justify-center">
    <div class="pill-track mt-3">
      <button
        v-for="(feat, index) in featureArr"
        :key="index"
        class="pill"
        :class="{ 'pill-active': activeFeat === index }"
        @click="activeFeat = index"
      >
        {{ feat.header }}
      </button>
    </div>
    <div
      class="w-full
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
      <img v-if="isImage(activeFeat)" :src="screenshot(activeFeat)"/>
      <video v-else-if="isVideo(activeFeat)" :key="activeFeat" class="v-player__video w-full" controls autoplay="true"
          loop="true"
          muted="false"
          poster=""
          preload="auto"
          name="media">
        <source :src="videoPath(activeFeat)"/>
      </video>
    </div>
    <div v-text="description(activeFeat)" />
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'

export default {
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
    screenshot (index) {
      const fileName = this.featureArr[index].image
      return `/img/graphics/${fileName}`
    },
    videoPath(index) {
      const filename = this.featureArr[index].video;
      return `/videos/${filename}`;
    },
    description (index) {
      const text = this.featureArr[index].body
      return text
    },
    isImage(index) {
      return !!this.featureArr[index].image;
    },
    isVideo(index) {
      return !!this.featureArr[index].video;
    },
    handleImageClick (index) {
      const imageFilename = this.featureArr[index].image;
      if (imageFilename) {
        const fileName = this.featureArr[index].image.replace('screenshots/', '')
        sos.showImageZoom({ imageName: fileName, imageType: 'screenshot' })
      }
    }
  }
}
</script>

<style scoped>
.pill-track {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
}

.pill {
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;
}

.pill:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.pill-active {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.5);
  color: #fff;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.08);
}
</style>
