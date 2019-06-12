<template>
  <img :src="logo" class="partner-logo" :alt="`${logo.name}`" />
</template>

<script>
export default {
  name: 'SosPartnerLogo',
  props: {
    logo: Object({})
  }
}
</script>

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

.partner-logo {
  margin-top: 2em;
  height: auto;
  width: auto;
  max-width: 60%;
}

@media (min-width: $--sm) {
  .partner-logo {
    max-width: 80%;
    margin-top: 3em;
    margin-bottom: 2em;
  }
}
</style>
