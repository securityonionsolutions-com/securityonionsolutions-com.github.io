<template>
  <div>
    <font-awesome-layers full-width>
      <font-awesome-icon
        icon="circle"
        class="primary fa-stack-2x"
      ></font-awesome-icon>
      <font-awesome-icon
        :icon="iconType"
        style="color: white;"
        class="fa-stack-1x"
      ></font-awesome-icon>
    </font-awesome-layers>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconType: String('')
  }
}
</script>

<style scoped>
div {
  width: 4em;
}
.fa-layers {
  display: inline-block;
  width: 100%;
}
.primary {
  color: #ffd14b;
}
</style>
