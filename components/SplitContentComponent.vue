<template>
  <div>
    <el-row
      justify="center"
      style="width: 100%; display: flex; flex-wrap: wrap"
    >
      <el-col
        :xs="24"
        :lg="columnSize.left"
        class="content-container"
        style="justify-content: center"
      >
        <slot name="left-content" />
      </el-col>
      <el-col v-if="!hideDivider" :xs="24" :lg="0" class="conditional-split">
        <sos-divider />
      </el-col>
      <el-col
        :xs="24"
        :lg="columnSize.right"
        class="content-container center-justify-sometimes"
      >
        <slot name="right-content" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SosDivider from './SosDivider'
export default {
  name: 'SplitContentComponent',
  components: { SosDivider },
  props: {
    columnSize: {
      type: Object,
      default() {
        return {
          left: 12,
          right: 12
        }
      }
    },
    splitOn: { type: String, default: 'xs' },
    hideDivider: { type: Boolean, default: false }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';
@import '~element-ui/packages/theme-chalk/src/display';

.conditional-split {
  @extend .hidden-lg-and-up;
  display: flex;
  justify-content: center;
}

.split-content-container {
  display: flex;
  justify-content: center;
}

.content-container {
  display: flex;
}

.center-align {
  align-items: center;
}
.center-justify-sometimes {
  justify-content: center;
}
</style>
