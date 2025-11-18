<template>
  <div class="xs:px-12">
    <PageNav page-name="Status" :links="links" />
    <div v-if="isLoaded">
    <SubHero class="hero-status text-center">
      <template #header>
        Service Status
      </template>
      <template #body>
        <div class="mt-4">
          <div v-if="isLoaded" :class="overallClass" class="inline-block px-4 py-2 rounded text-white font-bold">
            {{ overallMessage }}
          </div>
        </div>
      </template>
    </SubHero>

    <ContentSection id="open-incidents" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <SectionHeader class="mb-6">
          Open Incidents
        </SectionHeader>
        <div v-if="openIncidents.length === 0" class="text-center text-gray-300">
          No open incidents.
        </div>
        <div v-else v-for="incident in openIncidents" :key="incident.summary" class="bg-blue-100 rounded mb-4">
          <h3 class="text-xl font-bold p-4 bg-blue-800 flex justify-between items-center">{{ incident.summary }} <span class="px-2 py-1 rounded text-white text-sm font-normal" :class="incident.outage ? 'bg-red-500' : 'bg-yellow-500'">{{ incident.outage ? 'Unavailable' : 'Degraded' }}</span></h3>
          <div class="p-2 mb-2 text-gray-600">
            <p><strong>Affected Regions:</strong> {{ incident.affectedRegions.join(', ') }}</p>
            <p><strong>Affected Systems:</strong> {{ incident.affectedSystems.join(', ') }}</p>
          </div>
          <div class="space-y-2 p-3 text-gray-600">
            <div v-for="update in incident.updates" :key="update.date" class="border-l-4 border-blue-500 pl-4">
              <strong>{{ update.state }}</strong> - {{ update.details }}
              <small class="text-gray-500 block">{{ formatDate(update.date) }}</small>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>

    <ContentSection id="closed-incidents" :alternate="false">
      <div class="px-6 xs:px-12 lg:px-32">
        <SectionHeader class="mb-6 text-gray-600">
          Past Incidents
        </SectionHeader>
        <div v-if="closedIncidents.length === 0" class="text-center text-gray-500">
          No closed incidents.
        </div>
        <div v-else v-for="incident in closedIncidents" :key="incident.summary" class="bg-gray-100 rounded mb-4 cursor-pointer" @click="toggleExpanded(incident)">
          <div class="flex justify-between items-center bg-gray-800 text-gray-100">
            <h3 class="text-xl font-bold p-4">{{ incident.summary }}</h3>
            <small class="p-3">{{ formatDate(incident.updates[incident.updates.length-1].date) }} through {{ formatDate(incident.updates[0].date) }}</small>
          </div>
          <div v-if="incident.expanded">
            <div class="p-2 mb-2 text-gray-600">
              <p><strong>Affected Regions:</strong> {{ incident.affectedRegions.join(', ') }}</p>
              <p><strong>Affected Systems:</strong> {{ incident.affectedSystems.join(', ') }}</p>
            </div>
            <div class="space-y-2 p-3 text-gray-600">
              <div v-for="update in incident.updates" :key="update.date" class="border-l-4 border-gray-500 pl-4">
                <strong>{{ update.state }}</strong> - {{ update.details }}
                <small class="text-gray-500 block">{{ formatDate(update.date) }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
   </div>
  </div>
</template>

<script>
import SubHero from '~/components/hero/SubHero'
import statusData from '~/content/status.json'

export default {
  components: {
    SubHero,
  },
  data: () => ({
    links: [{ name: 'Open Incidents', id: 'open-incidents' }, { name: 'Closed Incidents', id: 'closed-incidents' }],
    incidents: [],
    overallMessage: 'All services nominal',
    overallClass: 'bg-green-500',
    isLoaded: false,
  }),
  computed: {
    openIncidents() {
      return this.incidents.filter(i => i.open)
    },
    closedIncidents() {
      return this.incidents.filter(i => !i.open)
    },
  },
  methods: {
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleString()
    },
    toggleExpanded(incident) {
      incident.expanded = !incident.expanded
    },
    computeOverall() {
      const openEvents = this.openIncidents
      if (openEvents.length === 0) {
        this.overallMessage = 'All services nominal'
        this.overallClass = 'bg-green-500'
      } else {
        const hasOutageTrue = openEvents.some(e => e.outage)
        const hasOutageFalse = openEvents.some(e => !e.outage)
        if (hasOutageTrue && hasOutageFalse) {
          this.overallMessage = 'Degraded or unavailable services'
          this.overallClass = 'bg-red-500'
        } else if (hasOutageTrue) {
          this.overallMessage = 'Some services unavailable'
          this.overallClass = 'bg-orange-800'
        } else {
          this.overallMessage = 'Some services degraded'
          this.overallClass = 'bg-yellow-500'
        }
      }
    },
  },
  mounted() {
    this.incidents = statusData.sort((a, b) => new Date(b.updates[0].date) - new Date(a.updates[0].date))
    this.incidents.forEach(i => {
      if (!i.open) i.expanded = false
    })
    this.computeOverall()
    this.isLoaded = true
  },
}
</script>

<style scoped>
.hero-status {
  background: right bottom no-repeat url('/img/graphics/dots.jpg');
}
</style>