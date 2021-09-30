<template>
  <div class="xs:px-12">
    <PageNav page-name="Appliances" :links="links" />
    <SubHero id="download-before" class="hero-hardware">
      <template #header>
        The new SOS 10000!
      </template>
      <template #body>
        <div class="flex justify-center text-center">
          <div class="text-2xl">
            Now using the AMD Epyc architecture,
            <br>
            capable of 10 Gbps ‡
          </div>
        </div>
        <div class="flex justify-center">
          <ActionCallout class="mt-4" @button-click="$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about the SOS 10000.', source: 'hw_purchase' })">
            <template #button-text>
              Purchase
            </template>
          </ActionCallout>
        </div>
      </template>
    </SubHero>
    <ContentSection id="overview" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <feature-right class="xs:mb-12" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Official Hardware Appliances for Security Onion
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
              We know Security Onion's hardware needs, and our appliances are the perfect match for the platform. Leave the hardware research, testing, and support to us, so you can focus on what's important for your organization.
            </div>
          </template>
        </feature-right>
        <feature-left class="my-12">
          <template #header>
            <div class="text-center xs:text-left">
              Integration with Security Onion
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                class="shadow-xl rounded-md overflow-hidden"
                :padding="false"
                :size="20"
                file-name="grid-thumb.jpg"
                :clickable="true"
              />
            </div>
          </template>
          <template #body>
            <div class="text-left">
              Security Onion's SOC interface provides appliance-specific information directly in the user-interface. Use this information to monitor the appliance's health in realtime. Also view the appliance front and rear panels, useful for walking through connectivity discussions with personnel in the data center. Only official Security Onion Solutions appliances are supported with this integration.
            </div>
          </template>
        </feature-left>
        <feature-right class="xs:mb-12" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Support Security Onion
            </div>
          </template>
          <template #graphic>
            <fa icon="hands-helping" size="10x" />
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              Not only will you have confidence that your Security Onion deployment is running on the best-suited hardware, you will also be supporting future development and maintenance of the Security Onion project!
            </div>
          </template>
        </feature-right>
      </div>
    </ContentSection>
    <ContentSection id="comparison">
      <div class="flex flex-col items-center justify-center mx-1 xs:-mx-10 sm:mx-0">
        <SectionHeader class="mb-8">
          Appliances
        </SectionHeader>
        <ApplianceGrid />
      </div>
    </ContentSection>
    <ContentSection id="hardwarehelp" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <action-callout :alternate="true" class="my-12" @button-click="$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about Security Onion appliances.', source: 'hw_purchasing_info' })">
          <template #info>
            <div class="text-3xl flex justify-center text-center md:text-left">
              <div>
                Ready to purchase, or need more information?
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
import SubHero from '~/components/hero/SubHero'
import ActionCallout from '~/components/action_callouts/ActionCallout'
import FeatureRight from '~/components/features/FeatureRight'
import FeatureLeft from '~/components/features/FeatureLeft'

export default {
  scrollToTop: true,
  components: {
    SubHero,
    ActionCallout,
    FeatureRight,
    FeatureLeft
  },
  data: () => ({
    links: [{ name: 'Overview', id: 'overview' }, { name: 'Comparison', id: 'comparison' }]
  }),
  head () {
    return {
      title: 'Security Onion Solutions'
    }
  }
}
</script>

<style scoped>
.hero-hardware {
  background: right bottom no-repeat url(~assets/img/graphics/hardware.jpg);
}
</style>
