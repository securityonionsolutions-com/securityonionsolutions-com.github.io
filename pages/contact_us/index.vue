<template>
  <div class="flex items-center pt-4">
    <ContactForm :text="contactText" :source="eventSource" @close="showModal = false" />
  </div>
</template>

<script>
export default {
  // data: () => ({
  //   eventSource: this.$route.query.event_source
  // }),
  computed: {
    eventSource () {
      return this.$route.query.event_source
    },
    contactText () {
      return String(window.atob(this.$route.query.text))
    }
  }
}
</script>

<style>

</style>
