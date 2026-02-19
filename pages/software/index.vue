<template>
  <div class="xs:px-12">
    <PageNav page-name="Security Onion" :links="links" />
    <SubHero id="download-before" v-reveal.once class="hero-software reveal-scale">
      <template #header>
        Security Onion 2
      </template>
      <template #body>
        <div class="flex flex-col flex-grow items-center">
          <div class="flex flex-col items-center">
            <div class="text-2xl">
              Latest version:
              <span class="font-light">{{ soVersion }}</span>
            </div>
          </div>
          <br/>
          <div class="flex flex-col items-center lg:flex-row space-y-1 lg:space-x-3 lg:space-y-0 mt-1 xl:mt-2">
            <use-button link="https://github.com/Security-Onion-Solutions/securityonion/blob/2.4/main/DOWNLOAD_AND_VERIFY_ISO.md">
              Download
            </use-button>
            <use-button link="https://securityonion.net/aws/?ref=_ptnr_web_sos">
              Amazon Cloud
            </use-button>
          </div>
          <div class="flex flex-col items-center lg:flex-row space-y-1 lg:space-x-3 lg:space-y-0 mt-1 xl:mt-2">
            <use-button link="https://securityonion.net/azure/?ref=_ptnr_web_sos">
              Azure Cloud
            </use-button>
            <use-button link="https://securityonion.net/google/?ref=_ptnr_web_sos">
              Google Cloud
            </use-button>
          </div>
          <so-button class="mt-4 xl:mt-8" link="https://docs.securityonion.net/">
            Documentation
          </so-button>
        </div>
      </template>
    </SubHero>
    <ContentSection id="overview" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <feature-right v-reveal class="xs:mb-12 reveal-right" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Overview
            </div>
          </template>
          <template #graphic>
            <div class="shadow-xl rounded-md overflow-hidden">
              <Graphic
                :padding="false"
                file-name="install.jpg"
                :size="20"
                :clickable="true"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              Security Onion is a free and open platform built by defenders for defenders. It includes network visibility, host visibility, intrusion detection honeypots, log management, and case management.
            </div>
            <div class="text-center xs:text-left mt-4">
              For network visibility, we offer signature based detection via Suricata, rich protocol metadata and file extraction using your choice of either Zeek or Suricata, full packet capture via Suricata PCAP, and file analysis via Strelka. For host visibility, we offer the Elastic Agent which provides data collection, live queries via osquery, and centralized management using Elastic Fleet. Intrusion detection honeypots based on OpenCanary can be added to your deployment for even more enterprise visibility. All of these logs flow into the Elastic stack and we've built our own user interfaces for alerting, hunting, dashboards, case management, and grid management. 
            </div>
            <div class="text-center xs:text-left mt-4">
              Security Onion has been downloaded over 2 million times and is being used by security teams around the world to monitor and defend their enterprises. Our easy-to-use Setup wizard allows you to build a distributed grid for your enterprise in minutes!
            </div>
          </template>
        </feature-right>
        <feature-left v-reveal class="my-12 reveal-left">
          <template #header>
            <div class="text-center xs:text-left">
              Highly Scalable
            </div>
          </template>
          <template #graphic>
            <Graphic
              class="shadow-xl rounded-md overflow-hidden"
              file-name="grid_list.jpg"
              :padding="false"
              :size="20"
              :clickable="true"
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
              Open Community
            </div>
          </template>
          <template #graphic>
            <div class="shadow-xl rounded-md overflow-hidden">
              <Graphic
                :padding="false"
                file-name="github_sos.jpg"
                :size="20"
                :clickable="true"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              Security Onion and the tools we integrate are all open to the public, written by members of the cyber security community. Source code is available in GitHub for review by those interested in understanding how the system works, behind the scenes.
            </div>
          </template>
        </feature-right>
      </div>
    </ContentSection>
    <ContentSection id="use-cases">
      <div id="use_cases" class="xs:-mx-12">
        <four-panel-detail v-reveal class="mx-3 xs:mx-24 reveal-scale">
          <template #section-heading>
            Use Cases
          </template>
          <template #header-top-left>
            Network Visibility
          </template>
          <template #body-top-left>
            Collect network events from Zeek, Suricata, and other tools for complete coverage of your network. Cast a wide net to catch the bad guys quickly and easily.
          </template>
          <template #header-top-right>
            Host Visibility
          </template>
          <template #body-top-right>
            Security Onion supports Elastic Agent for event collection on your organization's endpoints. Simply install the agent package available in the SOC Downloads page!
          </template>
          <template #header-bottom-left>
            Static Analysis (PCAP and EVTX Import)
          </template>
          <template #body-bottom-left>
            Use Security Onion to import full packet capture files and Windows Event log files for quick static analysis and case studies. Spin up a virtual machine quickly and get started in just a few minutes!
          </template>
          <template #header-bottom-right>
            Security Onion Desktop
          </template>
          <template #body-bottom-right>
            A Linux desktop install option is also available for SOC analysts to use local Linux tools to perform analysis of network and host events. No need to install extra tools; we bundle all the apps you might need.
          </template>
        </four-panel-detail>
      </div>
    </ContentSection>
    <ContentSection id="features" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <section-header v-reveal class="mb-6">
          Feature Highlights
        </section-header>
        <div class="text-center text-lg">For a full list of features see the Security Onion Pro <a href="/pro#comparison" class="my-1 text-white-200 hover:text-gray-300 font-semibold">feature comparison</a> matrix</div>
        <div class="flex flex-col lg:flex-row lg:flex-wrap justify-center content-center md:-mx-2 mt-4">
          <feature-selector :feature-arr="featureArr" />
        </div>
      </div>
    </ContentSection>
    <ContentSection id="data_types">
      <div class="xs:-mx-12 px-4">
        <SectionHeader v-reveal class="mt-6 xs:mb-8">
          Data Types
        </SectionHeader>
        <div class="flex flex-row flex-wrap justify-center mt-4">
          <div v-for="(type, i) in typeArray" :key="i" v-reveal.once :class="['stagger-' + ((i % 8) + 1), 'reveal-scale']" class="w-full md:w-1/3 xl:w-1/4 bg-gray-200 rounded-md m-3 p-2 h-64">
            <VerticalFeature>
              <template #graphic>
                <Icon :name="type.icon" class="mb-2" size="4em" />
              </template>
              <template #title>
                <div class="text-2xl">
                  {{ type.name }}
                </div>
              </template>
              <template #body>
                <div class="flex flex-col items-center text-center text-lg pt-2 w-full">
                  <div class="mb-2 h-20 flex items-center">
                    <div>
                      {{ type.desc }}
                    </div>
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
    <ContentSection id="hardwarehelp" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32 -my-8">
        <action-callout :alternate="true" class="my-12" @button-click="sos.showContactModal({ text: 'Please contact me with more information about Security Onion Solutions\' offerings.', source: 'software_general_contact_us' })">
          <template #info>
            <div class="text-2xl flex justify-center text-center md:text-left">
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
import { sos } from '~/lib/sos.js'

import SubHero from '~/components/hero/SubHero'
import SectionHeader from '~/components/SectionHeader'
import FourPanelDetail from '~/components/features/FourPanelDetail'
import ActionCallout from '~/components/action_callouts/ActionCallout'
import FeatureSelector from '~/components/features/FeatureSelector'
import FeatureLeft from '~/components/features/FeatureLeft'
import FeatureRight from '~/components/features/FeatureRight'
import VerticalFeature from '~/components/features/VerticalFeature'

import types from '~/content/data_types.json';
import features from '~/content/features.json';
import version from '~/content/version.json';

export default {
  scrollToTop: true,
  components: {
    SubHero,
    SectionHeader,
    FourPanelDetail,
    ActionCallout,
    FeatureSelector,
    FeatureLeft,
    FeatureRight,
    VerticalFeature,
  },
  data: () => ({
    sos,
    links: [{ name: 'Overview', id: 'overview' }, { name: 'Use Cases', id: 'use-cases' }, { name: 'Features', id: 'features' }],
    typeArray: types.types,
    featureArr: features.features,
    soVersion: version.version
  }),
}
</script>

<style scoped>
.hero-software {
  background: right bottom no-repeat url('/img/graphics/peelback-half.jpg');
}
</style>
