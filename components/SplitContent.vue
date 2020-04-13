<template>
  <div>
    <el-row justify="center">
      <el-col :s="24" :lg="columnSize.left">
        <div class="content-container" style="justify-content: center">
          <slot name="left-content" />
        </div>
      </el-col>
      <el-col v-if="!hideDivider" :s="24" :lg="0" class="conditional-split">
        <sos-divider />
      </el-col>
      <el-col :s="24" :lg="columnSize.right">
        <div class="content-container center-justify">
          <slot name="right-content" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SosDivider from './SosDivider.vue';

export default {
  name: 'SplitContentComponent',
  components: { SosDivider },
  props: {
    columnSize: {
      type: Object,
      default() {
        return {
          left: 12,
          right: 12,
        };
      },
    },
    splitOn: { type: String, default: 'xs' },
    hideDivider: { type: Boolean, default: false },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';
@import '~element-ui/packages/theme-chalk/src/display';

.conditional-split {
  display: flex;
  justify-content: center;
  @media (min-width: $--lg) {
    display: none;
  }
}

.split-content-container {
  display: flex;
  justify-content: center;
}

.content-container {
  display: flex;
  margin: 0;
}

.center-align {
  align-items: center;
}
.center-justify {
  justify-content: center;
}
</style>
