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
    <ContentSection id="pro-features" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <SectionHeader class="mb-6">
          Enterprise Features
        </SectionHeader>
        <feature-right class="xs:mb-20" :text-margin="true">
          <template #body>
            <div class="text-center xs:text-left">
              Our customers have been asking for enterprise features so
              we've spent the last few years building them!
              Here are some enterprise features available with a Security Onion Pro license as of today:
            </div>
          </template>
        </feature-right>
        
        <feature-right class="xs:mb-20" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Open ID Connect (OIDC)
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                class="shadow-xl rounded-md overflow-hidden"
                :padding="false"
                file-name="oidc-thumb.jpg"
                :size="20"
                :clickable="true"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              SOC supports single sign-on (SSO) authentication via OpenID Connect (OIDC) to one of several OIDC-compatible identity providers. For example, users can login to Security Onion using an Active Directory user, a GitHub user, a Google account, an Auth0 account, etc. Only one OIDC provider can be active at a time.
            </div>
          </template>
        </feature-right>
        
        <feature-left class="my-12">
          <template #header>
            <div class="text-center xs:text-left">
              Data at Rest Encryption
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                file-name="appliance.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-left">
              Storage-level encryption for data residing in your Grid.
            </div>
          </template>
        </feature-left>
        
        <feature-right class="xs:mb-20" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Federal Information Processing Standards (FIPS)
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                file-name="appliance.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              Support for enabling FIPS during OS installation. For more information about FIPS, please see
              <a href="https://en.wikipedia.org/wiki/Federal_Information_Processing_Standards" class="underline">
                https://en.wikipedia.org/wiki/Federal_Information_Processing_Standards.
              </a>
            </div>
          </template>
        </feature-right>
        
        <feature-left class="my-12">
          <template #header>
            <div class="text-center xs:text-left">
              DoD Security Technical Implementation Guide (STIG) Compliance for the OS
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                file-name="appliance.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-left">
              Automatically apply STIGs to your Grid using OpenSCAP. For more information about STIGs, please see
              <a href="https://public.cyber.mil/stigs/" class="underline">
                https://public.cyber.mil/stigs/.
              </a>
            </div>
          </template>
        </feature-left>
        
        <feature-right class="xs:mb-20" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              External Notifications in SOC
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                class="shadow-xl rounded-md overflow-hidden"
                :padding="false"
                file-name="notify-pro-thumb.jpg"
                :size="20"
                :clickable="true"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              The Detections module, specifically Sigma rules, can be enabled to send outbound notifications upon an alert being created. By default, no outbound notifications are enabled in a Security Onion installation. However, with the Pro license applied to a grid, notifications can be quickly configured via the Configuration screen.
            </div>
          </template>
        </feature-right>
        
        <feature-left class="my-12">
          <template #header>
            <div class="text-center xs:text-left">
              Time Tracking inside of Cases
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                file-name="appliance.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-left">
              When adding a comment to a Case, you can also specify how many hours you spent working on that activity. You can then see the total time spent by all analysts in the Summary in the upper-right corner of the Case.
            </div>
          </template>
        </feature-left>

        <feature-right class="xs:mb-20" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Guaranteed Message Delivery
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                class="shadow-xl rounded-md overflow-hidden"
                :padding="false"
                file-name="kafka-pro-thumb.jpg"
                :size="20"
                :clickable="true"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              If you need guaranteed message delivery, then you can enable Kafka which replaces Redis and Logstash on the Security Onion Manager node and Receiver nodes.
            </div>
          </template>
        </feature-right>
        
        <feature-left class="my-12">
          <template #header>
            <div class="text-center xs:text-left">
              Higher Priority Service Level Agreements (SLAs)
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                file-name="appliance.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-left">
              Receive faster service with the one business day initial response SLA included with Security Onion Pro. A four-business-hour initial response SLA is also available.
            </div>
          </template>
        </feature-left>
        
        <feature-right class="xs:mb-12" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Health Checks
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                file-name="appliance.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              Security Onion Pro includes two free 1-hour Health Checks per year.
            </div>
          </template>
        </feature-right>
        
        <feature-left class="my-12">
          <template #header>
            <div class="text-center xs:text-left">
              Offline Update Service Shipments
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                file-name="appliance.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-left">
              If you have an airgap deployment, we can ship two free offline updates per year when requested.
            </div>
          </template>
        </feature-left>
        
        <feature-right class="xs:mb-20" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Professional Services and Support
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                file-name="appliance.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              For customers running Security Onion on their hardware or smaller SOS appliances, Security Onion Pro includes twenty hours of professional services and support time. Services include architecture planning, deployment, tuning, break/fix support, parsing, and other services around Security Onion. Additional hours packages are available.
            </div>
          </template>
        </feature-right>
        
        <feature-left class="my-12">
          <template #header>
            <div class="text-center xs:text-left">
              Included with larger hardware appliances
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                file-name="sos-gf-front.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-left">
              Security Onion Pro is included with many of our larger hardware appliance models, such as the SOS SN7200, SOS SNNV, and SOS GoFast, at no additional charge. See our full appliance list at
              <a href="https://securityonion.com/hardware" class="underline">
                https://securityonion.com/hardware.
              </a>
            </div>
          </template>
        </feature-left>
        
        <feature-right class="xs:mb-20" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Coverage for all the nodes in your Grid
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                file-name="appliance.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              The base license includes licensing for up to ten nodes, with additional node packs available for purchase.
            </div>
          </template>
        </feature-right>
      </div>
    </ContentSection>
    <ContentSection id="free-vs-pro" :bottom-margin="false">
      <div class="flex flex-col items-center justify-center mx-1 xs:-mx-10 sm:mx-0">
        <SectionHeader class="mb-8">
          Benefits of Purchasing Pro
        </SectionHeader>
        <FreeVsProTable />
      </div>
    </ContentSection>
    <ContentSection id="hardwarehelp" :alternate="true">
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
  
  export default {
    scrollToTop: true,
    components: {
      ActionCallout,
      FeatureRight,
      FeatureLeft,
      FeatureLeftAction,
      FourPanelDetail,
      SubHero,
    },
    data: () => ({
      sos,
      showModal: false,
      links: [{ name: 'Features', id: 'pro-features' }, { name: 'Comparison', id: 'free-vs-pro' }]
    })
  }
  </script>
  
  <style scoped>
  .hero-support {
    background: right bottom no-repeat url('/img/graphics/world.jpg');
  }
  </style>
  