<template>
  <div class="rounded-md overflow-hidden shadow-xl bg-white text-black">
    <div class="flex flex-col justify-center">
      <div>
        <div class="bg-so-blue text-white text-4xl text-center font-semibold w-full p-4">
          {{ appliance.name }}
        </div>
        <div class="flex flex-col md:flex-row justify-center text-center border-b border-gray-400 pb-6">
          <div v-if="appliance.img_front_thumb" class="justify-items-center">
            <img class="w-full" :src="pic(appliance.img_front_thumb)">
            <div class="-mt-10">
              <a :href="pic(appliance.img_front)" target="_blank">
                <fa icon="search" /> Zoom In
              </a>
            </div>
            <img class="w-full" :src="pic(appliance.img_back_thumb)">
            <div class="-mt-10">
              <a :href="pic(appliance.img_back)" target="_blank">
                <fa icon="search" /> Zoom In
              </a>
            </div>
          </div>
          <div class="pt-12">
            <div v-for="specName in Object.keys(appliance.specs)" :key="specName" class="p-2">
              <span class="font-bold" v-text="specName" />
              <pre class="font-sans" v-text="appliance.specs[specName]" />
            </div>
          </div>
        </div>
        <div class="p-4">
          <div v-if="appliance.caveats.storageApproximated">
            * Storage sizes are approximate.
          </div>
          <div v-if="appliance.caveats.performanceDependsOnTraffic">
            † Actual performance depends on network traffic. Forward node estimates assume a Manager Node is used.
          </div>
          <div v-if="appliance.caveats.withoutPcap">
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
  },
  methods: {
    pic (filename) {
      return require(`../../assets/img/appliances/${filename}`)
    }
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
