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
          <el-col :span="18" style="padding: 20px;">
            <h4>{{ event.title }}</h4>
            <p>{{ event.text }}</p>
          </el-col>
          <el-col :span="6" style="height: auto">
            <el-image
              :src="require(`@/assets/about/${event.image}`)"
            ></el-image>
          </el-col>
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
