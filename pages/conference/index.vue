<template>
  <div class="xs:px-12">
    <PageNav page-name="Conference" :links="links" />
    <SubHero class="hero text-center">
      <template #header>
        Security Onion Conference {{ upcoming.year }}
      </template>
      <template #body>
        Don't miss out, registration is limited!
        <div class="flex justify-center">
          <div class="text-2xl">
            <span class="font-light whitespace-nowrap">
              {{ upcoming.date }}
              <fa icon="caret-right" class="mx-2" transform="shrink-5" />
              {{ upcoming.location }}
            </span>
          </div>
        </div>
        <div class="flex justify-center">
          <ActionCallout class="mt-1 xl:mt-4" link="https://securityonionconference2020.eventbrite.com">
            <template #button-text>
              Register Now
            </template>
          </ActionCallout>
        </div>
      </template>
    </SubHero>

    <ContentSection id="about" :alt="true">
      <div class="bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <feature-right class="xs:mb-12" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Who Should Attend
            </div>
          </template>
          <template #graphic>
            <div class="shadow-xl rounded-full overflow-hidden">
              <CircleGraphic
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
        <action-callout :alt="true" class="my-12" @button-click="$nuxt.$emit('show-contact-modal', { text: 'I\'m interested in presenting at the next Security Onion conference.', source: 'conference_interest' })">
          <template #info>
            <div class="text-2xl flex justify-center">
              <div>
                Are you interested in presenting at the next Security Onion Conference?
              </div>
            </div>
          </template>
          <template #button-text>
            <div class="text-lg my-1">
              Contact Us
            </div>
          </template>
        </action-callout>
      </div>
    </ContentSection>

    <ContentSection id="past">
      <SectionHeader class="mb-10">
        <div class="text-lg xs:text-5xl">
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
            <div class="text-2xl">
              {{ conference.date }}
              <fa icon="caret-right" class="mx-2" transform="shrink-5" />
              {{ conference.location }}
            </div>
            <div>
              <a v-if="conference.pictures" :href="conference.pictures" target="_blank" class="mx-4">
                <fa icon="camera" />
              </a>
            </div>
          </div>
          <div class="flex flex-col items-center content-center">
            <div v-if="conference.playlist" class="mb-10 w-full lg:w-2/3 video-container shadow-xl rounded-md overflow-hidden">
              <iframe
                id="existing-iframe-example"
                :src="conference.playlist.replace('playlist?list=', 'embed/videoseries?list=')"
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
                    {{ speaker }}
                    <span v-if="event.speakers.length>1 && index !== event.speakers.length - 1">&amp;</span>
                  </div>
                </div>
                <div v-if="event.links" class="ml-4">
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
export default {
  data: () => ({
    links: [{ name: 'About', id: 'about' }, { name: 'Past Conferences', id: 'past' }],
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
  .alt {
    @apply -mx-12;
  }
}

@media (min-width: 768px) {
  .alt {
    @apply px-32
  }
  .white {
    @apply px-16
  }
}
.alt {
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
.hero {
  background: right bottom no-repeat url(~assets/img/graphics/conference.jpg);
}
</style>
