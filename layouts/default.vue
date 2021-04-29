<template>
  <div tabindex="0" @keydown.esc="handleModalClose()">
    <transition name="modal">
      <LazyFloatingModal v-if="showModal" :index="1" @close="handleModalClose()">
        <div v-if="modalType == 'form'" class="form-wrapper">
          <LazyContactForm :text="contactText" :source="eventSource" @close="handleModalClose()" />
        </div>
        <ImageZoom v-else-if="modalType == 'image'" :name="imageName" :image-type="imageType" />
      </LazyFloatingModal>
    </transition>

    <div class="flex flex-col leading-normal tracking-normal min-h-screen bg-gradient-to-r from-so-blue-dark via-so-blue to-so-blue-dark">
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
    modalType: '',
    showContactForm: false,
    showImageZoom: false,
    imageName: '',
    imageType: '',
    contactText: '',
    eventSource: '',
    showHwModal: false,
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
      if (window.innerWidth >= 640 || window.innerHeight >= 800) {
        this.showModal = true
        this.modalType = 'form'
      } else {
        this.$router.push({
          name: 'contact_us',
          query: {
            event_source: this.eventSource,
            text: Buffer.from(this.contactText).toString('base64')
          }
        })
      }
      this.$gtag('event', 'contact_modal', {
        event_category: 'engagement',
        event_label: `${window.location.pathname}, ${event.source}`
      })
    })

    this.$nuxt.$on('show-image-zoom', (event) => {
      this.imageName = event.imageName
      this.imageType = event.imageType
      if (window.innerWidth >= 640 || window.innerHeight >= 800) {
        this.showModal = true
        this.modalType = 'image'
      } else {
        let fileName
        let folder

        if (event.imageType === 'appliance') {
          fileName = event.imageName.replace('-thumb', '')
          folder = 'appliances'
        } else if (this.imageType === 'fullsize') {
          fileName = event.imageName.replace('-thumb', '')
          folder = 'graphics'
        } else if (this.imageType === 'screenshot') {
          fileName = event.imageName
          folder = 'screenshots'
        } else {
          fileName = event.imageName
          folder = 'graphics'
        }

        window.location.href = require(`../assets/img/${folder}/${fileName}`)
      }
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
    },
    handleModalClose () {
      this.showModal = this.showContactForm = this.showImageZoom = false
    },
    pic () {

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
          rel: 'alt icon',
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
  margin-top: 70px;
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

@media (min-width: 1024px) {
  .content {
    margin-top: 85px;
  }
}
</style>
