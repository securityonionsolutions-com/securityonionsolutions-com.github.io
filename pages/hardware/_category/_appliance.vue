<template>
  <div>
    <div>
      <nuxt-link to="/hardware#comparison" class="text-md xs:text-xl font-light w-full px-3 py-1 flex items-center nav-style bg-gray-100">
        &lt; Back to all appliances
      </nuxt-link>
    </div>
    <ApplianceDetails :appliance="appliance" />
  </div>
</template>

<script>

export default {
  scrollToTop: true,
  async asyncData ({ params }) {
    const appliance = await params.appliance.replace('_', ' ')
    const role = await params.category.replace('_', ' ')
    return {
      applianceName: appliance,
      role
    }
  },
  computed: {
    appliance () {
      const roles = require('~/content/appliances.json').roles
      const applianceArr = roles.find(role => role.name.toLowerCase() === this.role).appliances
      return applianceArr.find(appliance => appliance.name === this.applianceName)
    }
  },
  head () {
    return {
      title: 'Security Onion Solutions'
    }
  }
}
</script>

<style scoped>

</style>
