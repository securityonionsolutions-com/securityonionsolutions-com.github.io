<template>
  <div class="w-full lg:w-4/5">
    <table class="w-full">
      <thead>
        <tr>
          <th class="w-1/2" />
          <th class="px-2 py-8 lg:p-4 w-1/4 text-lg lg:text-2xl th-l truncate">
            <div class="flex justify-center content-center">
              <div class="hidden xs:block">
                Community
              </div>
              <div class="block xs:hidden vert-header">
                Community
              </div>
            </div>
          </th>
          <th class="px-2 py-8 lg:p-4 w-1/4 text-lg lg:text-2xl th-r truncate">
            <div class="flex justify-center content-center">
              <div class="hidden xs:block">
                Premium
              </div>
              <div class="block xs:hidden vert-header">
                Premium
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in featureList" :key="index" class="text-left" :class="[index % 2 == 0 ? 'bg-gray-200' : '']">
          <td
            class="p-1 lg:p-4 table-item-title text-md lg:text-xl"
            :class="[
              index==0 ? 'table-item-title-top' : '',
              index==featureList.length-1 ? 'table-item-title-bottom' : ''
            ]"
          >
            {{ item.feature }}
          </td>
          <td
            :class="[
              item.free ? 'text-green-500' : 'text-gray-700',
              index==0 ? 'table-item-top' : '',
              index==featureList.length-1 ? 'table-item-bottom' : ''
            ]"
            class="py-2 lg:py-4 font-bold table-item text-lg lg:text-2xl justify-center text-center"
          >
            <fa v-if="item.free" icon="check-circle" />
            <fa v-if="!item.free" icon="times-circle" />
          </td>
          <td
            :class="[
              item.premium ? 'text-green-500' : 'text-gray-700',
              index==0 ? 'table-item-top' : '',
              index==featureList.length-1 ? 'table-item-bottom' : ''
            ]"
            class="py-2 lg:py-4 font-bold table-item table-item-r text-lg lg:text-2xl justify-center text-center"
          >
            <fa v-if="item.premium" icon="check-circle" />
            <fa v-if="!item.premium" icon="times-circle" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
    featureList: require('~/content/support_comparison.json').features
  })
}
</script>

<style>
table {
  border-collapse: separate;
  border-spacing: 0;
}
.vert-header {
  writing-mode: vertical-lr;
  text-orientation: mixed;
  }
</style>
