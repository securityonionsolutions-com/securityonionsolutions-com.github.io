<template>
  <div class="xs:px-12">
    <PageNav page-name="Security Onion" :links="links" />
    <SubHero id="download-before" class="hero-software">
      <template #header>
        Brand Guidelines
      </template>
      <template #body>
        <div class="text-center">
          Word Marks, Logos, and Usage Restrictions
        </div>
      </template>
    </SubHero>
    <ContentSection id="overview" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <two-panel-detail class="mx-3 xs:mx-24">
          <template #section-heading>
            Overview
          </template>
          <template #header-left>
            Word Marks
          </template>
          <template #body-left>
            Both "Security Onion" and "Security Onion Solutions" are registered &reg; trademarks and service marks, respectively, of Security Onion Solutions, LLC. Usage of these word marks is prohibited without written authorization from an officer of Security Onion Solutions, LLC.
          </template>
          <template #header-right>
            Logos
          </template>
          <template #body-right>
            The Security Onion and Security Onion Solutions Logos are trademarks of Security Onion Solutions, LLC and may only be used when written consent is provided by an officer of Security Onion Solutions, LLC. Usage must adhere to the guidelines posted on this page.
          </template>
        </two-panel-detail>
      </div>
    </ContentSection>
    <ContentSection id="guidelines">
      <div class="xs:-mx-12 px-4">
        <section-header class="mb-6">
          Logos
        </section-header>
        <div class="w-2/3 text-left text-base xs:text-lg mx-auto">
          Use of the following logos is bound by the terms described on this page. When authorization is granted, usage must abide by the following guidelines:
          <ol class="list-disc list-outside ml-4 mt-4">
            <li>
              The logo must be clearly visible on all common media displays and printed material.
            </li>
            <li>
              The logo must be separated from all other nearby content or markings with at least 25% of whitespace relative to the height of the logo itself.
            </li>
            <li>
              The logo must be sized such that it is not diminished relative to other logos appearing on the same media.
            </li>
            <li>
              Colors of the logos must not be altered.
            </li>
            <li>
              Logos may only be presented on all white (#FFFFF) or all black backgrounds (#000000) unless a specific exception is granted via written consent.
            </li>
          </ol>
        </div>
        <div class="flex flex-col justify-center w-full">
          <div class="w-1/2 mx-auto mt-12">
            <hr>
            <div class="text-2xl mt-8">
              Security Onion Logo
            </div>
            <div class="p-12 bg-white text-black">
              <img src="/logo/logo-so-light.svg" class="m-8">
              Light (<a href="/logo/logo-so-light.png">.png</a> | <a href="/logo/logo-so-light.svg">.svg</a>)
            </div>
            <div class="p-12 bg-black text-white">
              <img src="/logo/logo-so-dark.svg" class="m-8">
              Dark (<a href="/logo/logo-so-dark.png">.png</a> | <a href="/logo/logo-so-dark.svg">.svg</a>)
            </div>
          </div>

          <div class="w-1/2 mx-auto mt-12">
            <hr>
            <div class="text-2xl mt-8">
              Security Onion Solutions Logo (Abbreviated)
            </div>
            <div class="p-12 bg-white text-black">
              <img src="/logo/logo-sos-abbrev-light.svg" class="m-8">
              Light (<a href="/logo/logo-sos-abbrev-light.png">.png</a> | <a href="/logo/logo-sos-abbrev-light.svg">.svg</a>)
            </div>
            <div class="p-12 bg-black text-white">
              <img src="/logo/logo-sos-abbrev-dark.svg" class="m-8">
              Dark (<a href="/logo/logo-sos-abbrev-dark.png">.png</a> | <a href="/logo/logo-sos-abbrev-dark.svg">.svg</a>)
            </div>
          </div>

          <div class="w-1/2 mx-auto mt-12">
            <hr>
            <div class="text-2xl mt-8">
              Security Onion Solutions Logo (Extended)
            </div>
            <div class="p-12 bg-white text-black">
              <img src="/logo/logo-sos-light.svg" class="m-8">
              Light (<a href="/logo/logo-sos-light.png">.png</a> | <a href="/logo/logo-sos-light.svg">.svg</a>)
            </div>
            <div class="p-12 bg-black text-white">
              <img src="/logo/logo-sos-dark.svg" class="m-8">
              Dark (<a href="/logo/logo-sos-dark.png">.png</a> | <a href="/logo/logo-sos-dark.svg">.svg</a>)
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection id="contact" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <action-callout :alternate="true" class="my-12" @button-click="sos.showContactModal({ text: 'Please contact me with more information about branding authorization.', source: 'branding_contact_us' })">
          <template #info>
            <div class="text-2xl flex justify-center">
              <div>
                Contact us for more information on branding requirements.
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

import SubHero from '~/components/hero/SubHero'
import TwoPanelDetail from '~/components/features/TwoPanelDetail'

export default {
  scrollToTop: true,
  components: {
    SubHero,
    TwoPanelDetail
  },
  data: () => ({
    sos,
    links: [{ name: 'Overview', id: 'overview' }, { name: 'Guidelines', id: 'guidelines' }]
  })
}
</script>

<style scoped>
.hero-software {
  background: right bottom no-repeat url('/img/graphics/squares.jpg');
}
</style>
