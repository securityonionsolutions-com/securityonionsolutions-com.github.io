<template>
  <div>
    <font-awesome-icon
      :icon="iconType"
      class="primary"
      :size="iconSizeString"
    ></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconType: String(''),
    iconSize: { type: Number, default: 1 }
  },
  computed: {
    iconSizeString() {
      return `${this.iconSize}x`
    }
  }
}
</script>

<style scoped>
.primary {
  color: #f6b11f;
}
</style>
