<template>
  <div class="xs:px-12">
    <PageNav page-name="Security Onion Pro" :links="links" />
    <SubHero class="hero-support text-center">
      <template #header>
        Security Onion Pro
      </template>
      <template #body>
        Powerful features and personalized support offered for enterprise customers!
        <div class="flex flex-col flex-grow items-center">
          <ActionCallout :showInfo=false class="mt-1 xl:mt-4" @button-click="sos.showContactModal({ text: 'Please contact me with more information about purchasing Security Onion Pro.', source: 'pro_purchasing_info' })">
            <template #button-text>
              Purchase Pro
            </template>
          </ActionCallout>
        </div>
        <div class="flex flex-col flex-grow items-center">
          <so-button class="mt-1 xl:mt-4" link="https://docs.securityonion.net/en/2.4/pro.html">
            Pro Documentation
          </so-button>
        </div>
      </template>
    </SubHero>
    <ContentSection id="features" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <SectionHeader class="mb-6">
          Enterprise Features
        </SectionHeader>
        <feature-right class="xs:mb-20" :text-margin="true">
          <template #body>
            <div class="text-center xs:text-left">
              Our customers have been asking for enterprise features so
              we've spent the last few years building them!
              Here are some of the enterprise features available with a Security Onion Pro license as of today:
            </div>
          </template>
        </feature-right>
        <four-panel-detail class="">
          <template #header-top-left>
            Notifications
          </template>
          <template #body-top-left>
            By default, no outbound notifications are enabled in a Security Onion installation. However, With the Pro license applied to a grid, notifications can be quickly configured via the Configuration screen.
          </template>
          <template #header-top-right>
            Open ID Connect (OIDC)
          </template>
          <template #body-top-right>
            SOC supports single sign-on (SSO) authentication via OpenID Connect (OIDC) to one of several OIDC-compatible identity providers. For example, users can login to Security Onion using an Active Directory user, a GitHub user, a Google account, an Auth0 account, etc.
          </template>
          <template #header-bottom-left>
            Military-Grade Protections
          </template>
          <template #body-bottom-left>
            The Pro license offers DoD Security Technical Implementation Guide (STIG) compliance for the OS. STIGs can be automically applied to the grid using OpenSCAP.
          </template>
          <template #header-bottom-right>
            And Much More!
          </template>
          <template #body-bottom-right>
            There are a number of other useful features included with Security Onion Pro. Refer to the comparison chart below to see all the amazing features the Pro license has to offer!
          </template>
        </four-panel-detail>
      </div>
    </ContentSection>
    <ContentSection id="comparison" :bottom-margin="false">
      <div class="flex flex-col items-center justify-center mx-1 xs:-mx-10 sm:mx-0">
        <SectionHeader class="mb-8">
          Feature Comparison
        </SectionHeader>
        <FreeVsProTable />
      </div>
    </ContentSection>
    <ContentSection id="services" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <SectionHeader class="mb-6">
          Pro Support and Services
        </SectionHeader>
        <feature-right class="xs:mb-20" :text-margin="true">
          <template #body>
            <div class="text-center xs:text-left">
              In addition to its many powerful features, the Pro license also includes a number of support and service perks for enterprise customers!
            </div>
          </template>
        </feature-right>
        <four-panel-detail class="">
          <template #header-top-left>
            Higher Priority Service Level Agreements (SLAs)
          </template>
          <template #body-top-left>
            Receive faster service with the one business day initial response SLA included with Security Onion Pro. A four-business-hour initial response SLA is also available.
          </template>
          <template #header-top-right>
            Support Hours
          </template>
          <template #body-top-right>
            For customers running Security Onion on their hardware or smaller SOS appliances, Security Onion Pro includes twenty hours of professional services and support time. Services include architecture planning, deployment, tuning, break/fix support, parsing, and other services around Security Onion. Additional hours packages are available.
          </template>
          <template #header-bottom-left>
            Offline Update Service Shipments
          </template>
          <template #body-bottom-left>
            If you have an airgap deployment, we can ship two free offline updates per year when requested.
          </template>
          <template #header-bottom-right>
            Health Checks
          </template>
          <template #body-bottom-right>
            Security Onion Pro includes two free 1-hour Health Checks per year.
          </template>
        </four-panel-detail>
      </div>
    </ContentSection>
    <ContentSection id="coverage" :alternate="false">
      <div class="px-6 xs:px-12 lg:px-32">
        <SectionHeader class="mb-6">
          Pro Hardware and Coverage
        </SectionHeader>
        <two-panel-detail class="">
          <template #header-left>
            Included with Larger Hardware Appliances
          </template>
          <template #body-left>
            Security Onion Pro is included with many of our larger hardware appliance models, such as the SOS SN7200, SOS SNNV, and SOS GoFast, at no additional charge. See our full appliance list at
              <a href="https://securityonion.com/hardware" class="underline">
                https://securityonion.com/hardware.
              </a>
          </template>
          <template #header-right>
            Broad Grid Coverage
          </template>
          <template #body-right>
            The base license includes licensing for up to ten nodes, with additional node packs available for purchase.
          </template>
        </two-panel-detail>
      </div>
    </ContentSection>
    <ContentSection id="pro-help" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32 -my-8">
        <action-callout :alternate="true" class="my-12" @button-click="sos.showContactModal({ text: 'Please contact me with more information about Security Onion Pro.', source: 'pro_purchasing_info' })">
          <template #info>
            <div class="text-3xl flex justify-center text-center md:text-left">
              <div>
                Ready to purchase or need more information?
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
    </ContentSection>
  </div>
</template>
  
  <script>
  import { sos } from '~/lib/sos.js'
  
  import ActionCallout from '~/components/action_callouts/ActionCallout'  
  import FeatureRight from '~/components/features/FeatureRight'
  import FeatureLeft from '~/components/features/FeatureLeft.vue'
  import FeatureLeftAction from '~/components/features/FeatureLeftAction.vue'
  import FourPanelDetail from '~/components/features/FourPanelDetail'
  import SubHero from '~/components/hero/SubHero'
  import TwoPanelDetail from '~/components/features/TwoPanelDetail.vue'
  
  export default {
    scrollToTop: true,
    components: {
      ActionCallout,
      FeatureRight,
      FeatureLeft,
      FeatureLeftAction,
      FourPanelDetail,
      SubHero,
      TwoPanelDetail,
    },
    data: () => ({
      sos,
      showModal: false,
      links: [{ name: 'Features', id: 'features' }, { name: 'Comparison', id: 'comparison' }, { name: 'Services', id: 'services' }, { name: 'Coverage', id: 'coverage' }]
    })
  }
  </script>
  
  <style scoped>
  .hero-support {
    background: right bottom no-repeat url('/img/graphics/world.jpg');
  }
  </style>
  