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
            <h4>{{ event.title }}</h4>
            <p>{{ event.text }}</p>
          </div>
        </el-row>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script>
export default {
  name: 'CompanyHistoryTimeline',
  data() {
    return {
      events: require('../assets/timeline.yml')
    }
  }
}
</script>

<style scoped></style>
