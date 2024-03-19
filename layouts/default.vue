<template>
  <div tabindex="0" @keydown.esc="handleModalClose()">
    <Head>
      <title>Security Onion Solutions</title>
      <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
      <meta name="description" content="Security Onion Solutions, LLC" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/svg+xml" :href="`/favicon/onion${colorSchemeString}.svg`" />
      <link rel="alt icon" type="image/png" :href="`/favicon/onion${colorSchemeString}.png`" />
    </Head>
    <transition name="modal">
      <LazyFloatingModal v-if="shouldShowModal()" :index="1" @close="handleModalClose()">
        <div v-if="isFormModal()" class="form-wrapper">
          <LazyContactForm :text="sos.contactText" :source="sos.eventSource" @close="handleModalClose()" />
        </div>
        <ImageZoom v-else-if="isImageModal()" :name="sos.imageName" :image-type="sos.imageType" />
        <CertDomainDetails v-else-if="isDomainDetailsModal()" :detail-text="sos.domainDetailText" :domain-name="sos.domainName" :test-percent="sos.domainTestPercent" />
      </LazyFloatingModal>
    </transition>

    <div class="flex flex-col leading-normal tracking-normal min-h-screen bg-gradient-to-r from-so-blue-dark via-so-blue to-so-blue-dark">
      <Navbar class="fixed z-50" />
      <div class="fixed nav-bleed w-full bg-black z-0" />
      <div class="flex-grow content container mx-auto flex flex-col bg-white shadow-xl z-10" >
        <slot />
      </div>
      <div class="relative">
        <Footer class="z-10 relative" />
        <div class="absolute footer-bleed w-full bg-gray-900 z-0" />
      </div>
    </div>
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'

export default {
  data: () => ({
    sos,
    colorSchemeString: ''
  }),
  // watch: {
  //   $route: (val) => { this.setFavicon() }
  // },
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
    this.saveUtmCookies();
  },
  methods: {
    setFavicon () {
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? this.colorSchemeString = '-dark' : this.colorSchemeString = ''
    },
    handleModalClose () {
      sos.showModal = false;
    },
    shouldShowModal () {
      return sos.showModal;
    },
    isFormModal () {
      return sos.modalType == 'form';
    },
    isImageModal () {
      return sos.modalType == 'image';
    },
    isDomainDetailsModal () {
      return sos.modalType == 'domainDetails';
    },
    saveUtmCookies() {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      if (params.has("utm_source")) {
        useCookie("ads_search").value = search;
      }
    }
  }
}
</script>

<style>
body, html {
  background-color: black;
  font-family: "Inter", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif !important;
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
