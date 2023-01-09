<template>
  <div class="xs:px-12">
    <PageNav page-name="Security Onion" :links="links" />
    <SubHero id="download-before" class="hero-software">
      <template #header>
        Privacy Policy
      </template>
      <template #body>
        <div class="text-center">
          Updated on 07/14/2021
        </div>
      </template>
    </SubHero>
    <ContentSection id="overview" :alternate="true">
      <div class="text-xl px-6 xs:px-12 lg:px-32">
        <div class="text-3xl mt-8 mb-3">
          Overview
        </div>
        Every time you use our products or services some information about you may be collected. Please review this Privacy Policy in its entirety.
        <div class="text-3xl mt-8 mb-3">
          Collected Information
        </div>
        When using our products or services, some non-personally identifiable information may be collected. Examples of this information include the internet address from which you are connecting and the type and version of the operating system and web browser you are using.
        <p class="mt-4">
          When using our products or services we may also collect personally identifiable information. Examples of this information include your name, username, and email address.
        </p>
        <p class="mt-4">
          When registering for our products or services via a third-party, such as an online marketplace, the third-party provider may choose to share personally identifiable information with us. Examples of this information include your name, email address, physical mailing address, etc.
        </p>
        <p class="mt-4">
          Both the non-personally identifiable and personally identifiable information are together referred to as 'collected information' in the remainder of this privacy policy.
        </p>
        <div class="text-3xl mt-8 mb-3">
          Usage
        </div>
        We use the collected information to improve our products and websites and to help us provide a better user experience. This information, when combined with the information of our other users, in the aggregate, will allow us to analyze product and service usage patterns.
        <p class="mt-4">
          We may use the collected information to contact you. This could occur for many reasons, such as when we respond to your product or website inquiry. This could also occur when we need to notify you about product changes, system outages, or security-related events that we believe may be of interest to you.
        </p>
        <div class="text-3xl mt-8 mb-3">
          Disclosure
        </div>
        We may disclose this collected information in response to legal processes, for example, when directed by a court order or subpeona. This information may also be disclosed to law enforcement officials when requested, or when we feel doing so would assist in the prevention of illegal activities, physical harm to people or animals, or violations to our product licenses or terms of use.
        <p class="mt-4">
          We may transfer this collected information if one or more of our business units is acquired by, sold to, or merged with another company. However, that company must also protect this collected information in a manner that is consistent with this Privacy Policy.
        </p>
        <p class="mt-4">
          We will not transfer or disclose your personally identifiable information to other companies for their marketing or other business ventures, except as when noted otherwise in this Privacy Policy.
        </p>
        <p class="mt-4">
          We take appropriate measures at preventing unwanted disclosure of this collected information.
        </p>
        <div class="text-3xl mt-8 mb-3">
          Cookies
        </div>
        Our products and services use "cookies" to store collected information onto your computer. This collected information may contain both non-personally identifiable information and personally identifiable information. For example, this information could include your email address, preferences, and other information that our products and services need to provide an improved user experience.
        <p class="mt-4">
          You can configure your browser to accept all cookies, reject all cookies, or notify you when a cookie is set. This site provides instructions for adjusting cookie preferences for common browsers:
        </p>
        <p class="mt-4">
          <a href="https://www.aboutcookies.org/">How to control cookies</a>
        </p>
        <p class="mt-4">
          If your browser is not listed on the site above, check your browser's "Help" menu to learn how to change your cookie preferences.
        </p>
        <div class="text-3xl mt-8 mb-3">
          Third-Party Sites
        </div>
        Our products or services contain links to third-party services. For example, third-party links can show up in your web browser and appear to be part of our website, however, they are not ours and the content provided by those links do not originate from our servers. When you transition to third-party websites, this privacy policy no longer applies.
        <div class="text-3xl mt-8 mb-3">
          Changes to this Privacy Policy
        </div>
        We may update our privacy policy from time to time. We will post the updated version in this section of the website.
        <div class="text-3xl mt-8 mb-3">
          Contact Us
        </div>
        If you have any questions about this policy, the practices of this site, or your dealings with this website, please <a style="cursor: pointer" @click="sos.showContactModal({text: 'I have a question about the privacy policy.', source: 'footer_icon'})">contact us</a>.
      </div>
    </ContentSection>
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'

import SubHero from '~/components/hero/SubHero'

export default {
  scrollToTop: true,
  components: {
    SubHero,
  },
  data: () => ({
    sos,
    links: []
  })
}
</script>

<style scoped>
.hero-software {
  background: right bottom no-repeat url('/img/graphics/chevrons.jpg');
}
a {
  text-decoration: underline;
}
</style>
