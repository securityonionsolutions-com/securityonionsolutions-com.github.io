<template>
  <div class="xs:px-12">
    <PageNav page-name="Conference" :links="links" />
    <SubHero class="hero-conference text-center">
      <template #header>
        Security Onion Conference {{ upcoming.year }}
      </template>
      <template #body>
        <div class="flex flex-col flex-grow items-center">
          <div class="text-2xl flex xs:block flex-col items-center">
            <div class="font-light text-2xl flex xs:block flex-col items-center">
              {{ upcoming.date }}
              <icon name="fa6-solid:circle" size="0.3em" />
              {{ upcoming.location }}
            </div>
          </div>
          <div class="py-4 -px-4 text-base">
            {{ upcoming.caption }}
          </div>
          <so-button v-if="upcoming.link" class="mt-1 xl:mt-4" :link="upcoming.link">
            {{ upcoming.button }}
          </so-button>
        </div>
      </template>
    </SubHero>
    <div v-if="upcoming.schedule != null">
      <ContentSection id="schedule" :alternate="false">
        <div class="xs:-mx-12 px-6 xs:px-12 lg:px-32">
          <SectionHeader class="mb-6 lg:mb-10">
            <div>
              Conference Schedule*
            </div>
            <div class="text-2xl xl:text-3xl font-medium">
              {{ upcoming.date }}
            </div>
          </SectionHeader>

          <table class="mx-auto table-auto rounded-md border-separate border border-blue-400 bg-blue mb-12 w-full">
            <thead>
              <tr class="bg-blue-400 text-white">
                <th class="text-right p-3 truncate w-24">
                  <div>Time</div>
                </th>
                <th class="text-left p-3 truncate w-48">
                  <div>Presenter(s)</div>
                </th>
                <th class="text-left p-3 truncate">
                  <div>Topic</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="entry in upcoming.schedule" class="bg-white align-top hover:bg-sky-100">
                <td class="text-right border-t border-blue-400 p-2 truncate w-24" v-text="entry.time" />
                <td class="text-left border-t border-blue-400 p-2 truncate w-48">
                  <div v-for="presenter in entry.presenters">
                    <div v-text="presenter.name" class="font-medium cursor-pointer" @click="toggleDetails(entry)"/>
                    <div v-if="entry.expanded" class="mt-1 mb-6">
                      <img :src="presenter.image" class=""/>
                    </div>
                  </div>
                </td>
                <td class="text-left border-t border-blue-400 p-2">
                  <div v-text="entry.topic" class="font-medium cursor-pointer" @click="toggleDetails(entry)"/>
                  <div v-if="entry.expanded" class="mt-2 text-sm font-normal">
                    <div v-html="entry.description"/>
                    <hr class="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                    <div class="font-medium text-md">
                      Speaker Bio(s)
                    </div>
                    <div v-for="presenter in entry.presenters" class="mt-2 mb-4" v-html="presenter.bio"/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          * Schedule is subject to change.
        </div>
      </ContentSection>
    </div>

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


    <ContentSection id="past">
      <SectionHeader class="mb-10">
        <div class="text-3xl xs:text-5xl">
          Past Conferences
        </div>
      </SectionHeader>
      <div class="lg:flex lg:flex-row justify-center mb-8">
        <a v-for="(conference, i) in conferences" :key="i" class="flex flex-col w-1/2 lg:w-auto mx-auto lg:mx-3 my-2" :href="'#' + conference.year">
          {{ conference.year }}
        </a>
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
              <icon name="fa6-solid:circle" size="0.3em" />
              {{ conference.location }}
            </div>
            <div class="mt-5">
              <a v-if="conference.pictures && typeof conference.pictures === 'string' && conference.pictures.startsWith('http')" :href="conference.pictures" target="_blank" class="mx-4">
                <icon name="fa-solid:camera" size="2em" />
              </a>
              <button v-else-if="conference.pictures" @click="showPicturesModal(conference.pictures)" class="mx-4 bg-transparent border-none cursor-pointer">
                <icon name="fa-solid:camera" size="2em" />
              </button>
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
                  <div v-for="(speaker, index) in event.speakers" :key="index" class="font-light">
                    {{ speaker }}<span v-if="event.speakers.length > 1 && index < event.speakers.length - 2">,</span>
                    <span v-if="event.speakers.length > 1 && index === event.speakers.length - 2" class="mx-1">&amp;</span>
                  </div>
                </div>
                <div v-if="event.links" class="mt-1">
                  <a v-for="(val, key) in event.links" :key="key" target="_blank" :href="val">
                    <icon :name="'fa6-solid:' + key" class="mx-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
    <FloatingModal v-if="showModal" @close="showModal = false">
      <div class="bg-white p-8 rounded max-w-6xl">
        <ImageCarousel :images="modalImages" />
      </div>
    </FloatingModal>
  </div>
</template>

<script>
import SoButton from '~/components/SoButton.vue'
import FeatureRight from '~/components/features/FeatureRight'
import SubHero from '~/components/hero/SubHero'
import FloatingModal from '~/components/FloatingModal.vue'
import ImageCarousel from '~/components/ImageCarousel.vue'

import conferences from '~/content/conferences.json'

export default {
  components: {
    FeatureRight,
    SoButton,
    SubHero,
    FloatingModal,
    ImageCarousel,
  },
  data: () => ({
    links: [{ name: 'Upcoming Schedule', id: 'schedule' }, { name: 'About', id: 'about' }, { name: 'Past Conferences', id: 'past' }],
    conferences: conferences.past,
    upcoming: conferences.upcoming,
    pictures: {},
    showModal: false,
    modalImages: [],
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
    },
    toggleDetails(entry) {
      entry.expanded = !entry.expanded && (entry.description || entry.presenters.length) ? true : false
    },
    showPicturesModal(picturePaths) {
      this.modalImages = picturePaths
      this.showModal = true
    },
    handleKeydown(e) {
      if (e.key === 'Escape' && this.showModal) {
        this.showModal = false
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydown)
  },
}
</script>

<style lang="postcss">
@reference "../../assets/css/tailwind.css";
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
  background: right bottom no-repeat url('/img/graphics/conference.jpg');
}

#cfp div div {
  line-height: 2em;
}
</style>
