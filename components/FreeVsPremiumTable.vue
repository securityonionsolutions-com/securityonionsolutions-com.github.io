<template>
  <div class="w-full lg:w-4/5">
    <table class="w-full">
      <thead>
        <tr>
          <th class="w-1/2" />
          <th class="px-2 py-8 lg:p-4 w-1/4 text-lg lg:text-2xl bg-so-blue text-white th-l truncate">
            <div class="flex justify-center content-center">
              <div class="hidden xs:block">
                Community
              </div>
              <div class="block xs:hidden vert-header">
                Community
              </div>
            </div>
          </th>
          <th class="px-2 py-8 lg:p-4 w-1/4 text-lg lg:text-2xl bg-so-blue text-white th-r truncate">
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
        <tr v-for="(item, index) in featureList" :key="index" class="text-center">
          <td
            class="p-1 lg:p-4 bg-gray-100 table-item-title text-md lg:text-xl"
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
            class="py-2 lg:py-4 font-bold table-item text-lg lg:text-2xl"
          >
            <fa v-if="item.free" icon="check" />
            <div v-else>
              -
            </div>
          </td>
          <td
            :class="[
              item.premium ? 'text-green-500' : 'text-gray-700',
              index==0 ? 'table-item-top' : '',
              index==featureList.length-1 ? 'table-item-bottom' : ''
            ]"
            class="py-2 lg:py-4 font-bold table-item table-item-r text-lg lg:text-2xl"
          >
            <fa v-if="item.premium" icon="check" />
            <div v-else>
              -
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
    featureList: [
      {
        feature: 'Basic Q&A',
        free: true,
        premium: true
      },
      {
        feature: 'Private',
        free: false,
        premium: true
      },
      {
        feature: 'Priority',
        free: false,
        premium: true
      },
      {
        feature: 'Architecture planning',
        free: false,
        premium: true
      },
      {
        feature: 'Remote assistance',
        free: false,
        premium: true
      },
      {
        feature: 'Advanced configuration support',
        free: false,
        premium: true
      },
      {
        feature: 'Support development of Security Onion',
        free: false,
        premium: true
      }
    ]
  }),
  beforeMount () {
    // this.featureList.push(
    //   { feature: 'Feature 1', free: true, premium: true }
    // )
    // for (let index = 1; index < 4; index++) {
    //   this.featureList.push({ feature: `Feature ${index + 1}`, free: false, premium: true })
    // }
  }
}
</script>

<style>
table {
  border-collapse: separate;
   border-spacing: 0;
}
.th-l {
  border-top: 2px solid black;
  border-left: 2px solid black;
}
.th-r {
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
}
.table-item-title {
  border-left: 2px solid black;
  border-bottom: 0.5px solid black;
}
.table-item-title-top {
  border-top: 2px solid black;
}
.table-item-title-bottom {
  border-bottom: 2px solid black;
}
.table-item {
  border-bottom: 0.5px solid black;
  border-left: 2px solid black;
}
.table-item-top {
  border-top: 2px solid black;
}
.table-item-bottom {
  border-bottom: 2px solid black;
}
.table-item-r {
  border-right: 2px solid black;
}
.vert-header {
  writing-mode: vertical-lr;
  text-orientation: mixed;
  }
</style>
