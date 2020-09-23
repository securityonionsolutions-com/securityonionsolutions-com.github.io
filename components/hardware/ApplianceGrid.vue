<template>
  <div>
    <div
      v-for="(applianceCat, i) in applianceCatArray"
      :id="[i===0 ? 'forward-nodes' : 'manager-search-nodes']"
      :key="i"
    >
      <div class="h-24" />
      <div class="text-5xl text-center">
        {{ applianceCat.name }}
      </div>
      <div
        class="flex flex-row flex-wrap justify-center content-center mt-4 pt-4 mb-6 xl:px-12"
        :class="[
          i===applianceCatArray.length-1 ? 'pb-4' : 'pb-8'
        ]"
      >
        <div
          v-for="(appliance, j) in applianceCat.boxes"
          :key="j"
          class="w-full md:w-1/2 flex flex-col items-center xs:px-2 md:px-4 lg:px-8 py-2 md:py-4 lg:py-8 cursor-pointer"
          @click="handleClick(appliance)"
        >
          <ApplianceCard :appliance="appliance" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    applianceCatArray: [
      { name: 'Forward Nodes', boxes: [] },
      { name: 'Manager and Search Nodes', boxes: [] }
    ]
  }),
  async beforeMount () {
    const applianceObj = await this.$content('appliances').fetch()
    for (let index = 0; index < 6; index++) {
      const appliance = applianceObj.appliances[index]

      switch (appliance.type.toLowerCase()) {
        case 'forward node':
          this.applianceCatArray[0].boxes.push(appliance)
          break
        case 'manager node':
          this.applianceCatArray[1].boxes.push(appliance)
          break
        case 'search node':
          this.applianceCatArray[1].boxes.push(appliance)
          break
        default:
          break
      }
    }
  },
  methods: {
    handleClick (appliance) {
      if (window.innerWidth < 480) {
        this.$router.push(`/hardware/${appliance.name}`)
      } else {
        this.$nuxt.$emit('show-hw-modal', appliance)
      }
    }
  }
}
</script>

<style scoped>

</style>
