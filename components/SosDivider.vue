<template>
  <div class="divider-sizing" :class="smallDividerClass">
    <el-divider>
      <onion-svg :size="1" />
    </el-divider>
  </div>
</template>

<script>
import OnionSvg from './OnionSvg.vue';

export default {
  name: 'SosDivider',
  components: { OnionSvg },
  props: {
    smallDivider: { type: Boolean, default: false },
  },
  computed: {
    smallDividerClass() {
      return this.smallDivider ? 'small-divider' : '';
    },
  },
};
</script>

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

.divider-sizing {
  width: 80%;
  margin: 2em 0;
  @media (min-width: $--sm) {
    width: 25%;
  }
}

.small-divider {
  margin: 0.5em;
  width: 1%;
}
</style>
