<template>
  <div class="card w-full sm:h-56">
    <div class="flex flex-col sm:flex-row items-center w-full h-full">
      <GraphicPlaceholder class="w-full h-40 mb-2 sm:mb-0 sm:w-2/3 sm:h-full" :shadow="false" :is-button="true">
        <div class="text-base">
          Picture Coming Soon
        </div>
      </GraphicPlaceholder>
      <div class="flex flex-col content-center pb-3 sm:w-1/3">
        <div class="text-xl mt-2 mb-3 font-semibold text-center">
          {{ appliance.name }}
        </div>
        <div class="flex flex-col">
          <!-- <div v-for="(specName, k) in Object.keys(appliance.important_specs)" :key="k" class="py-1">
            <span class="font-bold">{{ specName }}</span> &bullet; {{ appliance.important_specs[specName] }}
          </div> -->
          <div v-for="(key, k) in Object.keys(appliance.performance)" :key="k" class="flex flex-col justify-between items-center py-2 w-full">
            <div class="text-base text-gray-800 text-center mb-1">
              {{ key }}
            </div>
            <div class="relative w-40">
              <div class="overflow-hidden h-4 text-xs flex rounded-lg bg-gray-300">
                <div
                  :style="`width: ${appliance.performance[key]}%`"
                  class="shadow-none flex flex-col text-center whitespace-no-wrap text-white justify-center"
                  :class="[barColor(appliance.performance[key])]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    appliance: { type: Object, default: () => {}, required: true }
  },
  methods: {
    barColor (num) {
      if (num <= 25) {
        return 'bg-orange-500'
      } else if (num <= 50) {
        return 'bg-yellow-500'
      } else if (num <= 75) {
        return 'bg-green-500'
      } else {
        return 'bg-so-blue'
      }
    }
  }
}
</script>

<style scoped lang="postcss">
.graphic {
  height: 10rem;
  width: 15rem;
}
.card {
  @apply bg-white text-black overflow-hidden shadow-md border border-gray-200;
}
</style>
