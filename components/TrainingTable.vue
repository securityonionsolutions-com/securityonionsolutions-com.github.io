<template>
  <div>
    <div class="text-3xl mb-4 ml-4">
      Public Training Schedule
    </div>
    <div class="shadow overflow-hidden rounded-lg border border-gray-400">
      <table class="min-w-full bg-white">
        <thead>
          <tr class="text-2xl my-4">
            <th class="py-4 w-2/5">
              Date
            </th>
            <th class="py-4 w-1/5">
              Location
            </th>
            <th class="py-4 w-2/5" />
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in scheduleList"
            :key="index"
          >
            <td
              class="text-center pt-3 w-2/5"
              :class="[ index===scheduleList.length-1 ? 'pb-6' : 'pb-3' ]"
            >
              {{ item.date }}
            </td>
            <td
              class="text-center pt-3 w-1/5"
              :class="[ index==scheduleList.length-1 ? 'pb-6' : 'pb-3' ]"
            >
              {{ item.location }}
            </td>
            <td
              class="pt-3 w-2/5"
              :class="[ index==scheduleList.length-1 ? 'pb-6' : 'pb-3' ]"
            >
              <so-button class="float-right mr-2 md:mr-8">
                Action item
              </so-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SoButton from '~/components/SoButton'

export default {
  components: {
    SoButton
  },
  props: {
    scheduleList: {
      type: Array,
      default: () => { return [] }
    }
  }
}
</script>

<style scoped>

</style>
