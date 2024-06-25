<template>
  <div class="w-full">
    <SectionHeader class="mb-8">
      Appliance Comparison
    </SectionHeader>

    <table class="mx-auto table-auto rounded-md border-separate border border-blue-400 bg-blue mb-12">
      <thead>
        <tr class="bg-blue-400 text-left text-white">
          <th class="hidden md:table-cell px-2 truncate" style="min-width: 1.3em">
            <div>&nbsp;</div>
          </th>
          <th class="hidden md:table-cell px-2 truncate" />
          <th class="truncate">
            <div>&nbsp;</div>
            <div>Model</div>
          </th>
          <th class="hidden xl:table-cell px-2 truncate">
            <div>&nbsp;</div>
            <div>Use Case(s)</div>
          </th>
          <th class="text-center px-2 truncate">
            <div>Forward Node</div>
            <div>Throughput †</div>
          </th>
          <th class="text-center px-2 truncate">
            <div>Standalone</div>
            <div>Throughput †</div>
          </th>
          <th class="text-center px-2 truncate">
            <div>Max</div>
            <div>Storage *</div>
          </th>
          <th class="hidden sm:table-cell text-center px-2 truncate">
            <div>Form</div>
            <div>Factor</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in appliances"
          :key="index"
          class="bg-white cursor-pointer"
          @click="handleClick(item)"
        >
          <td v-if="item['category'] == 'Response Ready'" class="hidden md:table-cell border-t border-blue-400 text-white bg-blue-400 pl-1 pr-1 pt-2 truncate vert-header" v-text="item['category']" />
          <td v-if="item['category'] != 'Response Ready'" class="hidden md:table-cell border-t border-blue-400 text-white bg-white pl-1 pr-1 pt-2 truncate vert-header" />
          <td class="hidden md:table-cell border-t border-blue-400 truncate w-1/4">
            <img :src="thumbnail(item)">
          </td>
          <td class="text-right border-t border-blue-400 px-2 truncate">
            <div class="flex flex-row">
              {{ item['name'] }}
              <icon name="fa6-solid:circle-info" class="mx-2 mt-1 text-base" />
            </div>
          </td>
          <td class="hidden xl:table-cell border-t border-blue-400 px-2 truncate">
            <div v-for="(role, roleIdx) in item.roles" :key="roleIdx" v-text="role" />
          </td>
          <td class="text-right border-t border-blue-400 px-2 truncate" v-text="item.specs['Forward Node Throughput †']" />
          <td class="text-right border-t border-blue-400 px-2 truncate" v-text="item.specs['Standalone Throughput †']" />
          <td class="text-right border-t border-blue-400 px-2 truncate" v-text="item.specs['Data Storage *']" />
          <td class="hidden sm:table-cell text-right border-t border-blue-400 px-2 truncate" v-text="item.specs['Form Factor']" />
        </tr>
      </tbody>
    </table>
    <Footnotes />
  </div>
</template>

<script>
import Footnotes from '~/components/hardware/Footnotes'
import appliances from '~/content/appliances.json'

export default {
  components: {
    Footnotes,
  },
  data: () => ({
    appliances: appliances
  }),
  methods: {
    thumbnail (appliance) {
      return `/img/appliances/${appliance.img_front_thumb}`;
    },
    handleClick (appliance) {
      this.$router.push(`/hardware/${appliance.name.replace(' ', '_')}`)
    }
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
</style>
