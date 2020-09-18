<template>
  <footer class="w-screen flex flex-col items-center justify-center flex-wrap bg-gray-900 pb-8">
    <div class="flex flex-col">
      <img src="~assets/img/graphics/undraw_camping_noc8.svg" class="h-12 xs:h-48 mt-8 -mb-2">
      <div class="text-center content-center justify-center mt-4 lg:mt-6">
        <div class="block mt-6 mb-1 lg:inline-block lg:mt-4 text-l text-white">
          <p>
            &copy; Security Onion Solutions, LLC
          </p>
        </div>
        <div class="hidden xs:flex flex-row justify-center mb-1 mt-4 lg:mt-0">
          <a
            class="block rounded-lg mr-4 lg:inline-block text-5xl focus:outline-none cursor-pointer"
            href="https://twitter.com/securityonion"
            target="_blank"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa style="color: #1DA1F2; padding: 0.6rem" :icon="['fab', 'twitter']" />
            </fa-layers>
          </a>
          <a
            class="block rounded-lg mr-4 lg:inline-block text-5xl focus:outline-none cursor-pointer"
            href="https://www.reddit.com/r/securityonion"
            target="_blank"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa style="color: #FF4500; padding: 0.475rem" :icon="['fab', 'reddit']" />
            </fa-layers>
          </a>
          <a
            class="block rounded-lg mr-4 lg:inline-block text-5xl focus:outline-none cursor-pointer"
            href="https://github.com/Security-Onion-Solutions/securityonion/discussions"
            target="_blank"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa style="color: black; padding: 0.6rem" :icon="['fab', 'github']" />
            </fa-layers>
          </a>
          <a
            class="block rounded-lg mr-4 lg:inline-block text-5xl focus:outline-none cursor-pointer"
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
            @click="$nuxt.$emit('show-contact-modal')"
          >
            <fa-layers>
              <fa icon="circle" class="text-white" />
              <fa style="padding: 0.6rem" icon="envelope" class="text-red-700" />
            </fa-layers>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
