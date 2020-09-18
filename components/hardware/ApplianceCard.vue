<template>
  <div class="card w-full sm:w-3/4 md:w-full">
    <div class="flex flex-col items-center w-full">
      <GraphicPlaceholder class="w-full h-48 md:h-32 xl:h-40" :shadow="false" :is-button="true">
        <div class="text-base">
          Picture Coming Soon
        </div>
      </GraphicPlaceholder>
      <div class="text-xl my-2">
        {{ appliance.name }}
      </div>
      <div class="flex w-full xl:w-3/5 flex-col items-center py-1">
        <!-- <div v-for="(specName, k) in Object.keys(appliance.important_specs)" :key="k" class="py-1">
          <span class="font-bold">{{ specName }}</span> &bullet; {{ appliance.important_specs[specName] }}
        </div> -->
        <div v-for="(key, k) in Object.keys(appliance.performance)" :key="k" class="flex flex-row justify-center items-center py-2">
          <div class="text-base">
            {{ key }}
          </div>
          <div class="relative w-32 pl-3">
            <div class="overflow-hidden h-4 text-xs flex rounded-sm bg-gray-300">
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
  @apply bg-white text-black overflow-hidden shadow-md pb-4;
}
</style>
