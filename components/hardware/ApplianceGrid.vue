<template>
  <div class="w-full lg:w-4/5">
    <table v-for="(role, roleIndex) in roles" :key="roleIndex" class="w-full rounded-md border bg-gray-400 mb-12">
      <thead>
        <tr class="text-left">
          <th colspan="5" class="pb-0 pl-0 pr-0">
            <div class="bg-gray-300 text-3xl font-bold p-4">
              {{ role.name }}
            </div>
          </th>
        </tr>
        <tr class="bg-gray-300 text-center">
          <th class="w-1/2" />
          <th class="py-2 px-4 w-1/4 text-lg lg:text-xl th-r truncate">
            <div v-if="role.sensor" class="hidden xs:block">
              Throughput
            </div>
            <div v-if="role.sensor" class="block xs:hidden vert-header mx-auto">
              Throughput
            </div>
          </th>
          <th class="py-2 px-4 w-1/4 text-lg lg:text-xl th-r truncate" :class="[role.name==='Forward Nodes' ? 'hidden xs:table-cell' : 'table-cell']">
            <div class="hidden xs:block">
              Storage
            </div>
            <div class="block xs:hidden vert-header mx-auto">
              Storage
            </div>
          </th>
          <th class="hidden md:table-cell py-2 px-4 w-1/4 text-lg lg:text-xl th-r truncate">
            <div>
              Form Factor
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in role.appliances"
          :key="index"
          class="text-center cursor-pointer"
          :class="[index % 2 != 0 ? 'bg-gray-200' : 'bg-white']"
          @click="handleClick(item, role)"
        >
          <td class="text-left pl-6 py-2 lg:py-4 table-item-title text-xl lg:text-2xl whitespace-no-wrap truncate">
            <div class="flex flex-row items-center">
              {{ item['name'] }}
              <fa icon="info" mask="circle" transform="shrink-6" class="mx-2 text-base" />
            </div>
          </td>
          <td class="py-2 lg:py-4 table-item text-lg lg:text-xl truncate" v-text="item.specs['Throughput']" />
          <td class="py-2 lg:py-4 table-item text-lg lg:text-xl truncate" :class="[role.name==='Forward Nodes' ? 'hidden xs:table-cell' : 'table-cell']" v-text="item.specs['Available Storage']" />
          <td class="hidden md:table-cell py-2 lg:py-4 table-item text-lg lg:text-xl truncate" v-text="item.specs['Form Factor']" />
        </tr>
      </tbody>
    </table>
    <div>
      * Storage sizes are approximate.
    </div>
    <div>
      † Actual performance depends on network traffic. Forward node estimates assume a Manager Node is used.
    </div>
    <div>
      ‡ Throughput rating is achieved without PCAP.
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    roles: require('@/content/appliances.json').roles
  }),
  methods: {
    handleClick (appliance, role) {
      this.$gtag('event', 'hw_info', {
        event_category: 'ecommerce',
        event_label: appliance.name,
        value: appliance.name
      })
      this.$router.push(`/hardware/${role.name.toLowerCase().replace(' ', '_')}/${appliance.name.replace(' ', '_')}`)
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
