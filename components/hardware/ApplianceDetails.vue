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
            <div v-if="spinners" v-for="(spinner, idx) in spinners" class="pb-6">
              <SpinViewer id="spinner" ref="spinner" v-if="idx == this.spinnerIdx"
                :imageUrl="threesixtyDetails.imagePath"
                :rowCount="threesixtyDetails.numPics"
                scale="1"
              />
            </div>
          </div>
        </client-only>
        <div v-if="spinners && spinners.length > 1" class="flex flex-col w-full justify-center text-center cursor-pointer">
          <span v-for="(spinner, idx) in spinners" @click="showSpinner(idx)">
            <Icon name="fa-solid:camera" class="text-black" />
            &nbsp;
            {{ spinner.name }}
          </span>
        </div>
        <div class="flex flex-col md:flex-row  border-b border-t border-gray-400 pb-6 xs:mx-12 mt-4 pt-4">
          <div v-if="appliance.img_front_thumb" class="justify-items-center mx-auto">
            <div
              class="w-full transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
              @click="handleImageClick('front')"
            >
              <img :src="`/img/appliances/${appliance.img_front_thumb}`">
            </div>
            <div v-if="appliance.img_back_thumb" 
              class="w-full transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
              @click="handleImageClick('back')"
            >
              <img :src="`/img/appliances/${appliance.img_back_thumb}`">
            </div>
            <div class="justify-items-start mt-10 mx-4">
              <h3 class="font-bold">Includes:</h3>
              <li>Applicances integrate with Security Onion</li>
              <li>AMD EPYC 4th Generation Processors</li>
              <li>5600 MT/s RDIMM RAM</li>
              <li>iDRAC Enterprise license included</li>
              <li>Supported software and hardware for 1-year or multi-year terms.</li>
            </div>
            <div class="p-24 justify-items-center justify-center text-center">
              <div class="text-3xl xs:text-4xl xl:mr-6 mb-5 text-center">
                Ready to purchase or need more information?
              </div>
              <div class="flex justify-center">
                <so-button class="justify-center" :alternate="false" :link="link" @click.native="sos.showContactModal({text: `Please contact me with more information about the SOS ${appliance.name}.`, source: `${appliance.name.toLowerCase().replace(' ', '_')}_purchasing_info`})">
                  Contact Us
                </so-button>
              </div>
            </div>
          </div>
          <div
            class="px-4"
            :class="[appliance.img_front_thumb == undefined && appliance.img_back_thumb == undefined ? 'pt-12' : 'pt-12 md:pt-0']"
          >
            <div class="py-2">
              <span class="font-bold" v-text="'Use Case(s)'" />
              <li v-for="role in appliance.roles" v-text="role" />
            </div>
            <div v-for="specName in Object.keys(appliance.specs)" :key="specName" class="py-2">
              <span class="font-bold" v-text="specName" />
              <li v-text="specSplit(appliance.specs[specName])" />
            </div>
          </div>
        </div>
        <Footnotes />
      </div>
    </div>
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'

import ActionCallout from '~/components/action_callouts/ActionCallout'
import Footnotes from '~/components/hardware/Footnotes'

export default {
  components: {
    ActionCallout,
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
