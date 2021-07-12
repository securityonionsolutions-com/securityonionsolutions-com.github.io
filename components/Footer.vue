<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <footer class="w-full flex flex-col items-center justify-center flex-wrap pb-8">
    <div class="flex flex-row flex-wrap w-full items-center justify-center text-center mt-6 text-gray-400 text-lg">
      <a href="/">Home</a>
      <span class="text-gray-700 mx-2">|</span>
      <a href="https://github.com/Security-Onion-Solutions/securityonion/blob/master/VERIFY_ISO.md">Download</a>
      <span class="text-gray-700 mx-2">|</span>
      <a href="https://docs.securityonion.net/">Documentation</a>
      <span class="text-gray-700 mx-2">|</span>
      <a href="https://blog.securityonion.net/">Blog</a>
      <span class="text-gray-700 mx-2">|</span>
      <nuxt-link to="/education">Education</nuxt-link>
      <span class="text-gray-700 mx-2">|</span>
      <nuxt-link to="/terms">Terms</nuxt-link>
      <span class="text-gray-700 mx-2">|</span>
      <nuxt-link to="/privacy">Privacy</nuxt-link>
    </div>
    <div class="flex flex-row">
      <div class="text-center content-center justify-center">
        <div class="flex flex-row justify-center mt-2">
          <a
            class="block rounded-lg mr-2 lg:inline-block text-4xl focus:outline-none cursor-pointer"
            href="https://twitter.com/securityonion"
            target="_blank"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa class="p-2" style="color: #1DA1F2" :icon="['fab', 'twitter']" />
            </fa-layers>
          </a>
          <a
            class="block rounded-lg mr-2 lg:inline-block text-4xl focus:outline-none cursor-pointer"
            href="https://securityonion.net/discuss"
            target="_blank"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa class="p-2" style="color: black" :icon="['fab', 'github']" />
            </fa-layers>
          </a>
          <a
            class="block rounded-lg mr-2 lg:inline-block text-4xl focus:outline-none cursor-pointer"
            href="https://www.linkedin.com/company/security-onion-solutions-llc"
            target="_blank"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa class="p-2" style="color: #0A66C2" :icon="['fab', 'linkedin-in']" />
            </fa-layers>
          </a>
          <div
            class="block rounded-lg lg:inline-block text-4xl focus:outline-none cursor-pointer"
            @click="$nuxt.$emit('show-contact-modal', {text: '', source: 'footer_icon'})"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa icon="envelope" class="p-2 text-red-700" />
            </fa-layers>
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
