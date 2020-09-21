<template>
  <div class="xs:px-12">
    <PageNav page-name="SOC Augusta" :links="links" />
    <SubHero id="upcoming" class="xs:-mx-12">
      <template #graphic>
        <img class="mb-2 xs:mb-4 mt-4 xs:mt-6" src="~assets/img/conference.jpg">
      </template>
      <template #header>
        Security Onion Conference
      </template>
      <template #body>
        <div class="tet-lg xs:text-3xl -mt-4 mb-4">
          <a class="hover:text-so-blue" href="https://twitter.com/search?q=socaugusta" target="_blank">#socAugusta</a>
        </div>
      </template>
    </SubHero>
    <div class="flex flex-col items-center mt-4">
      <SectionHeader class="mb-2">
        <div class="text-2xl xs:text-4xl md:text-5xl">
          Don't miss out, get your tickets now!
        </div>
      </SectionHeader>
      <SoButton link="http://eventbrite.com" class="mb-8">
        <div class="text-md xs:text-xl">
          Sign Up Here
        </div>
      </SoButton>
      <div class="mb-4 text-center">
        <div class="text-5xl font-semibold">
          {{ upcoming.year }}
        </div>
        <div class="text-lg">
          {{ upcoming.date }}
        </div>
      </div>
    </div>
    <div class="xs:-mx-12 mt-16 py-16 px-2 xs:px-12 bg-so-blue text-white">
      <DetailPara>
        <template #header>
          <div class="text-lg xs:text-4xl">
            Who should attend Security Onion Conference?
          </div>
        </template>
        <template #body>
          <div class="text-sm xs:text-xl mx-1 xs:mx-12">
            If you use Security Onion, then you should definitely make plans to attend Security Onion Conference! Even if you don't use Security Onion, most talks provide value beyond just Security Onion itself.
            So if you're generally interested in things like intrusion detection, network security monitoring, enterprise security monitoring, log management, hunting, and blue teaming, then you should consider attending Security Onion Conference!
          </div>
        </template>
      </DetailPara>
    </div>
    <ContentSection id="past">
      <SectionHeader class="mb-10">
        <div class="text-lg xs:text-5xl">
          Past Conferences
        </div>
      </SectionHeader>
      <div v-for="(conference, i) in conferences" :key="i" :class="[i%2===0 ? 'white' : 'white']">
        <div class="pb-10 text-center" :class="[i===0 ? '' : 'pt-10']">
          <div class="mb-10">
            <div class="text-5xl font-semibold">
              {{ conference.year }}
            </div>
            <div v-if="conference.pictures" class="text-lg -mt-1">
              <a :href="conference.pictures" target="_blank">
                View Gallery
              </a>
            </div>
          </div>
          <div class="flex flex-col items-center content-center">
            <div v-if="conference.playlist" class="mb-10 w-full lg:w-2/3 video-container">
              <iframe
                id="existing-iframe-example"
                :src="conference.playlist.replace('playlist?list=', 'embed/videoseries?list=')"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <!-- <div v-if="pictures[conference.year] || conference.pictures" >
              <img v-if="pictures[conference.year]" :src="pictures[conference.year][Math.floor(Math.random() * 25)].pathLong" class="border-4 border-black">
            </div> -->
            <div v-if="conference.events" class="mb-4">
              <div class="text-3xl mb-2 font-bold">
                Presentations
              </div>
              <!-- <div v-if="conference.playlist" class="text-2xl">
                <a target="_blank" :href="conference.playlist">View All <span /></a>
              </div> -->
              <div class="h-4" />
              <div v-for="(event, j) in conference.events" :key="j" class="mb-2">
                <div class="text-lg font-semibold">
                  {{ event.pres_name }}
                </div>
                <div class="flex flex-row justify-center">
                  <div v-for="(speaker, index) in event.speakers" :key="index" class="mr-1">
                    {{ speaker }}
                    <span v-if="event.speakers.length>1 && index !== event.speakers.length - 1">&amp;</span>
                  </div>
                </div>
                <div v-if="event.links" class="mb-4">
                  <div v-for="(val, key) in event.links" :key="key">
                    <a target="_blank" :href="val">{{ key }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider v-if="i!==conferences.length-1" />
      </div>
    </ContentSection>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [{ name: 'Upcoming', id: 'upcoming' }, { name: 'Past', id: 'past' }],
    conferences: [{}],
    upcoming: {},
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
  async beforeMount () {
    const conferenceArr = await this.$content('conferences').fetch()
    this.conferences = conferenceArr.past
    this.upcoming = conferenceArr.upcoming

    // const reqCtx = require.context('@/assets/img/conferences/', true, /\.jpg/)

    // for (let year = 2016; year <= 2019; year++) {
    //   this.importAll(reqCtx, year)
    // }
  },
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
    }
  }
}
</script>

<style lang="postcss">
#past a {
  @apply text-so-blue;
}
#past a:hover {
  @apply text-black;
}

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
</style>
