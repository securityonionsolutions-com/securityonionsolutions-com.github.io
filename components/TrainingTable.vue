<template>
  <div class="mb-12">
    <ul>
      <li v-for="(item, index) in scheduleList" :key="index" class="mb-6 hover:shadow-lg">
        <a :href="item.register_link" target="_blank" @click="recordRegisterClick(item)">
          <div class="bg-gray-200 bg-opacity-50 border rounded-md overflow-hidden">
            <div class="flex h-auto p-2 bg-gray-400 bg-opacity-25">
              <span class="font-semibold text-xl">{{ item.name }}</span>
            </div>
            <div class="h-auto px-4 pt-2 pb-4">
              <div class="mb-4">
                <span class="font-normal text-lg">{{ item.summary }}</span>
              </div>
              <div class="mb-1 font-light">
                {{ new Date(item.start).toLocaleString('en-US', dateTimeOptions) }} - {{ new Date(item.end).toLocaleString('en-US', dateTimeOptions) }}
              </div>
              <div class="mb-1 font-light">
                {{ item.location }}
              </div>
            </div>
            <div class="h-auto flex items-center justify-end bg-gray-400 bg-opacity-25 border-top border-dotted border-gray-800">
              <div class="text-sm xs:text-xs text-so-blue xs:text-base px-4 py-2 flex items-center">
                <div class="mr-2 font-semibold">Register</div>
                <icon name="fa-solid:external-link-alt" />
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    scheduleList: {
      type: Array,
      default: () => { return [] }
    }
  },
  data: () => ({
    dateTimeOptions: {
      day: 'numeric',
      year: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short'
    }
  }),
  methods: {
    recordRegisterClick (soEvent) {
      this.$gtag('event', 'register_click', {
        event_category: 'engagement',
        event_label: soEvent.name
      })
    }
  }
}
</script>

<style scoped>

</style>
