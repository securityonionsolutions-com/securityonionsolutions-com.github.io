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
        <div class="flex flex-col md:flex-row justify-center items-center text-center border-b border-gray-400 pb-6 xs:mx-12 mt-4">
          <div v-if="appliance.img_front_thumb" class="justify-items-center">
            <div
              class="w-full transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
              @click="handleImageClick('front')"
            >
              <img :src="require(`~/assets/img/appliances/${appliance.img_front_thumb}`)">
            </div>
            <div
              class="w-full transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
              @click="handleImageClick('back')"
            >
              <img :src="require(`~/assets/img/appliances/${appliance.img_back_thumb}`)">
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
      <ActionCallout class="m-6 xs:pb-6" @button-click="$nuxt.$emit('show-contact-modal', {text: `Please contact me with more information about the SOS ${appliance.name}.`, source: `${appliance.name.toLowerCase().replace(' ', '_')}_purchasing_info`})">
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
export default {
  props: {
    appliance: { type: Object, default: () => {} }
  },
  computed: {
    threesixtyDetails () {
      const imagePath = this.appliance.threesixty.imagePath
      const filenameFormat = this.appliance.threesixty.filenameFormat
      const numPics = this.appliance.threesixty.count
      const reverse = this.appliance.threesixty.reverse
      return {
        imagePath,
        filenameFormat,
        numPics,
        reverse
      }
    }
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
      this.$nuxt.$emit('show-image-zoom', { imageType: 'appliance', imageName: fileName })
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
