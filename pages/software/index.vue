<template>
  <div class="xs:px-12">
    <PageNav page-name="Security Onion" :links="links" />
    <SubHero id="download-before" class="hero-software">
      <template #header>
        Security Onion 2
      </template>
      <template #body>
        <div class="flex justify-center">
          <div class="text-2xl">
            Latest version:
            <span class="font-light">{{ soVersion }}</span>
          </div>
        </div>
        <div class="flex justify-center">
          <ActionCallout class="mt-1 xl:mt-4" link="https://github.com/Security-Onion-Solutions/securityonion/blob/master/VERIFY_ISO.md">
            <template #button-text>
              Download Now
            </template>
          </ActionCallout>
        </div>
        <div class="flex justify-center">
          <ActionCallout class="xl:mt-4" link="https://docs.securityonion.net/">
            <template #button-text>
              Documentation
            </template>
          </ActionCallout>
        </div>
      </template>
    </SubHero>
    <ContentSection id="overview" :alt="true">
      <div class="bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <feature-right class="xs:mb-12" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Overview
            </div>
          </template>
          <template #graphic>
            <div class="shadow-xl rounded-md overflow-hidden">
              <CircleGraphic
                :padding="false"
                file-name="install.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              Security Onion is a free and open source Linux distribution for threat hunting, enterprise security monitoring, and log management. The easy-to-use Setup wizard allows you to build an army of distributed sensors for your enterprise in minutes!
            </div>
            <div class="text-center xs:text-left mt-4">
              Security Onion includes Elasticsearch, Logstash, Kibana, Suricata, Zeek (formerly known as Bro), Wazuh, Stenographer, TheHive, Cortex, CyberChef, NetworkMiner, and many other security tools.
            </div>
          </template>
        </feature-right>
        <feature-left class="my-12">
          <template #header>
            <div class="text-center xs:text-left">
              Highly Scalable
            </div>
          </template>
          <template #graphic>
            <CircleGraphic
              class="shadow-xl rounded-md overflow-hidden"
              file-name="sensor_list.jpg"
              :padding="false"
              :size="20"
            />
          </template>
          <template #body>
            <div class="text-left">
              From a single network appliance, to a grid of a thousand nodes, Security Onion scales to fit your specific needs.
            </div>
          </template>
        </feature-left>
        <feature-right class="xs:mb-12" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Open Source Community
            </div>
          </template>
          <template #graphic>
            <div class="shadow-xl rounded-md overflow-hidden">
              <CircleGraphic
                :padding="false"
                file-name="github_sos.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              Security Onion and the tools we integrate are all open source, written by members of the cyber security community.
            </div>
          </template>
        </feature-right>
      </div>
    </ContentSection>
    <ContentSection id="use-cases">
      <div id="use_cases" class="xs:-mx-12">
        <four-panel-detail class="mx-3 xs:mx-24">
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
      </div>
    </ContentSection>
    <ContentSection id="features" :alt="true">
      <div class="bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <section-header class="mb-6">
          Included Features
        </section-header>
        <div class="flex flex-col lg:flex-row lg:flex-wrap justify-center content-center md:-mx-2 mt-4">
          <feature-selector :feature-arr="featureArr" />
        </div>
      </div>
    </ContentSection>
    <ContentSection id="data_types">
      <div class="xs:-mx-12 px-4">
        <SectionHeader class="mt-6 xs:mb-8">
          Data Types
        </SectionHeader>
        <div class="flex flex-row flex-wrap justify-center mt-4">
          <div v-for="(type, i) in typeArray" :key="i" class="w-full md:w-1/3 xl:w-1/4 bg-gray-200 rounded-md m-2 p-2 h-64">
            <VerticalFeature>
              <template #graphic>
                <fa :icon="type.icon" class="mb-2" mask="circle" transform="shrink-8" size="4x" />
              </template>
              <template #title>
                <div class="text-2xl">
                  {{ type.name }}
                </div>
              </template>
              <template #body>
                <div class="flex flex-col items-center text-center text-lg pt-2">
                  <div class="mb-2 h-20">
                    {{ type.desc }}
                  </div>
                  <div class="text-gray-600 font-light text-sm">
                    {{ type.tools }}
                  </div>
                </div>
              </template>
            </VerticalFeature>
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection id="hardwarehelp" :alt="true">
      <div class="bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <action-callout :alt="true" class="my-12" @button-click="$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about Security Onion Solutions\' offerings.', source: 'software_general_contact_us' })">
          <template #info>
            <div class="text-2xl flex justify-center">
              <div>
                Let Security Onion Solutions take care of the hardware and setup, so you can focus on threat hunting.
              </div>
            </div>
          </template>
          <template #button-text>
            <div class="text-lg my-1">
              Find Out How
            </div>
          </template>
        </action-callout>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import FourPanelDetail from '~/components/features/FourPanelDetail'
import ActionCallout from '~/components/action_callouts/ActionCallout'
import FeatureSelector from '~/components/features/FeatureSelector'

export default {
  scrollToTop: true,
  components: {
    FourPanelDetail,
    ActionCallout,
    FeatureSelector
  },
  data: () => ({
    links: [{ name: 'Overview', id: 'overview' }, { name: 'Use Cases', id: 'use-cases' }, { name: 'Features', id: 'features' }],
    typeArray: require('@/content/data_types.json').types,
    featureArr: require('@/content/features.json').features,
    soVersion: require('@/content/version.json').version
  })
}
</script>

<style scoped>
.hero-software {
  background: right bottom no-repeat url(~assets/img/graphics/peelback-half.jpg);
}
</style>
