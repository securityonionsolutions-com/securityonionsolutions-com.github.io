<template>
  <el-divider>
    <img :src="require('../assets/onion.svg')" alt="onion-svg" width="12em" />
  </el-divider>
</template>

<script>
export default {
  name: 'SosDivider'
}
</script>

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

.el-divider {
  width: 80%;
}

@media (min-width: $--sm) {
  .el-divider {
    width: 25%;
  }
}
</style>
