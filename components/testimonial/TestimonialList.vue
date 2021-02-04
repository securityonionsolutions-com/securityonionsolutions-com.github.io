<template>
  <div>
    <hooper tabindex="-1" class="focus:outline-none" :settings="settings">
      <slide v-for="(testimonial, index) in list" :key="index">
        <Testimonial :alternate="alternate">
          <template #text>
            {{ testimonial }}
          </template>
        </Testimonial>
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide
  },
  props: {
    list: {
      type: Array,
      default: () => { return [] }
    },
    alternate: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    settings: {
      mouseDrag: false,
      touchDrag: false,
      wheelControl: false,
      keysControl: false,
      autoPlay: true,
      playSpeed: 8000,
      transition: 800,
      trimWhiteSpace: true,
      itemsToShow: 1
    }
  })
}
</script>

<style>
.hooper {
  height: auto;
}
</style>
