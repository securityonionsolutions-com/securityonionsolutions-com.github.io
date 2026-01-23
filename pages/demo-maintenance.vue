<template>
  <div class="xs:px-12">
    <PageNav page-name="Security Onion Demo" :links="links" />
    <SubHero class="hero-demo text-center">
      <template #header>
        Security Onion Demo
      </template>
      <template #body>
        Try out Security Onion today using our online demo, accessible below with no registration required. Live demos are also available by request!
        <div class="flex flex-col flex-grow items-center">
          <ActionCallout :showInfo=false class="mt-1 xl:mt-4" @button-click="sos.showContactModal({ text: 'Please contact me about a live demo of Security Onion.', source: 'demo_maintenance_hero_contact' })">
            <template #button-text>
              Request a Live Demo
            </template>
          </ActionCallout>
        </div>
      </template>
    </SubHero>  
    <ContentSection id="maintenance" :alternate="true">
      <div class="flex-grow flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <div class="flex justify-center">
            <Icon name="mdi:wrench" size="4em" class="text-yellow-600 mb-4" />
          </div>
          <h2 class="mt-6 text-center text-3xl font-extrabold">
            Scheduled Maintenance
          </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-gray-50 py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
            <p class="text-gray-600 mb-6 text-lg">
              We apologize for the inconvenience. The public demo environment is currently undergoing daily maintenance.
            </p>
            ::CLOUDFLARE_ERROR_500S_BOX::
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-left">
              <div class="flex">
                <div class="flex-shrink-0">
                  <Icon name="mdi:clock-outline" class="h-5 w-5 text-yellow-400" />
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    Maintenance typically lasts less than 30 minutes.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <SoButton link="https://demo.securityonion.net">
                Try Again
              </SoButton>
            </div>
            <p class="text-gray-600 mt-6 text-lg">
              Alternatively, contact us for a live demo!
            </p>
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection id="live-demo" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <SectionHeader class="mb-6">
          Live Demo Scenarios
        </SectionHeader>
        <FourPanelDetail>
          <template #header-top-left>
            Complex Environments
          </template>
          <template #body-top-left>
            Evaluating deployment across restricted or complex networks? Our specialists can guide you through architecture planning and best practices.
          </template>
          <template #header-top-right>
            Feature Deep Dive
          </template>
          <template #body-top-right>
            Want to see specific capabilities like Hunt, Cases, or Detections in action? We can tailor the demo to focus on the features that matter most to you.
          </template>
          <template #header-bottom-left>
            Compliance Needs
          </template>
          <template #body-bottom-left>
            Need to discuss specific compliance or regulatory requirements? We can demonstrate how Security Onion helps you meet your auditing and security goals.
          </template>
          <template #header-bottom-right>
            Team Training
          </template>
          <template #body-bottom-right>
            Assessing the platform for team adoption and workflow integration? Learn how to streamline your SOC operations with our unified interface.
          </template>
        </FourPanelDetail>
        <ActionCallout :alternate="true" class="my-12" @button-click="sos.showContactModal({ text: 'Please contact me to schedule a live demo.', source: 'demo_maintenance_live_demo' })">
          <template #info>
            <div class="text-2xl flex justify-center text-center md:text-left">
              <div>
                Interested in a live demo with a Security Onion specialist?
              </div>
            </div>
          </template>
          <template #button-text>
            <div class="text-lg my-1">
              Contact Us
            </div>
          </template>
        </ActionCallout>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'
import SoButton from '~/components/SoButton'
import PageNav from '~/components/PageNav'
import SubHero from '~/components/hero/SubHero'
import SectionHeader from '~/components/SectionHeader'
import ContentSection from '~/components/ContentSection'
import FourPanelDetail from '~/components/features/FourPanelDetail'
import ActionCallout from '~/components/action_callouts/ActionCallout'

export default {
  head () {
    return {
      title: 'Demo Maintenance | Security Onion'
    }
  },
  components: {
    SoButton,
    SubHero,
    PageNav,
    SectionHeader,
    ContentSection,
    FourPanelDetail,
    ActionCallout
  },
  data: () => ({
    sos,
    links: [{ name: 'Live Demo', id: 'live-demo' }]
  })
}
</script>

<style scoped>
.hero-demo {
  background: right bottom no-repeat url('/img/graphics/squares.jpg');
}
</style>
