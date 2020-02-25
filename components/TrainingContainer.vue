<template>
  <el-tabs type="border-card">
    <el-tab-pane v-for="(tab, index) in tabs" :key="index">
      <span slot="label" class="tab-title">
        <i :class="tab.iconType"></i> {{ tab.title }}</span
      >
      <div style="padding: 1em">
        <service-info :service="tab" />
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import ServiceInfo from './ServiceInfoComponent'
export default {
  name: 'TrainingContainer',
  components: { ServiceInfo },
  props: {
    tabs: { type: Array, required: true }
  }
}
</script>

<style scoped>
.tab-title {
  font-size: large;
}
</style>
