<template>
  <div>
    <div
      v-for="(applianceCat, i) in applianceCatArray"
      id="models"
      :key="i"
    >
      <div class="h-24" />
      <div class="text-5xl text-center">
        {{ applianceCat.name }}
      </div>
      <div
        class="flex flex-col justify-center items-center mt-4 pt-4 mb-6 xl:px-12 w-full"
        :class="[
          i===applianceCatArray.length-1 ? 'pb-4' : 'pb-8'
        ]"
      >
        <div
          v-for="(appliance, j) in applianceCat.boxes"
          :key="j"
          class="w-4/5 xs:px-2 md:px-4 lg:px-8 py-2 md:py-2 lg:py-4 cursor-pointer"
          @click="handleClick(appliance, applianceCat)"
        >
          <ApplianceCard :appliance="appliance" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    applianceCatArray () {
      const mArr = require('@/content/appliances.json').appliances.manager_nodes
      const sArr = require('@/content/appliances.json').appliances.search_nodes
      return [
        { name: 'Forward Nodes', boxes: require('@/content/appliances.json').appliances.forward_nodes },
        { name: 'Manager and Search Nodes', boxes: mArr.concat(sArr) }
      ]
    }
  },
  methods: {
    handleClick (appliance, applianceCat) {
      this.$gtag('event', 'hw_info', {
        event_category: 'ecommerce',
        event_label: appliance.name,
        value: appliance.name
      })
      if (window.innerWidth < 480) {
        this.$router.push(`/hardware/${applianceCat.name.toLowerCase().replace(' ', '_')}/${appliance.name.replace(' ', '_')}`)
      } else {
        this.$nuxt.$emit('show-hw-modal', appliance)
      }
    }
  }
}
</script>

<style scoped>

</style>
