<template>
  <div>
    <div v-for="(event, index) in timelineEvents" :key="index" v-reveal.once :class="['stagger-' + ((index % 8) + 1), (index % 2 === 0 ? 'reveal-left' : 'reveal-right')]">
      <component
        :is="timelineComponent(event)"
        :index="index"
        :focused="focusedEventIndex===index"
        @event-click="handleClick($event)"
      >
        <template #year>
          {{ event.year }}
        </template>
        <template #event>
          <div class="text-sm lg:text-base">
            {{ event.event }}
          </div>
        </template>
      </component>
    </div>
  </div>
</template>

<script>
/* eslint-disable brace-style */
/* eslint-disable vue/no-unused-components */

import TimelineStart from '~/components/timeline/TimelineStart'
import TimelineEnd from '~/components/timeline/TimelineEnd'
import TimelineEventRight from '~/components/timeline/TimelineEventRight'
import TimelineEventLeft from '~/components/timeline/TimelineEventLeft'
import ImportantTimelineEventRight from '~/components/timeline/ImportantTimelineEventRight'
import ImportantTimelineEventLeft from '~/components/timeline/ImportantTimelineEventLeft'
export default {
  components: {
    TimelineStart,
    TimelineEnd,
    TimelineEventRight,
    TimelineEventLeft,
    ImportantTimelineEventRight,
    ImportantTimelineEventLeft
  },
  data: () => ({
    timelineEvents: [
      { year: '2008', event: 'Our humble beginnings' },
      { year: '2009', event: 'First release', important: false },
      { year: '2012', event: 'Big Distro Rebuild (BDR)', important: false },
      { year: '2014', event: 'Security Onion Solutions, LLC', important: true },
      { year: '2016', event: 'Company expansion', important: false },
      { year: '2018', event: 'Appliance Offering', important: true },
      { year: '2019', event: 'Team growth!', important: true },
      { year: '2020', event: 'Security Onion 2.3', important: false },
      { year: '2021', event: '2+ million downloads!', important: false },
      { year: '2023', event: 'Security Onion 2.4', important: true },
      { year: '2024', event: 'Security Onion Pro', important: true },
      { year: '2025', event: 'Onion AI Assistant', important: true }
    ],
    focusedEventIndex: 0
  }),
  methods: {
    timelineComponent (item) {
      const index = this.timelineEvents.indexOf(item)
      if (index === 0) { return 'timeline-start' }
      else if (index === (this.timelineEvents.length - 1)) { return 'timeline-end' }
      else {
        let side = ''
        if (index % 2 === 0) { side = 'right' } else { side = 'right' }
        if (item.important) {
          return `important-timeline-event-${side}`
        } else {
          return `timeline-event-${side}`
        }
      }
    },
    handleClick (index) {
      this.focusedEventIndex = index
      this.$emit('timeline-click', index)
    }
  }
}
</script>

<style lang="postcss">
@reference "../../assets/css/tailwind.css";
.grow .grow-child { transition: all .1s linear; }
.grow:hover { cursor: pointer;}
.grow:hover .grow-child, .focus {
  transform: scale(1.25);
  background-color: #BBDEFB;
}
.grow:active .grow-child, .focus {
  transform: scale(1);
  @apply bg-so-blue;
}
</style>
