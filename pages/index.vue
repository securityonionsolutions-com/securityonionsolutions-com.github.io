<template>
  <div class="xs:px-12">
    <PageNav page-name="Overview" :links="links" />
    <CarouselHero :entries="heroReasons" class="xs:-mx-12"/>
    <ContentSection id="preview" :alternate="true">
      <div class="px-1 md:px-6">
        <SectionHeader class="mt-6 xs:mb-8">
          Latest Developments
        </SectionHeader>
        <VerticalFeature>
          <template #graphic>
            <video class="v-player__video w-full" controls autoplay="true"
                  loop="true"
                  muted="false"
                  poster=""
                  preload="auto"
                  name="media">
                <source src="/public/videos/onionai-demo.mp4">
            </video>
          </template>
          <template #title>
            <div class="text-2xl">
              Our popular <i>Onion AI</i>, an advanced LLM-based security analyst assistant built directly into the Security Onion console, has just received a significant upgrade! Check out the video below to see how Onion AI can help your team improve the tedious process of detection tuning.
            </div>
          </template>
          <template #body>
            <div class="text-2xl d-flex-column">
              <div class="text-xl mt-8">
                Existing Security Onion Pro customers with Internet-connected grids have access to this time-saving feature today! No additional license changes are necessary. Interested in using Onion AI with a local model? Contact us to learn more.
              </div>
              <div class="w-full flex justify-center">
                <so-button class="mt-4 xl:mt-8" link="/pro" :alternate="true">
                  Learn more about Pro
                </so-button>
              </div>
            </div>
          </template>
        </VerticalFeature>
      </div>
    </ContentSection>
    <ContentSection id="partners">
      <div class="xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <section-header class="mb-6">
          Our Partners
        </section-header>
        <div class="flex flex-col lg:flex-row lg:flex-wrap justify-center content-center md:-mx-2 mt-4">
          <img v-for="(image, index) in logos" :key="index" class="partner-logo m-auto lg:px-6 py-10 lg:py-2 w-1/2 lg:w-1/6" :src="image">
        </div>
      </div>
    </ContentSection>
    <ContentSection id="about" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <section-header class="mb-6">
          About Us
        </section-header>
        <feature-right class="xs:mb-12" :text-margin="true">
          <template #graphic>
            <div class="rounded-full shadow-lg overflow-hidden">
              <Graphic
                :padding="false"
                file-name="mike-speaking.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              Security Onion Solutions, LLC is the creator and maintainer of Security Onion, a free and open platform for threat hunting, network security monitoring, and log management. Security Onion includes best-of-breed free and open tools including Suricata, Zeek, the Elastic Stack and many others.
            </div>
            <div class="text-center xs:text-left mt-4">
              We created and maintain Security Onion, so we know it better than anybody else.
              When you purchase products and services from us, you're helping to fund development of Security Onion!
            </div>
          </template>
        </feature-right>
      </div>
    </ContentSection>
    <ContentSection id="timeline">
      <div class="xs:-mx-12">
        <section-header class="sm:mx-40 mb-8">
          Our History
        </section-header>
        <div class="flex flex-row flex-wrap justify-center content-center mb-4">
          <div class="md:w-1/2 lg:w-1/3 pr-12">
            <Timeline @timeline-click="setEventGraphic($event)" />
          </div>
          <div class="flex flex-col items-center md:w-1/2 lg:w-2/3 lg:pr-8 xl:pl-4 pb-12 lg:pb-0">
            <div class="text-lg mb-20 hidden lg:block">Click on a timeline event, on the left, to learn more.</div>
            <img class="object-contain my-10 overflow-hidden rounded-md w-5/6" :class="[currentEvent!=0 ? 'shadow-xl' : '']" :src="eventObj().img">
            <div class="text-xl text-center w-4/5">
              {{ eventObj().text }}
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection id="members" :alternate="true">
      <div>
        <section-header class="sm:mx-40 mb-8">
          Our Team
        </section-header>
        <div class="flex flex-row flex-wrap justify-center content-center mb-4 md:mx-24">
          <div v-for="(member, index) in teamArr" :key="index" class="px-4 py-4">
            <team-card
              :name="member.name"
              :org="member.org"
              :role="member.role"
              :image="member.image"
              :linkedin="member.linkedin"
              :twitter="member.twitter"
            />
          </div>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'

import CarouselHero from '~/components/hero/CarouselHero'
import Timeline from '~/components/timeline/Timeline'
import TeamCard from '~/components/TeamCard'
import SectionHeader from '~/components/SectionHeader'
import ActionCallout from '~/components/action_callouts/ActionCallout'
import FeatureRight from '~/components/features/FeatureRight'
import FeatureLeft from '~/components/features/FeatureLeft'
import VerticalFeature from '~/components/features/VerticalFeature'

import elastic_logo from '~/assets/img/partners/elastic-logo.png'
import garland_logo from '~/assets/img/partners/garlandtechnology-logo.png'
import gigamon_logo from '~/assets/img/partners/gigamon-logo.png'
import intelligenesis_logo from '~/assets/img/partners/intelligenesis-logo.png'
import profitap_logo from '~/assets/img/partners/profitap-logo.png'

import reasons from '~/content/reasons.json'
import team from '~/content/team.json'
import history from '~/content/history.json'

const logos = [
  elastic_logo,
  garland_logo,
  gigamon_logo,
  intelligenesis_logo,
  profitap_logo
]

function shuffle(arr) {
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

function prepareReasons(reasons) {
  var quoteItem = reasons.find(item => item.quotes) 
  if (quoteItem) {
    quoteItem.quotes = shuffle(quoteItem.quotes);
  }
  return reasons;
}

export default {
  components: {
    CarouselHero,
    Timeline,
    TeamCard,
    SectionHeader,
    ActionCallout,
    FeatureRight,
    FeatureLeft,
    VerticalFeature,
  },
  data: () => ({
    sos,
    links: [{ name: 'Portfolio', id: 'portfolio' }, { name: 'Partners', id: 'partners' }, { name: 'About', id: 'about' }, { name: 'History', id: 'timeline' }, { name: 'Team', id: 'members' }],
    eventText: 'Default Graphic',
    teamArr: team.team,
    eventList: history.events,
    currentEvent: 1,
    logos,
    heroReasons: prepareReasons(reasons),
  }),
  methods: {
    setEventGraphic (index) {
      // The 0th object is a placeholder if not enough items are present in the array
      // so make sure we never set this var to 0 unles we mean to.
      this.currentEvent = index + 1
      if (window.innerWidth < 1024) {
        this.$scrollTo('#timeline')
      }
    },
    eventObj () {
      if (this.eventList.length < this.currentEvent) {
        this.currentEvent = 0
      }

      let fileName = this.eventList[this.currentEvent].img
      if (fileName === '' || fileName === undefined) {
        this.currentEvent = 0
        fileName = this.eventList[this.currentEvent].img
      }

      return {
        text: this.eventList[this.currentEvent].text,
        img: `/img/graphics/${fileName}`
      }
    }
  }
}
</script>

<style scoped>
.hero {
  background: right no-repeat url('/img/icons/so-onion.png');
}
</style>
