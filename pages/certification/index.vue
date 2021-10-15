<template>
  <div class="xs:px-12">
    <SubHero class="hero">
      <template #header>
        <div>
          Security Onion
          <br>
          Certified Professional
          <br>
          (SOCP)
        </div>
      </template>
      <template #body>
        <div class="mt-6">
          Available Now!
        </div>
      </template>
    </SubHero>
    <content-section :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <div class="text-2xl md:text-4xl text-center font-semibold">
          The SOCP exam validates that you have the knowledge and skills to properly investigate alerts, hunt for adversaries,
          and manage your Security Onion 2 grid.
        </div>
      </div>
    </content-section>
    <content-section id="domain-list">
      <div class="flex flex-col px-6 xs:px-0">
        <div class="text-xl md:text-2xl font-semibold text-center mb-6">
          This exam tests your knowledge in the following six domains:
        </div>
        <div class="flex flex-row flex-wrap justify-center mt-4">
          <div v-for="(domain, i) in domainArr" :key="i" class="w-full md:w-1/3 bg-gray-200 rounded-md m-2 md:px-4 px-2 py-4 h-72 transition duration-75 ease-linear transform xs:hover:scale-105 focus: cursor-pointer" @click="$nuxt.$emit('show-domain-details', { domainDetailText: domain.details, domainName: domain.name, domainTestPercent: domain.percent })">
            <div class="-mt-3 mr-2 absolute right-0 font-bold text-xs text-gray-700">
              <fa icon="info" mask="circle" transform="shrink-6" />
            </div>
            <vertical-feature class="mt-1">
              <template #graphic>
                <fa :icon="domain.icon" class="mb-3" mask="circle" transform="shrink-8" size="4x" />
              </template>
              <template #title>
                <div class="-mx-1">
                  {{ domain.name }}
                </div>
              </template>
              <template #body>
                {{ domain.desc }}
              </template>
            </vertical-feature>
          </div>
        </div>
      </div>
    </content-section>
    <content-section :alternate="true">
      <div class="flex justify-center items-center mx-3 sm:mx-16">
        <div class="flex flex-col justify-center items-center w-full lg:w-4/5 xl:w-3/5 py-6 mx-1 md:mx-0 lg:mx-32 xl:mx-0 px-2 md:px-4 mb-1 rounded-lg border-solid border-4 justify-between border-gray-700 bg-white text-black">
          <div class="text-5xl font-bold text-center lg:text-left mb-4">
            SOCP Exam
          </div>
          <div class="flex flex-col lg:flex-row w-full items-center justify-center justify-between lg:px-4 xl:px-10">
            <div class="flex flex-col lg:mr-6 mb-12 lg:mb-4">
              <div class="text-base text-center lg:text-left lg:ml-2">
                <ul>
                  <li>
                    <span class="font-bold">Cost:</span> $199
                  </li>
                  <li>
                    <span class="font-bold">Certification validity:</span> 3 years
                  </li>
                  <li>
                    <span class="font-bold">Length:</span> 45 questions<br class="md:hidden"><span class="hidden md:inline-block">,</span> 125 minutes
                  </li>
                  <li>
                    <span class="font-bold">Retake wait time:</span> None
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col items-center gap-y-6 lg:mt-4">
              <so-button link="/files/socp-v1-exam-blueprint.pdf">
                Exam details
              </so-button>
              <so-button link="https://www.isoqualitytesting.com/">
                Schedule exam
              </so-button>
              <div class="text-sm -mt-4 mb-3 hover:underline">
                <a href="/files/socp-registration-guide.pdf">
                  <div class="flex flex-row justify-center content-center">
                    <div>
                      Registration Guide
                    </div>
                    <div class="ml-1 text-xs"><fa icon="external-link-alt" /></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </content-section>
    <content-section>
      <div class="flex justify-center -mx-12">
        <div class="w-full lg:w-4/5 xl:w-3/5 px-6 md:px-10">
          <div class="text-center text-3xl font-semibold mb-12 -mt-4">
            Authorized Materials
          </div>
          <div class="text-md mx-4">
            <div class="ml-4">
              The SOCP exam is in an open book format.
              <br> <br>
              The following are all authorized material for the exam:
              <ul class="list-disc list-inside ml-2 mb-6">
                <li>
                  Security Onion Documentation Paperback book (Available online <a class="text-so-blue hover:underline cursor-pointer" href="https://securityonion.net/book" target="_blank">here</a>)
                </li>
                <li>
                  Course material for any Security Onion Solutions instructor-led training
                </li>
                <li>
                  Notes (handwritten or typed)
                </li>
              </ul>
            </div>
            <div class="bg-red-300 text-red-700 border border-red-700 rounded rounded-md px-6 py-2">
              Reference materials having the appearance of exam questions and answers are <span class="font-bold">strictly prohibited</span>.
            </div>
          </div>
        </div>
      </div>
    </content-section>
    <content-section id="certificationhelp" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-48 -my-8">
        <action-callout :alternate="true" class="my-12" @button-click="$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about the Security Onion Certified Professional certification.', source: 'hw_purchasing_info' })">
          <template #info>
            <div class="text-3xl flex justify-center text-center md:text-left">
              <div>
                Have more questions about the SOCP?
              </div>
            </div>
          </template>
          <template #button-text>
            <div class="text-lg my-1">
              Contact Us
            </div>
          </template>
        </action-callout>
      </div>
    </content-section>
  </div>
</template>

<script>
import ContentSection from '~/components/ContentSection.vue'
import VerticalFeature from '~/components/features/VerticalFeature.vue'
import SoButton from '~/components/SoButton.vue'
export default {
  scrollToTop: true,
  components: { ContentSection, VerticalFeature, SoButton },
  data: () => ({
    domainArr: require('~/content/cert_domains.json').domains
  }),
  beforeMount () {

  },
  head () {
    return {
      title: 'Security Onion Solutions - Certification'
    }
  }
}
</script>

<style scoped>
.hero {
  background: right bottom no-repeat url(~assets/img/graphics/squares.jpg);
}
#domain-list {
  -webkit-tap-highlight-color: transparent;
}
</style>
