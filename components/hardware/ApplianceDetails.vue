<template>
  <div class="bg-so-blue text-white py-4">
    <div class="text-6xl text-center my-8">
      {{ appliance.name }}
    </div>
    <div class="flex justify-center">
      <div class="mb-2 xs:mb-12 rounded-sm overflow-hidden shadow-xl bg-white text-black mx-3 xs:mx-0 xs:w-2/3 pb-6">
        <div class="flex justify-center">
          <div class="graphic mb-6">
            <GraphicPlaceholder class="h-full" :shadow="false">
              <div class="text-2xl">
                Picture Coming Soon
              </div>
            </GraphicPlaceholder>
          </div>
        </div>
        <div class="text-3xl text-center mb-2">
          Detailed Specs
        </div>
        <div class="text-base text-center">
          <div v-for="specName in Object.keys(appliance.important_specs)" :key="specName" class="py-1">
            <span class="font-bold">{{ specName }}</span> &bullet; {{ appliance.important_specs[specName] }}
          </div>
          <div v-for="specName in Object.keys(appliance.other_specs)" :key="specName" class="py-1">
            <span class="font-bold">{{ specName }}</span> &bullet; {{ appliance.other_specs[specName] }}
          </div>
        </div>
      </div>
    </div>
    <ActionCallout class="my-12 lg:px-32" :alt="true" @button-click="$nuxt.$emit('show-contact-modal')">
      <template #info>
        For purchasing info
      </template>
      <template #button-text>
        Action item
      </template>
    </ActionCallout>
  </div>
</template>

<script>
export default {
  props: {
    appliance: { type: Object, default: () => {} }
  }
}
</script>

<style scoped>
.graphic {
  width: 30rem;
  height: 15rem;
}

@media (min-width: 480px) {
  .graphic {
    width: 60rem;
    height: 30rem;
  }
}
</style>
