<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="service.content"></div>
    <p>
      {{ service.contactBlurb }}
      <a :href="`mailto:${service.contactEmail}`">Email Us!</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ServiceInfo',
  props: {
    service: Object({
      content: String,
      contactBlurb: String,
      contactEmail: String,
      isNew: Boolean
    })
  }
}
</script>

<style scoped lang="scss">
@import '../styles/element-variables';

div {
  word-break: keep-all;
}
a {
  text-decoration: none;
  color: $--color-primary;
}
div ::v-deep ul {
  margin-bottom: -0.5em;
  margin-top: 0.5em;
  list-style-position: inside;
  li {
    font-weight: normal;
    padding-top: 0.1em;
    padding-bottom: 0.1em;
  }
}

div ::v-deep p {
  margin-bottom: 0;
}

div ::v-deep a {
  text-decoration: none;
  color: $--color-primary;
}

.text {
  margin-top: 0;
}
</style>
