<template>
  <div class="xs:px-12">
    <PageNav page-name="Security Onion" :links="links" />
    <SubHero id="download-before" class="hero-software">
      <template #header>
        Privacy Policy
      </template>
      <template #body>
        <div class="text-center">
          Updated on 07/12/2021
        </div>
      </template>
    </SubHero>
    <ContentSection id="overview" :alternate="true">
      <div class="bg-so-blue text-xl text-white xs:-mx-12 px-6 xs:px-12 lg:px-32">
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
        <p class="mt-4">
        When registering for our products or services via a third-party, such as an online marketplace, the third-party provider may choose to share personally identifiable information with us. Examples of this information include your name, email address, physical mailing address, etc.
        <p class="mt-4">
        Both the non-personally identifiable and personally identifiable information are together referred to as 'collected information' in the remainder of this privacy policy.
        <div class="text-3xl mt-8 mb-3">
        How We Use This Collected Information
        </div>
        We may use the collected information to improve our products and websites and to help us provide a better user experience. This information, when combined with the information of our other users, in the aggregate, will allow us to analyze product and service usage patterns.
        <p class="mt-4">
        We may use the collected information to contact you. This could occur for many reasons, such as when we respond to your product or website inquiry. This could also occur when we need to notify you about product changes, system outages, or security-related events that we believe may be of interest to you.
        <div class="text-3xl mt-8 mb-3">
        Disclosure
        </div>
        We may disclose this collected information in response to legal processes, for example, when directed by a court order or subpeona. This information may also be disclosed to law enforcement officials when requested, or when we feel doing so would assist in the prevention of illegal activities, physical harm to people or animals, or violations to our product licenses or terms of use.
        <p class="mt-4">
        We may transfer this collected information if one or more of our business units is acquired by, sold to, or merged with another company. However, that company must also protect this collected information in a manner that is consistent with this Privacy Policy.
        <p class="mt-4">
        We will not transfer or disclose your personally-identifiable to other companies for their marketing or other business ventures, except as when noted otherwise in this Privacy Policy.
        <p class="mt-4">
        While we will take appropriate measures at preventing unwanted disclosure of this collected information, we cannot assure you that this collected information will never be disclosed in such a way that this Privacy Policy is violated.
        <div class="text-3xl mt-8 mb-3">
        Cookies
        </div>
        Our products or services may use "cookies" to store collected information onto your computer. This collected information may contain both non-personally identifiable information and personally identifiable information. For example, this information could include your email address, preferences, and other information that our products and services need to provide an improved user experience.
        <p class="mt-4">
        Popular web browsers, such as Chrome, Edge, Safar, and Firefox provide a method for removing cookies from your computer.
        <div class="text-3xl mt-8 mb-3">
        Third-Party Sites
        </div>
        Our products or services may contain links to third-party services. For example, third-party links may show up in your web browser and appear to be part of our website, however, they are not ours and the content provided by those links do not originate from our servers. These third-party services may collect information about you, may store cookies on your computer, or may use other methods to collect and/or store information about you. These third-party services are not covered by our Privacy Policy.
        <div class="text-3xl mt-8 mb-3">
        Changes to this Privacy Policy
        </div>
        We reserve the right to modify this Privacy Policy at any time.
      </div>
    </ContentSection>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  components: {
  },
  data: () => ({
    links: []
  })
}
</script>

<style scoped>
.hero-software {
  background: right bottom no-repeat url(~assets/img/graphics/terms.jpg);
}
</style>
