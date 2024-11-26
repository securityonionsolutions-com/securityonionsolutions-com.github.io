<template>
  <div class="flex items-center pt-4">
    <client-only>
      <ContactForm mode="feedback" :source="$route.query.event_source" @close="showModal = false" />
    </client-only>
  </div>
</template>
