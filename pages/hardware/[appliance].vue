<template>
  <div>
    <div>
      <nuxt-link to="/hardware#comparison" class="text-md xs:text-xl font-light w-full px-3 py-1 flex items-center nav-style bg-gray-100">
        &lt; Back to all appliances
      </nuxt-link>
    </div>
    <ApplianceDetails v-if="appliance" :appliance="appliance" />
  </div>
</template>

<script>
import ApplianceDetails from '~/components/hardware/ApplianceDetails'

import appliances from '~/content/appliances.json'

export default {
  components: {
    ApplianceDetails,
  },
  scrollToTop: true,
  computed: {
    appliance () {
      return appliances.find(appliance => appliance.name === this.$route.params.appliance)
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
