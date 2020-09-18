<template>
  <div class="xs:px-12">
    <PageNav page-name="Security Onion" :links="links" />
    <sub-hero id="download-before" class="mb-8">
      <template #graphic>
        <img src="~assets/img/graphics/undraw_moonlight_5ksn.svg" class="mt-10 w-3/5">
        <hr class="mb-8 w-4/5 border-gray-500" style="color: black">
      </template>
      <template #header>
        Peel back the layers of your network
      </template>
      <template #body>
        Security Onion is a free and open source Linux distribution for threat hunting, enterprise security monitoring, and log management.
      </template>
    </sub-hero>
    <div class="flex justify-center">
      <ActionCallout class="lg:w-2/5 mb-20 mt-4" link="https://github.com/Security-Onion-Solutions/securityonion/blob/master/VERIFY_ISO.md">
        <template #info>
          <div class="flex items-center">
            <div class="text-2xl mr-2">
              Latest version:
            </div>
            <div class="text-3xl">
              {{ soVersion }}
            </div>
          </div>
        </template>
        <template #button-text>
          Download
        </template>
      </ActionCallout>
    </div>
    <div class="xs:px-16 lg:px-24 xs:-mx-12 bg-so-blue text-white">
      <two-panel-detail class="my-20 mx-10">
        <template #section-heading>
          About Security Onion
        </template>
        <template #header-left>
          What it is
        </template>
        <template #body-left>
          { Security Onion is a free and open source Linux distribution for threat hunting, enterprise security monitoring, and log management. } The easy-to-use Setup wizard allows you to build an army of distributed sensors for your enterprise in minutes!
        </template>
        <template #header-right>
          How it does it
        </template>
        <template #body-right>
          It includes Elasticsearch, Logstash, Kibana, Snort, Suricata, Zeek (formerly known as Bro), Wazuh, Sguil, Squert, CyberChef, NetworkMiner, and many other security tools. <br> { Include another sentence here + rework the previous sentence. }
        </template>
      </two-panel-detail>
      <feature-left class="mt-20 mb-16 xs:mx-12 w-ful">
        <template #graphic>
          <CircleGraphic
            file-name="undraw_data_extraction_ih3n.svg"
            :size="20"
          />
        </template>
        <template #header>
          Scalable and flexible <br> to fit YOUR environment
        </template>
        <template #body>
          From a single network appliance to a grid of 1000, Security Onion scales to fit your specific needs.
        </template>
      </feature-left>
      <feature-right class="mt-10 mb-24 xs:mx-12 w-ful">
        <template #graphic>
          <CircleGraphic
            file-name="undraw_investment_xv9d.svg"
            :size="20"
          />
        </template>
        <template #header>
          BY the community, <br> FOR the community
        </template>
        <template #body>
          Security Onion and the tools we integrate are all open source, written by menbers of the cyber security community.
        </template>
      </feature-right>
    </div>
    <feature-selector class="mt-16 lg:mt-32 lg:mx-8" :feature-arr="featureArr" />
    <ContentSection id="data_types">
      <div class="bg-so-blue text-white xs:-mx-12 px-2 xs:px-32 pt-12 pb-10">
        <SectionHeader class="mt-6 xs:mb-8">
          Data Types
        </SectionHeader>
        <div class="flex flex-row flex-wrap justify-center xs:mb-8">
          <div v-for="(type, i) in typeArray" :key="i" class="w-full xs:w-1/2 md:w-1/4">
            <VerticalFeature class="my-6 xs:my-10">
              <template #graphic>
                <fa :icon="type.icon" class="text-white mb-2" mask="circle" transform="shrink-8" size="4x" />
              </template>
              <template #title>
                {{ type.name }}
              </template>
              <template #body>
                <div class="flex flex-col items-center text-center">
                  <div class="mb-2">
                    {{ type.desc }}
                  </div>
                  <hr class="border-white w-1/4 mb-2">
                  <div>
                    {{ type.tools }}
                  </div>
                </div>
              </template>
            </VerticalFeature>
          </div>
        </div>
      </div>
    </ContentSection>
    <action-callout-graphic class="mb-32" @button-click="$nuxt.$emit('show-contact-modal')">
      <template #callout>
        <div class="text-2xl xs:text-4xl flex justify-center">
          <div class="mx-2 xs:mx-0 xs:w-4/6">
            Want us to take care of the hardware and setup so you can focus on threat hunting?
          </div>
        </div>
      </template>
      <template #graphic>
        <div class="mt-6 mb-0 lg:-mb-8">
          <img style="height: 25rem" src="~assets/img/graphics/undraw_detailed_analysis_xn7y.svg">
        </div>
      </template>
      <template #button-text>
        <div class="text-sm xs:text-lg m-1">
          Find Out How
        </div>
      </template>
    </action-callout-graphic>
    <div id="use_cases" class="bg-so-blue xs:-mx-12">
      <div class="h-24" />
      <four-panel-detail class="mb-32 text-white mx-3 xs:mx-24">
        <template #section-heading>
          Use Cases
        </template>
        <template #header-top-left>
          Describe a feature
        </template>
        <template #body-top-left>
          Give some more info about the feature. This can contain more detail and context with a more technical direction. Make sure to be concise with your wording and avoid overly complex sentence structure.
        </template>
        <template #header-top-right>
          Describe a feature
        </template>
        <template #body-top-right>
          Give some more info about the feature. This can contain more detail and context with a more technical direction. Make sure to be concise with your wording and avoid overly complex sentence structure.
        </template>
        <template #header-bottom-left>
          Describe a feature
        </template>
        <template #body-bottom-left>
          Give some more info about the feature. This can contain more detail and context with a more technical direction. Make sure to be concise with your wording and avoid overly complex sentence structure.
        </template>
        <template #header-bottom-right>
          Describe a feature
        </template>
        <template #body-bottom-right>
          Give some more info about the feature. This can contain more detail and context with a more technical direction. Make sure to be concise with your wording and avoid overly complex sentence structure.
        </template>
      </four-panel-detail>
      <!-- <client-only>
        <TestimonialList :alt="true" :list="testimonialList" class="mt-24 mb-20" />
      </client-only>
      <noscript inline-template>
        <Testimonial :alt="true" class="mt-24 mb-20">
        <template #text :show-name="false">
        {{ testimonialList[1] }}
        </template>
        </Testimonial>
      </noscript> -->
    </div>
    <action-callout-graphic class="mt-24" link="https://github.com/Security-Onion-Solutions/securityonion/blob/master/VERIFY_ISO.md" :button="false">
      <template #callout>
        Ready to get started?
      </template>
      <template #graphic>
        <div class="xs:mt-2 xs:mb-10">
          <img style="height: 20rem" src="~assets/img/graphics/undraw_Business_analytics_64el.svg">
        </div>
      </template>
    </action-callout-graphic>
    <div class="flex justify-center">
      <ActionCallout class="lg:w-2/5 mb-20" link="https://github.com/Security-Onion-Solutions/securityonion/blob/master/VERIFY_ISO.md">
        <template #info>
          <div class="flex items-center">
            <div class="text-2xl mr-2">
              Latest version:
            </div>
            <div class="text-3xl">
              {{ soVersion }}
            </div>
          </div>
        </template>
        <template #button-text>
          Download
        </template>
      </ActionCallout>
    </div>
    <div id="docs" class="pt-12 px-20 xs:-mx-12 bg-so-blue text-white">
      <ActionCallout class="mb-20 mt-4 xl:mx-48" :alt="true" link="https://docs.securityonion.net/en/2.1/">
        <template #info>
          For Security Onion documentation
        </template>
        <template #button-text>
          Click Here
        </template>
      </ActionCallout>
    </div>
  </div>
</template>

<script>
import FourPanelDetail from '~/components/features/FourPanelDetail'
import ActionCalloutGraphic from '~/components/action_callouts/ActionCalloutGraphic'
import FeatureSelector from '~/components/features/FeatureSelector'

export default {
  scrollToTop: true,
  components: {
    FourPanelDetail,
    ActionCalloutGraphic,
    FeatureSelector
  },
  data: () => ({
    testimonialList: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, mi vitae varius iaculis, justo nisi rutrum sapien, suscipit feugiat turpis nisl a nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, mi vitae varius iaculis, justo nisi rutrum sapien, suscipit feugiat turpis nisl a nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, mi vitae varius iaculis, justo nisi rutrum sapien, suscipit feugiat turpis nisl a nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, mi vitae varius iaculis, justo nisi rutrum sapien, suscipit feugiat turpis nisl a nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, mi vitae varius iaculis, justo nisi rutrum sapien, suscipit feugiat turpis nisl a nisl.'
    ],
    links: [{ name: 'Download', id: 'download-before' }, { name: 'Data Types', id: 'data_types' }, { name: 'Use Cases', id: 'use_cases' }, { name: 'Docs', id: 'docs' }],
    typeArray: [],
    featureArr: [
      {
        image: 'screenshots/hunt.png',
        header: 'Something about Hunt',
        body: 'Details about how you use Hunt to do stuff.'
      },
      {
        image: 'screenshots/pcap.png',
        header: 'Something about PCAP',
        body: 'Details about how to use PCAP to do stuff. Another sentence to show varying body lengths.'
      },
      {
        image: 'screenshots/kibana.png',
        header: 'Something about Kibana',
        body: 'Info about Kibana or a third tool and how to use it.'
      }
    ],
    soVersion: '2.2.0-rc3'
  }),
  async beforeMount () {
    const dataTypes = await this.$content('data_types').fetch()
    this.typeArray = dataTypes.types

    await this.typeArray.sort((type1, type2) => {
      return type1.name.localeCompare(type2.name)
    })
  },
  head () {
    return {
      title: 'Security Onion'
    }
  }
}
</script>

<style scoped>
.graphic {
  height: 20rem;
  min-width: 20rem;
  width: 20rem;
}
</style>
