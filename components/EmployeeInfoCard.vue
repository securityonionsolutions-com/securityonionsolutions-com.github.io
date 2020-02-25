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
        v-if="Object.keys(employee).includes('twitterLink')"
        class="el-button--text button"
        :href="employee.twitterLink"
        target="_blank"
      >
        <font-awesome-icon
          :icon="['fab', 'twitter']"
          style="color: black;"
          class="button"
        />
      </a>
      <a
        v-if="Object.keys(employee).includes('linkedinLink')"
        class="el-button--text button"
        :href="employee.linkedinLink"
        target="_blank"
      >
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
          style="color: black;"
          class="button"
        />
      </a>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'EmplInfoCard',
  props: {
    employee: {
      type: Object,
      default() {
        return {
          name: '',
          image: '',
          role: '',
          twitterLink: '',
          linkedinLink: ''
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

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
img {
  max-width: 220px;
  max-height: 220px;
  @media (min-width: $--lg) {
    max-width: 240px;
    max-height: 240px;
  }
}
</style>
