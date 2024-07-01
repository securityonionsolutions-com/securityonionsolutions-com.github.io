<template>
  <div class="w-full lg:w-4/5">
    <table class="w-full">
      <thead>
        <tr>
          <th class="w-1/2"></th>
          <th class="px-2 py-8 lg:p-4 w-1/4 text-lg lg:text-2xl th-l truncate">
            <div class="flex justify-center content-center">
              <div class="hidden xs:block">Community</div>
              <div class="block xs:hidden vert-header">Community</div>
            </div>
          </th>
          <th class="px-2 py-8 lg:p-4 w-1/4 text-lg lg:text-2xl th-r truncate">
            <div class="flex justify-center content-center">
              <div class="hidden xs:block">Pro</div>
              <div class="block xs:hidden vert-header">Pro</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in featureList" :key="index">
          <tr class="text-left" :class="{ 'bg-gray-200': index % 2 == 0 }">
            <td
              class="p-1 lg:p-4 table-item-title text-md lg:text-xl"
              :class="{
                'table-item-title-top': index === 0,
                'table-item-title-bottom': index === featureList.length - 1
              }"
            >
              {{ item.feature }}
            </td>
            <td
              :class="{
                'text-green-500': item.free,
                'text-gray-700': !item.free,
                'table-item-top': index === 0,
                'table-item-bottom': index === featureList.length - 1
              }"
              class="py-2 lg:py-4 font-bold table-item text-lg lg:text-2xl justify-center text-center"
            >
              <icon v-if="item.free" name="fa-solid:check-circle" />
              <icon v-if="!item.free" name="fa-solid:times-circle" />
            </td>
            <td
              :class="{
                'text-green-500': item.premium,
                'text-gray-700': !item.premium,
                'table-item-top': index === 0,
                'table-item-bottom': index === featureList.length - 1
              }"
              class="py-2 lg:py-4 font-bold table-item table-item-r text-lg lg:text-2xl justify-center text-center"
            >
              <icon v-if="item.premium" name="fa-solid:check-circle" />
              <icon v-if="!item.premium" name="fa-solid:times-circle" />
            </td>
          </tr>
          <tr v-if="item.caption" :key="'caption-' + index" class="caption-row">
            <td colspan="3" class="py-2 px-4 cltext-md lg:text-lg text-gray-700" :class="{ 'bg-gray-200': index % 2 == 0 }">
              {{ item.caption }}
            </td>
          </tr>
          <tr v-if="item.coming_soon" :key="'coming-soon-' + index" class="coming-soon-row">
            <td colspan="3" class="py-2 px-4 cltext-md lg:text-lg text-orange-600" :class="{ 'bg-gray-200': index % 2 == 0 }">
              Coming soon!
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import features from '~/content/pro_comparison.json'

export default {
  data() {
    return {
      featureList: features.features
    };
  }
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
.caption-row td {
  text-align: left;
  font-style: italic;
  padding-top: 0rem;
  padding-bottom: 0.5rem;
}
.coming-soon-row td {
  text-align: left;
  font-style: italic;
  padding-top: 0rem;
  padding-bottom: 0.5rem;
}
</style>
