<template>
  <div class="xs:px-12">
    <PageNav page-name="Security Onion" :links="links" />
    <SubHero id="download-before" class="mb-6 xs:-mx-12">
      <template #graphic>
        <img src="~assets/img/screenshots/hunt-slash-skinny.jpg" class="mb-2 xs:mb-4">
      </template>
      <template #header>
        Peel Back The Layers of Your Enterprise
      </template>
      <template #body>
        Security Onion is a free and open source Linux distribution for threat hunting, enterprise security monitoring, and log management.
      </template>
    </SubHero>
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
    <div class="xs:px-6 lg:px-10 xl:px-24 xs:-mx-12 bg-so-blue text-white">
      <two-panel-detail class="my-20 mx-10">
        <template #section-heading>
          About Security Onion
        </template>
        <template #body-left>
          Security Onion is a free and open source Linux distribution for threat hunting, enterprise security monitoring, and log management. The easy-to-use Setup wizard allows you to build an army of distributed sensors for your enterprise in minutes!
        </template>
        <template #body-right>
          Security Onion includes Elasticsearch, Logstash, Kibana, Suricata, Zeek (formerly known as Bro), Wazuh, Stenographer, TheHive, Cortex, CyberChef, NetworkMiner, and many other security tools.
        </template>
      </two-panel-detail>
      <feature-left class="mt-20 mb-16 xs:px-12 w-full">
        <template #graphic>
          <div class="rounded-sm overflow-hidden shadow-xl">
            <img src="~assets/img/screenshots/sensor_list.jpg" style="width: 30rem; height: auto;">
          </div>
          <!-- <CircleGraphic
            file-name="undraw_data_extraction_ih3n.svg"
            :size="20"
          /> -->
        </template>
        <template #header>
          Scalable and flexible <br> to fit YOUR environment
        </template>
        <template #body>
          From a single network appliance to a grid of 1000, Security Onion scales to fit your specific needs.
        </template>
      </feature-left>
      <feature-right class="mt-10 mb-24 xs:px-12 w-full">
        <template #graphic>
          <div class="rounded-sm overflow-hidden shadow-xl">
            <img src="~assets/img/screenshots/github_sos.jpg" style="width: 30rem; height: auto;">
          </div>
          <!-- <CircleGraphic
            file-name="undraw_investment_xv9d.svg"
            :size="20"
          /> -->
        </template>
        <template #header>
          BY the community, <br> FOR the community
        </template>
        <template #body>
          Security Onion and the tools we integrate are all open source, written by members of the cyber security community.
        </template>
      </feature-right>
    </div>
    <feature-selector class="mt-16 lg:mt-32 lg:-mx-6" :feature-arr="featureArr" />
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
    <action-callout-graphic class="mb-32 mt-12" @button-click="$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about Security Onion Solutions\' offerings.', source: 'software_general_contact_us' })">
      <template #callout>
        <div class="text-2xl xs:text-4xl flex justify-center mb-4">
          <div class="mx-2 xs:mx-0 xs:w-4/6">
            Want us to take care of the hardware and setup so you can focus on threat hunting?
          </div>
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
          NIDS
        </template>
        <template #body-top-left>
          Collect network events from Zeek, Suricata, and other tools for complete coverage of your network. Cast a wide net to catch the bad guys quickly and easily.
        </template>
        <template #header-top-right>
          HIDS
        </template>
        <template #body-top-right>
          Security Onion supports several host-based event collection agents including Wazuh, Beats, and osquery. Just point them to your installation and it's off to the races.
        </template>
        <template #header-bottom-left>
          Static Analysis (PCAP Import)
        </template>
        <template #body-bottom-left>
          Use Security Onion to import PCAP files for quick static analysis and case studies. Spin up a virtual machine quickly and get started in just a few minutes.
        </template>
        <template #header-bottom-right>
          SOC Workstation
        </template>
        <template #body-bottom-right>
          A workstation install option is also available for SOC analysts to use local Linux tools to perform analysis of network and host events. No need to install extra tools, we bundle all the apps you might need.
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
      <ActionCallout class="mb-20 mt-4 xl:mx-48" :alt="true" link="https://docs.securityonion.net/">
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
    typeArray: require('@/content/data_types.json').types,
    featureArr: [
      {
        image: 'screenshots/hunt.jpg',
        header: 'Hunt All The Things',
        body: 'Our new hunting tool is purpose built to let you investigate quickly and easily.'
      },
      {
        image: 'screenshots/pcap.jpg',
        header: 'Full PCAP analysis',
        body: 'Pull packet captures from network events and analyze them within SOC, no need for an external tool.'
      },
      {
        image: 'screenshots/kibana.jpg',
        header: 'Kibana visualizations',
        body: 'See the big picture with our custom Kibana dashboards built to give you the most important information at a glance.'
      }
    ],
    soVersion: '2.2.0-rc3'
  }),
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
