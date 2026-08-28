<template>
  <div class="flex justify-center w-full navbar">
    <nav class="mx-auto flex-grow flex items-center justify-between flex-wrap bg-black py-2 lg:pb-2 lg:pt-4 z-50 container">
      <div class="flex items-end flex-shrink-0 text-white xs:mr-6 h-full -ml-1 lg:-ml-2 lg:-mb-3">
        <router-link to="/" class="flex items-end focus:outline-none active:outline-none h-full">
          <img class="nav-icon" src="~assets/img/svg/sos-white.svg">
        </router-link>
      </div>
      <div class="block lg:hidden relative">
        <button class="relative z-10 block bg-none hover:bg-gray-900 border-2 border-gray-900 text-gray-300 focus:text-white hover:text-white py-2 px-2 mr-4 rounded-lg focus:outline-none cursor-pointer" @click="dropdownOpen=!dropdownOpen">
          <svg
            id="Layer_1"
            class="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            height="32px"
            style="enable-background:new 0 0 32 32;"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xml:space="preserve"
          >
            <path
              d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2
            s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2
            S29.104,22,28,22z"
            />
          </svg>
        </button>
        <button v-if="dropdownOpen" tabIndex="-1" class="fixed h-full w-full inset-0 bg-black opacity-25 cursor-default" @click="dropdownOpen = false" />
        <div v-if="dropdownOpen" class="absolute right-0 mt-1 shadow-xl bg-white rounded-lg py-2 w-48" @click="dropdownOpen = !dropdownOpen">
          <nuxt-link
            to="/" id="overview"
            class="dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"
          >
            Overview
          </nuxt-link>
          <nuxt-link
            to="/pro"
            class="dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"
          >
            Pro
          </nuxt-link>
          <nuxt-link
            to="/software"
            class="dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"
          >
            Software
          </nuxt-link>
          <nuxt-link
            to="/hardware"
            class="dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"
          >
            Hardware
          </nuxt-link>
          <nuxt-link
            to="/training"
            class="dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"
          >
            Training
          </nuxt-link>
          <nuxt-link
            to="/certification"
            class="dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"
          >
            Certification
          </nuxt-link>
          <nuxt-link
            to="/support"
            class="dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"
          >
            Support
          </nuxt-link>
          <nuxt-link
            to="/conference"
            class="dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"
          >
            Conference
          </nuxt-link>
          <nuxt-link
            to="https://blog.securityonion.net"
            class="dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"
          >
            Blog
          </nuxt-link>
        </div>
      </div>
      <div class="cursor-default hidden lg:flex flex-col mr-2">
        <div class="flex flex-row items-center justify-end mb-1 mt-4 lg:mt-0 text-white">
          <a
            class="block rounded-lg mr-3 lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue"
            href="https://x.com/securityonion"
            target="_blank"
          >
            <Icon name="fa6-brands:x-twitter" />
          </a>
          <a
            class="block rounded-lg mr-3 lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue"
            href="https://bsky.app/profile/securityonion.bsky.social"
            target="_blank"
          >
            <Icon name="fa6-brands:bluesky" />
          </a>
          <a
            class="block rounded-lg mr-3 lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue"
            href="https://infosec.exchange/@securityonion"
            target="_blank"
          >
            <Icon name="fa6-brands:mastodon" />
          </a>
          <a
            class="block rounded-lg mr-3 lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue"
            href="https://securityonion.net/discuss"
            target="_blank"
          >
            <Icon name="fa6-brands:github" />
          </a>
          <a
            class="block rounded-lg mr-3 lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue"
            href="https://www.linkedin.com/company/security-onion-solutions-llc"
            target="_blank"
          >
            <Icon name="fa6-brands:linkedin" />
          </a>
          <a
            class="block rounded-lg mr-3 lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue"
            href="https://securityonion.net/youtube"
            target="_blank"
          >
            <Icon name="fa6-brands:youtube" />
          </a>
          <div
            class="block rounded-lg lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue"
            @click="sos.showContactModal({ text: '', source: 'header_icon' })"
          >
            <Icon name="fa6-regular:envelope" />
          </div>
        </div>
        <div class="flex flex-row mt-4 lg:mt-0">
          <nuxt-link
            to="/" id="overview"
            class="block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"
          >
            Overview
          </nuxt-link>
          <nuxt-link
            to="/pro"
            class="block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"
          >
            Pro
          </nuxt-link>
          <nuxt-link
            to="/software"
            class="block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"
          >
            Software
          </nuxt-link>
          <nuxt-link
            to="/hardware"
            class="block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"
          >
            Hardware
          </nuxt-link>
          <nuxt-link
            to="/training"
            class="block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"
          >
            Training
          </nuxt-link>
          <nuxt-link
            to="/certification"
            class="block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"
          >
            Certification
          </nuxt-link>
          <nuxt-link
            to="/support"
            class="block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"
          >
            Support
          </nuxt-link>
          <nuxt-link
            to="/conference"
            class="block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"
          >
            Conference
          </nuxt-link>
          <nuxt-link
            to="https://blog.securityonion.net"
            class="block lg:inline-block text-gray-400 hover:text-blue-500 text-lg font-light focus:outline-none focus:text-blue-500"
          >
            Blog
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'

export default {
  data: () => ({
    sos,
    dropdownOpen: false
  }),
  mounted () {
    this.handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') { this.dropdownOpen = false }
    }

    document.addEventListener('keydown', this.handleEscape)
  },
  beforeUnmount () {
    document.removeEventListener('keydown', this.handleEscape)
  },
  methods: {
  }
}
</script>

<style scoped>
.navbar {
  height: 70px;
}
.nuxt-link-active:not(.dropdown) {
  color: white;
}
.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.025); }
.grow:active { transform: scale(.995); }

.nav-icon {
  height: auto;
  width: 6rem;
}
@media (min-width: 1024px) {
  .navbar {
    height: 85px;
  }
  .nav-icon {
    width: 8rem;
  }
}
</style>
