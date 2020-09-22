<template>
  <div class="xs:px-12">
    <PageNav page-name="Professional Services &amp; Support" :links="links" />
    <DetailPara class="mx-2 xs:mx-0 mt-12">
      <template #header>
        <div class="text-2xl xs:text-6xl">
          Premium Support
        </div>
      </template>
      <template #body>
        <div class="text-lg xs:text-2xl">
          From the company behind Security Onion
        </div>
      </template>
    </DetailPara>
    <!-- <section-header>
      Premium Support
    </section-header> -->
    <div class="my-6 mx-0 xs:mx-12 lg:mx-24">
      <feature-left>
        <template #header>
          The only <span class="italic font-bold">official</span> support provider
        </template>
        <template #body>
          Helping you catch the bad guys since 2014
        </template>
        <template #graphic>
          <CircleGraphic
            file-name="undraw_active_options_8je6.svg"
            :size="20"
            :padding="false"
          />
        </template>
      </feature-left>
    </div>
    <div class="xs:-mx-12 px-4 xs:px-24 bg-so-blue text-white">
      <ContentSection id="premium-support">
        <four-panel-detail class="">
          <template #section-heading>
            <div class="text-3xl xs:text-6xl">
              Services
            </div>
          </template>
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
            Etc.
          </template>
          <template #body-bottom-right>
            Need something else with Security Onion? We might be able to help. Contact us for more information.
          </template>
        </four-panel-detail>
      </ContentSection>
    </div>
    <feature-right class="mb-16 md:mb-0 mt-12 xs:mt-12 mx-0 xs:mx-12 lg:mx-18">
      <template #header>
        Protect your investment in Security Onion
      </template>
      <template #graphic>
        <CircleGraphic
          file-name="undraw_progress_data_4ebj.svg"
          :size="18"
          :padding="false"
        />
      </template>
    </feature-right>
    <ActionCallout class="lg:px-32 mb-12" @button-click="$nuxt.$emit('show-contact-modal')">
      <template #info>
        Ready to purchase support?
      </template>
      <template #button-text>
        Contact Us
      </template>
    </ActionCallout>
    <ContentSection id="premium-vs-community" :bottom-margin="false">
      <div class="flex flex-col items-center justify-center mx-1 xs:-mx-10 sm:mx-0">
        <SectionHeader class="mb-8">
          Benefits of Purchasing Support
        </SectionHeader>
        <FreeVsPremiumTable />

        <!-- <div class="pr-16 w-2/3">
        </div>
        <VerticalFeature class="w-1/3">
          <template #title>
            Why ProfServ is better
          </template>
          <template #body>
            Give some more info about this. This can contain more detail and context with a more technical direction. Make sure to be concise with your wording and avoid overly complex sentence structure.
          </template>
        </VerticalFeature> -->
      </div>
      <!-- <two-panel-detail class="mt-16">
        <template #section-heading>
          Section Heading
        </template>
        <template #header-left>
          Describe a feature
        </template>
        <template #body-left>
          Give some more info about the feature. This can contain more detail and context with a more technical direction. Make sure to be concise with your wording and avoid overly complex sentence structure.
        </template>
        <template #header-right>
          Describe a feature
        </template>
        <template #body-right>
          Give some more info about the feature. This can contain more detail and context with a more technical direction. Make sure to be concise with your wording and avoid overly complex sentence structure.
        </template>
      </two-panel-detail> -->
    </ContentSection>
    <ContentSection id="community-support" :bottom-margin="false">
      <div class="xs:-mx-12 px-4 xs:px-12 py-10 bg-so-blue text-white">
        <!-- <ActionCallout class="lg:px-32" :alt="true" @button-click="$nuxt.$emit('show-contact-modal')">
          <template #info>
            Ready to purchase support?
          </template>
          <template #button-text>
            Contact Us
          </template>
        </ActionCallout> -->
        <ActionCalloutDetail class="lg:px-32 mt-6" :alt="true" @button-click="$nuxt.$emit('show-contact-modal')">
          <template #info>
            Looking for community support?
          </template>
          <template #info-detail>
            For links to GitHub Discussions, Reddit, Twitter, etc.
          </template>
          <template #button-text>
            Click Here
          </template>
        </ActionCalloutDetail>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import FourPanelDetail from '~/components/features/FourPanelDetail'
import FeatureRight from '~/components/features/FeatureRight'
import FeatureLeft from '~/components/features/FeatureLeft'

export default {
  scrollToTop: true,
  components: {
    FourPanelDetail,
    FeatureRight,
    FeatureLeft
  },
  data: () => ({
    showModal: false,
    links: [{ name: 'Premium', id: 'premium-support' }, { name: 'Premium vs Community', id: 'premium-vs-community' }, { name: 'Community', id: 'community-support' }]
  }),
  head () {
    return {
      title: 'Security Onion Solutions - Support'
    }
  }
}
</script>

<style scoped>

</style>
