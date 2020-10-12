<template>
  <div>
    <transition name="modal">
      <FloatingModal v-if="showModal" :index="1" @close="showModal = false">
        <div class="form-wrapper">
          <ContactForm :text="contactText" :source="eventSource" @close="showModal = false" />
        </div>
      </FloatingModal>
    </transition>

    <transition name="modal">
      <FloatingModal v-if="showHwModal" :index="0" @close="showHwModal = false">
        <div class="appliance-wrapper">
          <ApplianceDetails :appliance="modalAppliance" />
        </div>
      </FloatingModal>
    </transition>

    <div class="flex flex-col leading-normal tracking-normal min-h-screen bg-gradient-to-r from-blue-800 via-white to-blue-800">
      <Navbar class="fixed z-50" />
      <div class="fixed nav-bleed w-full bg-black z-0" />
      <Nuxt class="flex-grow content container mx-auto flex flex-col bg-white shadow-xl z-10" />
      <div class="relative">
        <Footer class="z-10 relative" />
        <div class="absolute footer-bleed w-full bg-gray-900 z-0" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showModal: false,
    contactText: '',
    eventSource: '',
    showHwModal: false,
    modalAppliance: {},
    version: '1.0.0',
    colorSchemeString: ''
  }),
  // watch: {
  //   $route: (val) => { this.setFavicon() }
  // },
  beforeMount () {
    this.$nuxt.$on('show-contact-modal', (event) => {
      this.contactText = event.text
      this.eventSource = event.source
      this.showModal = true
      this.$gtag('event', 'contact_modal', {
        event_category: 'engagement',
        event_label: `${window.location.pathname}, ${event.source}`
      })
    })
    this.$nuxt.$on('show-hw-modal', (appliance) => {
      this.showHwModal = true
      this.modalAppliance = appliance
    })
  },
  mounted () {
    this.colorSchemeString = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? '-dark'
      : ''

    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    try {
      darkMediaQuery.addEventListener('change', () => this.setFavicon())
    } catch (e) {
      try {
        darkMediaQuery.addListener(() => this.setFavicon())
      } catch (e) {}
    }
  },
  methods: {
    setFavicon () {
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? this.colorSchemeString = '-dark' : this.colorSchemeString = ''
    }
  },
  head () {
    return {
      link: [
        {
          rel: 'mask-icon',
          href: '/favicon/onion.svg'
        },
        {
          rel: 'alternate icon',
          class: 'so-favicon',
          type: 'image/png',
          href: `/favicon/onion${this.colorSchemeString}.png`
        },
        {
          rel: 'icon',
          class: 'so-favicon',
          type: 'image/svg+xml',
          href: `/favicon/onion${this.colorSchemeString}.svg`
        }
      ],
      meta: [
        {
          'http-equiv': 'Content-type',
          content: 'text/html; charset=UTF-8'
        }
      ]
    }
  }
}
</script>

<style>
html {
  background-color: black;
}
.content {
  margin-top: 85px;
}
.nav-bleed {
  height: 150px;
}
.footer-bleed {
  bottom: 0%;
  right: 0%;
  height: 250px;
}
.modal-enter-active, .modal-leave-active {
  transition: opacity .15s ease;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}
.appliance-wrapper {
  width: 40rem;
}
</style>
