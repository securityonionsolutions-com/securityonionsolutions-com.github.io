<template>
  <div class="hero-image-wrapper">
    <img
      :src="heroImage"
      class="hero-image"
      alt="Image of Security Onion Solutions employees at Security Onion Conference 2019"
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

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

.hero-image-wrapper {
  width: 100%;
  /*background: black;*/
  max-width: 1427px;
  max-height: 595px;
  margin-bottom: 1.5em;
}

.hero-image {
  width: 100%;
  @media (min-width: $--md) {
    filter: brightness(75%);
  }
  /*opacity: 0.7;*/
}
</style>
