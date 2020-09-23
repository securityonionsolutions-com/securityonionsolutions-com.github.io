<template>
  <div class="xs:px-12">
    <PageNav page-name="Appliances" :links="links" />
    <sub-hero class="mb-8 w-full">
      <template #graphic>
        <div class="mt-10">
          <!-- <img src="~assets/img/hardware/enterprise-server-poweredge-r7415-above-row-pdp.jpg"> -->
        </div>
      </template>
      <template #header>
        The New SOS10000
      </template>
      <template #body>
        Now using the AMD Epyc architecture, capable of 10Gbps (Alerts and Metadata only)
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
        <div class="mx-2 xs:mx-12 md:mx-32">
          <feature-left class="mb-24 xs:mb-4">
            <template #graphic>
              <CircleGraphic
                file-name="undraw_server_status_5pbv.svg"
                :size="20"
              />
            </template>
            <template #header>
              Custom Hardware for Security Onion
            </template>
            <template #body>
              We know Security Onion's hardware needs, and our appliances are the perfect match for the platform.
            </template>
          </feature-left>
          <feature-right class="mb-32">
            <template #graphic>
              <CircleGraphic
                file-name="undraw_dev_focus_b9xo.svg"
                :size="20"
              />
            </template>
            <template #header>
              Hardware Is Hard
            </template>
            <template #body>
              Let us make it easy. That way your SOC can focus on their job instead of worrying about the server.
            </template>
          </feature-right>
        </div>
      </ContentSection>
    </div>
    <ApplianceGrid class="md:mb-24 px-3 xs:px-0 md:mx-24" />
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
