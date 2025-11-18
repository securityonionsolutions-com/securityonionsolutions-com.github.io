<template>
  <div class="image-carousel">
    <Carousel :settings="settings">
      <Slide v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="`Image ${index + 1}`" class="carousel-image" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      }
    }
  }
}
</script>

<style scoped>
.carousel-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: rgba(255, 255, 255, 1);
}
</style>