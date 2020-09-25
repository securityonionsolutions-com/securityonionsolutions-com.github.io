<template>
  <div class="xs:px-12">
    <div class="xs:-mx-12 mb-2">
      <nuxt-link to="/hardware" class="text-md xs:text-xl font-light w-full px-4 py-1 flex items-center nav-style bg-gray-100">
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
    const applianceCat = await params.category
    return {
      applianceName: appliance,
      applianceCat
    }
  },
  computed: {
    appliance () {
      const applianceArr = require('@/content/appliances.json').appliances[this.applianceCat]
      return applianceArr.find(appliance => appliance.name === this.applianceName)
    }
  },
  head () {
    return {
      title: `Security Onion Solutions - ${this.applianceName}`
    }
  }
}
</script>

<style scoped>

</style>
