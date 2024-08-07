<template>
  <div class="xs:px-12">
    <PageNav page-name="Support &amp; Professional Services" :links="links" />
    <SubHero class="hero-support text-center">
      <template #header>
        Premium Support
      </template>
      <template #body>
        Security Onion Solutions is the only official support provider.
        We've been helping catch the bad guys since 2014!
        <div class="flex justify-center">
          <ActionCallout :showInfo=false class="mt-1 xl:mt-4" @button-click="sos.showContactModal({ text: 'Please contact me with more information about purchasing support.', source: 'support_purchasing_info' })">
            <template #button-text>
              Purchase Support
            </template>
          </ActionCallout>
        </div>
      </template>
    </SubHero>
    <ContentSection id="premium-support" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <SectionHeader class="mb-6">
          Support and Professional Services
        </SectionHeader>
        <four-panel-detail class="">
          <template #header-top-left>
            Enterprise Deployments
          </template>
          <template #body-top-left>
            From architecture and hardware planning to step-by-step remote deployment, our team will be there to help you with your Security Onion infrastructure at any scale.
          </template>
          <template #header-top-right>
            Tuning
          </template>
          <template #body-top-right>
            We'll use best practices to tune Security Onion components for optimal performance including metadata, signatures, packet capture retention, packet loss, and backend applications.
          </template>
          <template #header-bottom-left>
            Troubleshooting
          </template>
          <template #body-bottom-left>
            Have a problem? Let us bring our years of collective experience to the issue.
          </template>
          <template #header-bottom-right>
            Other
          </template>
          <template #body-bottom-right>
            Need something else with Security Onion? We might be able to help. Contact us for more information.
          </template>
        </four-panel-detail>
      </div>
    </ContentSection>
    <ContentSection id="premium-vs-community" :bottom-margin="false">
      <div class="flex flex-col items-center justify-center mx-1 xs:-mx-10 sm:mx-0">
        <SectionHeader class="mb-8">
          Benefits of Purchasing Support
        </SectionHeader>
        <FreeVsPremiumTable />
      </div>
    </ContentSection>
    <ContentSection id="community-support" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <div class="xs:pb-6">
          <feature-right :text-margin="true">
            <template #header>
              <div class="text-center xs:text-left">
                Community Support
              </div>
            </template>
            <template #graphic>
              <icon name="fa-solid:comment" size="10em" />
            </template>
            <template #body>
              <div class="text-center xs:text-left">
                The Security Onion user base is large, and often times others have run into similar problems or have asked questions that might help you with your own Security Onion installation or troubleshooting.
              </div>
              <div class="text-center xs:text-left mt-4">
                Browse the Security Onion official discussion forums to find support on common issues. Ask for help from other community members, or return the favor by offering your own solutions to other users' discussions.
              </div>
            </template>
          </feature-right>
        </div>
        <action-callout :alternate="true" class="mt-16 mb-12 md:mt-24 md:mb-2" link="https://securityonion.net/discuss">
          <template #info>
            <div class="text-2xl flex justify-center text-center md:text-left">
              <div>
                Not ready for premium support? Take a look at the Security Onion community support content and discussions.
              </div>
            </div>
          </template>
          <template #button-text>
            <div class="text-lg my-1">
              Community Support
            </div>
          </template>
        </action-callout>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'

import ActionCallout from '~/components/action_callouts/ActionCallout'  
import FeatureRight from '~/components/features/FeatureRight'
import FourPanelDetail from '~/components/features/FourPanelDetail'
import SubHero from '~/components/hero/SubHero'

export default {
  scrollToTop: true,
  components: {
    ActionCallout,
    FeatureRight,
    FourPanelDetail,
    SubHero,
  },
  data: () => ({
    sos,
    showModal: false,
    links: [{ name: 'Premium', id: 'premium-support' }, { name: 'Community', id: 'community-support' }]
  })
}
</script>

<style scoped>
.hero-support {
  background: right bottom no-repeat url('/img/graphics/world.jpg');
}
</style>
