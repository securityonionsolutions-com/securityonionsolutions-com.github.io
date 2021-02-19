<template>
  <div class="overflow-hidden bg-white text-black flex flex-col flex-grow">
    <div class="flex flex-col flex-grow justify-between">
      <div>
        <div class="bg-so-blue text-white text-4xl text-center font-semibold w-full p-4">
          {{ appliance.name }}
        </div>
        <client-only>
          <div class="flex justify-center">
            <div class="xs:mx-12 xl:mx-24 pb-6 border-b border-gray-400">
              <vue-three-sixty
                :amount="threesixtyDetails.numPics"
                :image-path="threesixtyDetails.imagePath"
                :file-name="threesixtyDetails.filenameFormat"
                :spin-reverse="threesixtyDetails.reverse"
              />
            </div>
          </div>
        </client-only>
        <div class="flex flex-col md:flex-row justify-center items-center text-center border-b border-gray-400 pb-6 xs:mx-12">
          <div v-if="appliance.img_front_thumb" class="justify-items-center">
            <img class="w-full" :src="pic(appliance.img_front_thumb)">
            <div class="-mt-5 xs:-mt-10">
              <a :href="pic(appliance.img_front)" target="_blank">
                <fa icon="search" /> Zoom In
              </a>
            </div>
            <img class="w-full" :src="pic(appliance.img_back_thumb)">
            <div class="-mt-5 xs:-mt-10">
              <a :href="pic(appliance.img_back)" target="_blank">
                <fa icon="search" /> Zoom In
              </a>
            </div>
          </div>
          <div
            class="md:px-4"
            :class="[appliance.img_front_thumb == undefined && appliance.img_back_thumb == undefined ? 'pt-12' : 'pt-12 md:pt-0']"
          >
            <div v-for="specName in Object.keys(appliance.specs)" :key="specName" class="p-2">
              <span class="font-bold" v-text="specName" />
              <pre class="font-sans" v-text="specSplit(appliance.specs[specName])" />
            </div>
          </div>
        </div>
        <div class="p-4 xs:mx-12 xl:mx-48">
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
      <ActionCallout class="m-6 xs:pb-6" @button-click="$nuxt.$emit('show-contact-modal', {text: `Please contact me with more information about the ${appliance.name}`, source: `${appliance.name.toLowerCase().replace(' ', '_')}_purchasing_info`})">
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
  computed: {
    threesixtyDetails () {
      let imagePath
      let filenameFormat
      let numPics
      let reverse = false
      if (this.appliance.img_back.includes('sos-1u')) {
        imagePath = this.appliance.img_back.includes('ethernet') ? '/img/appliances/sos-1u-ethernet' : '/img/appliances/sos-1u-sfp'
        filenameFormat = this.appliance.img_back.includes('ethernet') ? 'sos-1u-ethernet-360-{index}.jpg' : 'sos-1u-sfp-360-{index}.jpg'
        numPics = this.appliance.img_back.includes('ethernet') ? 36 : 37
      } else {
        imagePath = '/img/appliances/sos-2u'
        filenameFormat = 'sos-2u-360-{index}.jpg'
        numPics = 42
        reverse = true
      }
      return {
        imagePath,
        filenameFormat,
        numPics,
        reverse
      }
    }
  },
  methods: {
    pic (filename) {
      return require(`../../assets/img/appliances/${filename}`)
    },
    specSplit (str) {
      return str.replace(/, /g, '\n')
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
