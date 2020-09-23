<template>
  <div>
    <div class="flex justify-center">
      <div class="mb-2 xs:mb-12 rounded-sm overflow-hidden shadow-xl bg-white text-black mx-3 xs:mx-0 pb-6">
        <div class="flex justify-center">
          <div class="graphic mb-1">
            <GraphicPlaceholder class="h-full" :shadow="false">
              <div class="text-2xl">
                Picture Coming Soon
              </div>
            </GraphicPlaceholder>
          </div>
        </div>
        <div class="text-4xl text-center font-semibold my-4">
          {{ appliance.name }}
        </div>
        <div class="text-center border-b border-gray-400 pb-6">
          <div v-for="specName in Object.keys(appliance.specs)" :key="specName" class="py-1">
            <span class="font-bold">{{ specName }}</span>
            <pre class="font-sans">{{ appliance.specs[specName] }}</pre>
          </div>
        </div>
        <ActionCallout class="mt-6" @button-click="$nuxt.$emit('show-contact-modal')">
          <template #info>
            <div class="text-3xl">
              For purchasing info
            </div>
          </template>
          <template #button-text>
            <div class="text-base">
              Contact Us
            </div>
          </template>
        </ActionCallout>
      </div>
    </div>
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
