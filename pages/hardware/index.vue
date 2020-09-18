<template>
  <div class="xs:px-12">
    <PageNav page-name="Appliances" :links="links" />
    <sub-hero class="mb-8">
      <template #graphic>
        <div class="mt-10">
          <img src="~assets/img/hardware/enterprise-server-poweredge-r7415-above-row-pdp.jpg">
        </div>
      </template>
      <template #header>
        Check out our new SOS10000
      </template>
      <template #body>
        Epyc based, capable of 10Gb (without full PCAP)
      </template>
    </sub-hero>
    <div class="flex justify-center mb-8">
      <ActionCallout class="lg:w-1/3" :alt="false">
        <template #info>
          For more info
        </template>
        <template #button-text>
          Contact Us
        </template>
      </ActionCallout>
    </div>
    <div class="bg-so-blue text-white xs:-mx-12 py-8 mb-8">
      <ContentSection :bottom-margin="false">
        <div class="mx-2 sm:mx-24">
          <feature-left class="mb-12">
            <template #graphic>
              <CircleGraphic
                file-name="undraw_server_status_5pbv.svg"
                :size="25"
              />
            </template>
            <template #header>
              Describe a feature
            </template>
            <template #body>
              Give some more context about the feature. Avoid complex sentences and keep it 1-2 sentences long.
            </template>
          </feature-left>
          <feature-right class="mb-32">
            <template #graphic>
              <CircleGraphic
                file-name="undraw_dev_focus_b9xo.svg"
                :size="25"
              />
            </template>
            <template #header>
              Describe a feature
            </template>
            <template #body>
              Give some more context about the feature. Avoid complex sentences and keep it 1-2 sentences long.
            </template>
          </feature-right>
        </div>
      </ContentSection>
    </div>
    <ApplianceGrid class="md:mb-24 px-3 xs:px-0" />
    <div class="bg-so-blue text-white xs:-mx-12 py-10">
      <div class="flex justify-center">
        <ActionCallout class="lg:px-32" :alt="true" @button-click="$nuxt.$emit('show-modal')">
          <template #info>
            For purchasing information
          </template>
          <template #button-text>
            Contact Us
          </template>
        </ActionCallout>
      </div>
    </div>
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
    links: [{ name: 'Forward Nodes', id: 'forward-nodes' }, { name: 'Manager Nodes', id: 'manager-search-nodes' }, { name: 'Search Nodes', id: 'manager-search-nodes' }]
  }),
  head () {
    return {
      title: 'Security Onion Solutions - Appliances'
    }
  }
}
</script>
