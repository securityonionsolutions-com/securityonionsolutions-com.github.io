<template>
  <div class="xs:px-12">
    <PageNav page-name="Conference" :links="links" />
    <SubHero class="hero-conference text-center">
      <template #header>
        Security Onion Conference {{ upcoming.year }}
      </template>
      <template #body>
        <div class="flex justify-center">
          <div class="text-2xl flex xs:block flex-col items-center">
            <div class="font-light text-2xl flex xs:block flex-col items-center">
              {{ upcoming.date }}
              <fa icon="circle" transform="shrink-12" />
              {{ upcoming.location }}
            </div>
          </div>
        </div>
        <div class="py-4 -px-4 text-base">
          <div class="mb-1">
            Security Onion Conference has concluded.
          </div>
          <div class="font-bold">
            Check out the conference video recordings below!
          </div>
        </div>
      </template>
    </SubHero>
    <ContentSection id="about" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <feature-right class="xs:mb-12" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Who Should Attend
            </div>
          </template>
          <template #graphic>
            <div class="shadow-xl rounded-full overflow-hidden">
              <Graphic
                :padding="false"
                file-name="instructor.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              If you use, or are considering using Security Onion, then you should attend Security Onion Conference! Find out what's new with Security Onion, learn best practices and exchange ideas with other users.
            </div>
            <div class="text-center xs:text-left mt-4">
              If you're generally interested in things like intrusion detection, network security monitoring, enterprise security monitoring, log management, hunting, and blue teaming, then you should consider attending Security Onion Conference!
            </div>
          </template>
        </feature-right>
      </div>
    </ContentSection>

    <div v-if="upcoming.schedule != null">
      <ContentSection id="schedule">
        <div class="xs:-mx-12 px-6 xs:px-12 lg:px-32">
          <SectionHeader class="mb-6 lg:mb-10">
            {{ upcoming.date }} Security Onion Conference Schedule
          </SectionHeader>
          <div class="flex flex-col lg:flex-row content-center justify-center lg:space-x-32">
            <div class="flex flex-col content-center justify-center text-center">
              <div v-for="(value, key, index) in upcoming.schedule" :key="index" :class="{ 'mb-5': index != upcoming.schedule.length }">
                <div class="font-bold text-xl xs:text-2xl mb-1">
                  {{ key }}
                </div>
                <div class="text-md xs:text-lg">
                  {{ value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection :alternate="true" />
    </div>

    <ContentSection id="past">
      <SectionHeader class="mb-10">
        <div class="text-3xl xs:text-5xl">
          Past Conferences
        </div>
      </SectionHeader>
      <div class="lg:flex lg:flex-row justify-center mb-4">
        <so-button v-for="(conference, i) in conferences" :key="i" class="flex flex-col w-1/2 lg:w-auto mx-auto lg:mx-2 my-2" :link="'#' + conference.year">
          {{ conference.year }}
        </so-button>
      </div>
      <div v-for="(conference, i) in conferences" :id="conference.year" :key="i" class="shadow-xl rounded-md overflow-hidden m-4" :class="[ i % 2 == 0 ? 'bg-gray-200' : 'bg-so-blue text-white']">
        <div class="h-20" />
        <div class="pb-10 text-center">
          <div class="mb-10">
            <div class="text-5xl font-semibold">
              Security Onion Conference {{ conference.year }}
            </div>
            <div class="text-2xl flex xs:block flex-col items-center text-center">
              {{ conference.date }}
              <fa icon="circle" transform="shrink-12" />
              {{ conference.location }}
            </div>
            <div class="mt-5">
              <a v-if="conference.pictures" :href="conference.pictures" target="_blank" class="mx-4">
                <fa icon="camera" transform="grow-12" />
              </a>
            </div>
          </div>
          <div class="flex flex-col items-center content-center">
            <div v-if="conference.playlist" class="mb-10 w-full lg:w-2/3 video-container shadow-xl rounded-md overflow-hidden">
              <iframe
                :src="
                  conference.playlist
                    .replace('playlist?list=', 'embed/videoseries?list=')
                    .replace('.com/watch?v=', '.com/embed/')
                "
                frameborder="0"
                allowfullscreen
              />
            </div>
            <div v-if="conference.events" class="mb-4 justify-center">
              <div class="text-3xl mb-2 font-bold">
                Presentations
              </div>
              <div class="h-4" />
              <div v-for="(event, j) in conference.events" :key="j" class="mb-4">
                <div class="flex flex-row text-lg font-semibold  justify-center">
                  {{ event.pres_name }}
                </div>
                <div class="flex flex-row justify-center">
                  <div v-for="(speaker, index) in event.speakers" :key="index" class="mr-1 font-light">
                    {{ speaker }}<span v-if="event.speakers.length > 1 && index < event.speakers.length - 2">,</span>
                    <span v-if="event.speakers.length > 1 && index === event.speakers.length - 2">&amp;</span>
                  </div>
                </div>
                <div v-if="event.links" class="mt-1">
                  <a v-for="(val, key) in event.links" :key="key" target="_blank" :href="val">
                    <fa :icon="key" class="mx-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import SoButton from '~/components/SoButton.vue'
export default {
  components: { SoButton },
  data: () => ({
    links: [{ name: 'Upcoming Schedule', id: 'schedule' }, { name: 'About', id: 'about' }, { name: 'Past Conferences', id: 'past' }],
    conferences: require('@/content/conferences.json').past,
    upcoming: require('@/content/conferences.json').upcoming,
    pictures: {},
    hooperSettings: {
      itemsToShow: 1,
      centerMode: true,
      wheelControl: false,
      keysControl: false,
      // autoPlay: true,
      playSpeed: 5000,
      transition: 800,
      trimWhiteSpace: true
    },
    imageSize: {
      width: '',
      height: '24rem'
    }
  }),
  methods: {
    importAll (r, year) {
      this.pictures[year] = []
      r.keys().forEach((key) => {
        if (r(key).includes(`/conferences/${year}`)) {
          this.pictures[year].push({ pathLong: r(key), pathShort: key })
        }
      })
    },
    updateImageSize (event) {
      this.imageSize.width = `${event.slideWidth}px`
    },
    recordRegisterClick () {
      this.$gtag('event', 'register_click', {
        event_category: 'engagement',
        event_label: `SO Conference ${this.upcoming.year}`
      })
    }
  }
}
</script>

<style lang="postcss">
@media (min-width: 480px) {
  .alternate {
    @apply -mx-12;
  }
}

@media (min-width: 768px) {
  .alternate {
    @apply px-32
  }
  .white {
    @apply px-16
  }
}
.alternate {
  @apply bg-so-blue text-white px-12;
}

.video-container {
  overflow: hidden;
  position: relative;
}

.video-container::after {
  padding-top: 56.25%;
  display: block;
  content: '';
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.hero-conference {
  background: right bottom no-repeat url(~assets/img/graphics/conference.jpg);
}

#cfp div div {
  line-height: 2em;
}
</style>
