<template>
  <div class="hero-image-wrapper">
    <img
      :src="heroImage"
      class="hero-image"
      alt="Image of Security Onion Solutions employess at Security Onion Conference"
    />
  </div>
</template>

<script>
export default {
  name: 'HeroImage',
  data() {
    return {
      heroImage: require('../assets/header-bg.jpg')
    }
  }
}
</script>

<style scoped>
.hero-image-wrapper {
  background: black;
  width: 100%;
  max-width: 1438px;
  margin-bottom: 1.5em;
}
.hero-image {
  max-width: 100%;
  opacity: 0.6;
}
</style>
