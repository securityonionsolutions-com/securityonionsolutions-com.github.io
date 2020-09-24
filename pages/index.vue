<template>
  <div class="xs:px-12">
    <PageNav page-name="Home" :links="links" />
    <SubHero class="mb-16 xs:-mx-12">
      <template #graphic>
        <img src="~assets/img/screenshots/hunt-slash-skinny.jpg" class="mb-2 xs:mb-4">
      </template>
      <template #header>
        Peel Back The Layers of Your Enterprise
      </template>
      <template #body>
        We are the builders of Security Onion, a free and open source Linux distribution for threat hunting, enterprise security monitoring, and log management.
      </template>
    </SubHero>
    <!-- <HeroLeft link="/hardware/SOS1YYY" class="mb-20 xs:-mx-4">
      <template #graphic>
        <div class="mt-10">
          <img src="~assets/img/hardware/enterprise-server-poweredge-r7415-above-row-pdp.jpg">
        </div>
      </template>
      <template #blurb>
        Check out our NEW 10Gb SOS10000
      </template>
      <template #button-text>
        Specs
      </template>
    </HeroLeft> -->
    <div class="text-white bg-so-blue xs:-mx-12 px-4 xs:px-16 py-20">
      <two-panel-detail class="mb-8">
        <template #section-heading>
          About Us
        </template>
        <template #header-left>
          Our Software
        </template>
        <template #body-left>
          We are the builders of Security Onion, a free and open source platform for threat hunting, network security monitoring, and log management. Security Onion includes best-of-breed open source tools such as Suricata, Zeek, Wazuh, the Elastic Stack, among many others.
        </template>
        <template #header-right>
          Our Services
        </template>
        <template #body-right>
          Security Onion Solutions offers appliances and professional services centered around the platform, and is the only provider of official Security Onion training.
        </template>
      </two-panel-detail>
    </div>
    <ContentSection id="timeline">
      <section-header class="mb-12 lg:mb-20">
        Our History
      </section-header>
      <div class="flex flex-col lg:flex-row flex-wrap justify-center content-center mx-6 xs:mx-12">
        <div class="flex flex-col justify-center items-center md:w-1/2 lg:w-2/3 lg:pr-8 xl:pl-4 pb-12 lg:pb-0">
          <img class="object-contain mb-8 overflow-hidden rounded-md w-5/6" :class="[currentEvent!=0 ? 'shadow-xl' : '']" :src="eventObj().img">
          <div class="text-xl text-center w-4/5">
            {{ eventObj().text }}
          </div>
        </div>
        <div class="md:w-1/2 lg:w-1/3">
          <Timeline @timeline-click="setEventGraphic($event)" />
        </div>
      </div>
    </ContentSection>
    <ContentSection :bottom-margin="false">
      <div class="bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32 pb-20 mb-24">
        <feature-right class="mt-24 xs:mb-12" :text-margin="true">
          <template #graphic>
            <div class="rounded-full shadow-lg overflow-hidden">
              <CircleGraphic
                :padding="false"
                file-name="mike-speaking.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #header>
            <div class="text-left">
              Why Choose Us
            </div>
          </template>
          <template #body>
            <ul class="list-disc text-left pl-2 lg:pl-6 text-base">
              <li>
                We created and maintain Security Onion, so we know it better than anybody else.
              </li>
              <li>
                When you purchase products and services from us, you're helping to fund development of Security Onion!
              </li>
            </ul>
          </template>
        </feature-right>
        <feature-left-action class="my-12" :alt="true" @button-click="$router.push('/training')">
          <template #header>
            <div class="text-center xs:text-left">
              Training
            </div>
          </template>
          <template #graphic>
            <CircleGraphic
              file-name="training-stack.png"
              :padding="false"
              :size="20"
            />
          </template>
          <template #body>
            <ul class="text-center xs:text-left">
              <li>
                We're the only official authorized training provider for Security Onion.
              </li>
              <li>
                Our instructors are the only Security Onion Certified Instructors in the world.
              </li>
              <li>
                Our course material is the only authorized training material for Security Onion.
              </li>
              <li>
                We've been teaching Security Onion classes and providing Professional Services since 2014.
              </li>
            </ul>
          </template>
          <template #button-text>
            More Info
          </template>
        </feature-left-action>
      </div>
      <action-callout-graphic class="my-12" @button-click="$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about Security Onion Solutions\' offerings.', source: 'main_general_contact_us' })">
        <template #callout>
          <div class="text-2xl xs:text-4xl flex justify-center mb-4">
            <div class="mx-2 xs:mx-0 xs:w-4/6">
              Want us to take care of the hardware and setup so you can focus on threat hunting?
            </div>
          </div>
        </template>
        <!-- INCLUDE BULLET LIST OF THINGS WE DO -->
        <!-- <template #graphic>
          <div class="mt-6 mb-0 lg:-mb-8">
            <img style="height: 30rem" src="~assets/img/graphics/undraw_detailed_analysis_xn7y.svg">
          </div>
        </template> -->
        <template #button-text>
          <div class="text-lg m-1">
            Contact Us
          </div>
        </template>
      </action-callout-graphic>
    </ContentSection>
    <ContentSection id="members" :bottom-margin="false">
      <div class="bg-so-blue text-white xs:-mx-12 py-24">
        <section-header class="sm:mx-40 mb-8">
          Our Team
        </section-header>
        <div class="flex flex-row flex-wrap justify-center content-center mb-4">
          <div v-for="(member, index) in teamArr" :key="index" class="px-1 py-3">
            <team-card
              :name="member.name"
              :role="member.role"
              :image="member.image"
              :linkedin="member.linkedin"
              :twitter="member.twitter"
            />
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection id="partners">
      <section-header class="mb-6">
        Our Partners
      </section-header>
      <div class="flex flex-col lg:flex-row lg:flex-wrap justify-center content-center md:-mx-2 mt-4">
        <img v-for="(image, index) in logos" :key="index" class="partner-logo m-auto lg:px-6 py-10 lg:py-2 w-1/2 lg:w-1/6" :src="image">
      </div>
    </ContentSection>
  </div>
</template>

<script>
import TwoPanelDetail from '~/components/features/TwoPanelDetail'
import Timeline from '~/components/timeline/Timeline'
import TeamCard from '~/components/TeamCard'
import SectionHeader from '~/components/SectionHeader'
import ActionCalloutGraphic from '~/components/action_callouts/ActionCalloutGraphic'
import FeatureRight from '~/components/features/FeatureRight'
import FeatureLeftAction from '~/components/features/FeatureLeftAction'

const logos = [
  require('../assets/img/partners/credence-logo.jpg'),
  require('../assets/img/partners/elastic-logo.png'),
  require('../assets/img/partners/fireeye-logo.png'),
  require('../assets/img/partners/intelligenesis-logo.png'),
  require('../assets/img/partners/profitap-logo.png')
]

export default {
  scrollToTop: true,
  components: {
    TwoPanelDetail,
    Timeline,
    TeamCard,
    SectionHeader,
    ActionCalloutGraphic,
    FeatureRight,
    FeatureLeftAction
  },
  data: () => ({
    links: [{ name: 'History', id: 'timeline' }, { name: 'Members', id: 'members' }, { name: 'Partners', id: 'partners' }],
    eventText: 'Default Graphic',
    teamArr: require('@/content/team.json').team,
    eventList: [
      {
        text: '',
        img: 'undraw_conceptual_idea_xw7k.svg'
      },
      {
        text: 'In 2008, Doug Burks started working on Security Onion, a Linux distribution for intrusion detection, network security monitoring, and log management.',
        img: 'sos-site-header-2-square.jpg'
      },
      {},
      {},
      {
        text: 'As the worldwide Security Onion community grew, Doug Burks began receiving more and more requests for training and professional services. In 2014, Doug started Security Onion Solutions LLC to help Security Onion users peel back the layers of their networks.',
        img: 'security_onion_solutions_rings.jpg'
      },
      {},
      {
        text: 'In 2018 we celebrated 10 years of Security Onion by announcing custom hardware appliances!',
        img: 'old-server-mockup.jpg'
      },
      {
        text: 'Security Onion Solutions continued to grow in 2019, adding five new team members.',
        img: 'new-team.jpg'
      },
      {
        text: 'We currently sit at over 1 million ISO image downloads!',
        img: '1mil+_downloads.jpg'
      }
    ],
    currentEvent: 1,
    logos
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
        img: require(`../assets/img/graphics/${fileName}`)
      }
    }
  },
  head () {
    return {
      title: 'Security Onion Solutions - Home'
    }
  }
}
</script>

<style scoped>
.overlay-circle {
  position: absolute;
  top: 50%;
  right: 50%;
}
.graphic {
  height: 30rem;
  min-width: 30rem;
  width: 30rem;
}
/* [id]:before {
  content: "";
  display: block;
  height: 88px;
  margin-top: -88px;
} */
</style>
