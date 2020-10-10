<template>
  <footer class="w-full flex flex-col items-center justify-center flex-wrap pb-8">
    <div class="flex flex-row w-full justify-center text-center mt-8 text-gray-400 text-lg">
      <a href="/">Home</a>
      <span class="text-gray-700 mx-2">|</span>
      <a href="https://github.com/Security-Onion-Solutions/securityonion/blob/master/VERIFY_ISO.md">Download</a>
      <span class="text-gray-700 mx-2">|</span>
      <a href="https://docs.securityonion.net/">Documentation</a>
      <span class="text-gray-700 mx-2">|</span>
      <a href="https://blog.securityonion.net/">Blog</a>
    </div>
    <div class="flex flex-row">
      <div class="text-center content-center justify-center mt-8 lg:mt-6">
        <div class="flex flex-row justify-center mb-1 mt-4 lg:mt-0">
          <a
            class="block rounded-lg mr-2 xs:mr-4 lg:inline-block text-5xl focus:outline-none cursor-pointer"
            href="https://twitter.com/securityonion"
            target="_blank"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa style="color: #1DA1F2; padding: 0.6rem" :icon="['fab', 'twitter']" />
            </fa-layers>
          </a>
          <a
            class="block rounded-lg mr-2 xs:mr-4 lg:inline-block text-5xl focus:outline-none cursor-pointer"
            href="https://securityonion.net/discuss"
            target="_blank"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa style="color: black; padding: 0.6rem" :icon="['fab', 'github']" />
            </fa-layers>
          </a>
          <a
            class="block rounded-lg mr-2 xs:mr-4 lg:inline-block text-5xl focus:outline-none cursor-pointer"
            href="https://www.linkedin.com/company/security-onion-solutions-llc"
            target="_blank"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa style="color: #0A66C2; padding: 0.6rem" :icon="['fab', 'linkedin-in']" />
            </fa-layers>
          </a>
          <div
            class="block rounded-lg lg:inline-block text-5xl focus:outline-none cursor-pointer"
            @click="$nuxt.$emit('show-contact-modal', {text: '', source: 'footer_icon'})"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa style="padding: 0.6rem" icon="envelope" class="text-red-700" />
            </fa-layers>
          </div>
        </div>
        <div class="block mt-6 mb-1 lg:inline-block lg:mt-4 text-l text-white">
          <p>
            &copy; Security Onion Solutions, LLC
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
