<template>
  <el-timeline style="padding-left: 0">
    <el-timeline-item
      v-for="event in events"
      :key="event.year"
      :timestamp="`${event.year}`"
      placement="top"
      size="large"
    >
      <el-card :body-style="{ padding: '6px' }">
        <el-row>
          <div style="padding: 15px;">
            <h4 v-if="event.title">
              {{ event.title }}
            </h4>
            <p>{{ event.text }}</p>
          </div>
        </el-row>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script>
const events = require('../assets/yml/timeline.yml');

export default {
  name: 'CompanyHistoryTimeline',
  data() {
    return {
      events,
    };
  },
};
</script>

<style scoped>
h4 {
  font-size: medium;
  margin-top: 0;
}
p {
  margin-top: 0;
  font-size: medium;
}
</style>
