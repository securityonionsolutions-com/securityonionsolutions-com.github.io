<template>
  <div class="mb-12">
    <div class="text-3xl mb-6 ml-2">
      Public Training Events
    </div>
    <ul>
      <li v-for="(item, index) in scheduleList" :key="index" class="mb-6 hover:shadow-lg">
        <a :href="item.register_link" target="_blank">
          <div class="border border-gray-400 rounded-sm">
            <div class="h-auto px-4 pt-2 pb-4 border-b border-gray-400">
              <div class="mb-1">
                {{ new Date(item.start).toLocaleString('en-US', dateTimeOptions) }} - {{ new Date(item.end).toLocaleString('en-US', dateTimeOptions) }}
              </div>
              <div>
                <span class="font-semibold text-lg">{{ item.name }}</span> - {{ item.location }}
              </div>
            </div>
            <!-- <hr class="bg-gray-400"> -->
            <div class="h-auto flex items-center justify-end">
              <div class="border-l border-gray-400 text-sm xs:text-xs text-so-blue xs:text-base px-4 py-2 flex items-center">
                <div class="mr-2 font-semibold">Register</div>
                <fa :icon="['fas', 'external-link-alt']" />
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
  })
}
</script>

<style scoped>

</style>
