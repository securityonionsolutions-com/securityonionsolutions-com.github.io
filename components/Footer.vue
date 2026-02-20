<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <footer class="w-full flex flex-col items-center justify-center flex-wrap pb-8">
    <div class="flex flex-row flex-wrap w-full items-center justify-center text-center mt-6 text-gray-400 text-sm lg:text-lg">
      <a href="/">Home</a>
      <span class="text-gray-700 mx-2">|</span>
      <a href="https://github.com/Security-Onion-Solutions/securityonion/blob/2.4/main/DOWNLOAD_AND_VERIFY_ISO.md">Download</a>
      <span class="text-gray-700 mx-2">|</span>
      <a href="https://docs.securityonion.net/">Documentation</a>
      <span class="text-gray-700 mx-2">|</span>
      <a href="https://blog.securityonion.net/">Blog</a>
      <span class="text-gray-700 mx-2">|</span>
      <nuxt-link to="/education">Higher Education</nuxt-link>
      <span class="text-gray-700 mx-2">|</span>
      <nuxt-link to="/license">License</nuxt-link>
      <span class="text-gray-700 mx-2">|</span>
      <nuxt-link to="/privacy">Privacy</nuxt-link>
      <span class="text-gray-700 mx-2">|</span>
      <nuxt-link to="/brand">Brand</nuxt-link>
      <span class="text-gray-700 mx-2">|</span>
      <nuxt-link to="/status">Status</nuxt-link>
    </div>
    <div class="flex flex-row">
      <div class="text-center content-center justify-center">
        <div class="flex flex-row justify-center mt-2">
          <a
            rel="me"
            class="block rounded-lg mr-2 lg:inline-block text-2xl lg:text-4xl focus:outline-none cursor-pointer"
            href="https://x.com/securityonion"
            target="_blank"
          >
            <Icon name="fa6-brands:x-twitter" class="p-2 text-white" />
          </a>
          <a
            rel="me"
            class="block rounded-lg mr-2 lg:inline-block text-2xl lg:text-4xl focus:outline-none cursor-pointer"
            href="https://bsky.app/profile/securityonion.bsky.social"
            target="_blank"
          >
            <Icon name="fa6-brands:bluesky" class="p-2 text-white" />
          </a>
          <a
            rel="me"
            class="block rounded-lg mr-2 lg:inline-block text-2xl lg:text-4xl focus:outline-none cursor-pointer"
            href="https://infosec.exchange/@securityonion"
            target="_blank"
          >
            <Icon name="fa6-brands:mastodon" class="p-2 text-white" />
          </a>
          <a
            class="block rounded-lg mr-2 lg:inline-block text-2xl lg:text-4xl focus:outline-none cursor-pointer"
            href="https://securityonion.net/discuss"
            target="_blank"
          >
            <Icon name="fa6-brands:github" class="p-2 text-white" />
          </a>
          <a
            rel="me"
            class="block rounded-lg mr-2 lg:inline-block text-2xl lg:text-4xl focus:outline-none cursor-pointer"
            href="https://www.linkedin.com/company/security-onion-solutions-llc"
            target="_blank"
          >
            <Icon name="fa6-brands:linkedin" class="p-2 text-white" />
          </a>
          <a
            class="block rounded-lg mr-2 lg:inline-block text-2xl lg:text-4xl focus:outline-none cursor-pointer"
            href="https://securityonion.net/youtube"
            target="_blank"
          >
            <Icon name="fa6-brands:youtube" class="p-2 text-white" />
          </a>
          <div
            class="block rounded-lg lg:inline-block text-2xl lg:text-4xl focus:outline-none cursor-pointer"
            @click="sos.showContactModal({text: '', source: 'footer_icon'})"
          >
            <Icon name="fa6-regular:envelope" class="p-2 text-white" />
          </div>
        </div>
        <div class="block mt-2 lg:inline-block text-l text-white">
          <p>
            &copy; Security Onion Solutions, LLC
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { sos } from '~/lib/sos.js'

export default {
  data: () => ({
    sos,
  })
}
</script>