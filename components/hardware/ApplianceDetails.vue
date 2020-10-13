<template>
  <div class="rounded-md overflow-hidden shadow-xl bg-white text-black">
    <div class="flex flex-col justify-center">
      <div>
        <div class="bg-so-blue text-white text-4xl text-center font-semibold w-full p-4">
          {{ appliance.name }}
        </div>
        <div class="text-center border-b border-gray-400 pb-6">
          <div v-for="specName in Object.keys(appliance.specs)" :key="specName" class="py-1">
            <span class="font-bold" v-text="specName" />
            <pre class="font-sans" v-text="appliance.specs[specName]" />
          </div>
        </div>
        <div class="p-4">
          <div>
            * Hard disk sizes are approximate.
          </div>
          <div>
            † Actual performance depends on network traffic. Forward node estimates assume a Manager Node is used.
          </div>
          <div>
            ‡ Throughput rating is achieved without PCAP.
          </div>
        </div>
      </div>
      <ActionCallout class="m-6" @button-click="$nuxt.$emit('show-contact-modal', {text: `Please contact me with more information about the ${appliance.name}`, source: `${appliance.name.toLowerCase().replace(' ', '_')}_purchasing_info`})">
        <template #info>
          <div class="text-3xl">
            Ready to purchase, or need more information?
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
