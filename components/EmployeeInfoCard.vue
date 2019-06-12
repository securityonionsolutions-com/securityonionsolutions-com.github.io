<template>
  <el-card :body-style="{ padding: '0px' }">
    <div slot="header">{{ employee.name }}</div>
    <img
      :src="require(`@/assets/team/${employee.image}`)"
      :alt="`Image of ${employee.name}`"
    />
    <div style="padding: 14px" class="clearfix">
      <span style="color: #777;">{{ employee.role }}</span>
      <a
        class="el-button--text button"
        :href="employee.twitterLink"
        target="_blank"
      >
        <font-awesome-icon
          :icon="['fab', 'twitter']"
          style="color: black;"
          class="button"
        ></font-awesome-icon>
      </a>
      <a
        class="el-button--text button"
        :href="employee.linkedinLink"
        target="_blank"
      >
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
          style="color: black;"
          class="button"
        ></font-awesome-icon>
      </a>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'EmplInfoCard',
  props: {
    employee: Object({
      name: '',
      image: '',
      role: '',
      twitterLink: '',
      linkedinLink: ''
    })
  }
}
</script>

<style scoped lang="scss">
.button {
  padding-left: 0.2em;
  float: right;
  color: black !important;
  -webkit-transition: color 0.3s;
  -moz-transition: color 0.3s;
  -o-transition: color 0.3s;
  transition: color 0.3s;
  :hover,
  :focus,
  :active {
    color: #ffd14b !important;
  }
}
</style>
