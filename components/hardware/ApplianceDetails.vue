<template>
  <div class="overflow-hidden bg-white text-black flex flex-col flex-grow">
    <div class="flex flex-col flex-grow justify-between">
      <div>
        <div class="bg-so-blue text-white text-4xl text-center font-semibold w-full">
          SOS {{ appliance.name }}
        </div>
        <div class="hidden md:block bg-so-blue text-white text-2xl text-center w-full">
          {{ appliance.tagline }}
        </div>
        <client-only>
          <div class="flex justify-center">
            <div v-for="(spinner, idx) in spinners" class="pb-6">
              <SpinViewer id="spinner" ref="spinner" v-if="idx == this.spinnerIdx"
                :imageUrl="threesixtyDetails.imagePath"
                :rowCount="threesixtyDetails.numPics"
                scale="1"
              />
            </div>
          </div>
        </client-only>
        <div v-if="spinners.length > 1" class="flex flex-col w-full justify-center text-center cursor-pointer">
          <span v-for="(spinner, idx) in spinners" @click="showSpinner(idx)">
            <Icon name="fa-solid:camera" class="text-black" />
            &nbsp;
            {{ spinner.name }}
          </span>
        </div>
        <div class="flex flex-col md:flex-row justify-center items-center text-center border-b border-t border-gray-400 pb-6 xs:mx-12 mt-4">
          <div v-if="appliance.img_front_thumb" class="justify-items-center">
            <div
              class="w-full transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
              @click="handleImageClick('front')"
            >
              <img :src="`/img/appliances/${appliance.img_front_thumb}`">
            </div>
            <div
              class="w-full transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
              @click="handleImageClick('back')"
            >
              <img :src="`/img/appliances/${appliance.img_back_thumb}`">
            </div>
          </div>
          <div
            class="md:px-4"
            :class="[appliance.img_front_thumb == undefined && appliance.img_back_thumb == undefined ? 'pt-12' : 'pt-12 md:pt-0']"
          >
            <div class="p-2">
              <span class="font-bold" v-text="'Use Case(s)'" />
              <pre class="font-sans" v-text="appliance.roles.join('\n')" />
            </div>
            <div v-for="specName in Object.keys(appliance.specs)" :key="specName" class="p-2">
              <span class="font-bold" v-text="specName" />
              <pre class="font-sans" v-text="specSplit(appliance.specs[specName])" />
            </div>
          </div>
        </div>
        <Footnotes />
      </div>
      <ActionCallout class="m-6 xs:pb-6" @button-click="sos.showContactModal({text: `Please contact me with more information about the SOS ${appliance.name}.`, source: `${appliance.name.toLowerCase().replace(' ', '_')}_purchasing_info`})">
        <template #info>
          <div class="text-3xl">
            Ready to purchase or need more information?
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
import { sos } from '~/lib/sos.js'

import Footnotes from '~/components/hardware/Footnotes'

export default {
  components: {
    Footnotes,
  },
  data: () => ({
    sos,
    spinnerIdx: 0,
  }),
  props: {
    appliance: { type: Object, default: () => {} }
  },
  computed: {
    threesixtyDetails () {
      const imagePath = this.appliance.threesixty[this.spinnerIdx].imagePath
      const numPics = this.appliance.threesixty[this.spinnerIdx].count
      return {
        imagePath,
        numPics,
      }
    },
    spinners() {
      return this.appliance.threesixty;
    },
  },
  mounted() {
    this.spin();
  },
  methods: {
    specSplit (str) {
      return str.replace(/, /g, '\n')
    },
    handleImageClick (side) {
      let fileName
      if (side === 'front') {
        fileName = this.appliance.img_front_thumb
      } else {
        fileName = this.appliance.img_back_thumb
      }
      sos.showImageZoom({ imageType: 'appliance', imageName: fileName })
    },
    spin() {
      setTimeout(() => {
        if (this.$refs.spinner) {
          this.$refs.spinner[0].spinBy(360, { duration: 4000 });
        }
      }, 1000);
    },
    showSpinner(idx) {
      this.spinnerIdx = idx;
      this.spin();
    },
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

#spinner {
  width: 1200px !important;
  height: 400px !important;
}
</style>
