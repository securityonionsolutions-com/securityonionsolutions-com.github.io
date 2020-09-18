<template>
  <div class="xs:px-12">
    <PageNav page-name="Training" :links="links" />
    <SubHero class="mb-12">
      <template #graphic>
        <div class="my-10 w-1/2">
          <img src="~assets/img/graphics/undraw_teaching_f1cm.svg">
        </div>
      </template>
      <template #header>
        Official Security Onion Training
      </template>
      <template #body>
        We are the <span class="italic font-bold">only</span> official source for live (virtual or onsite) Security Onion training and our instructors are the only Security Onion Certified Instructors in the world!
      </template>
    </SubHero>
    <client-only>
      <TestimonialList :list="testimonialList" class="mb-2" />
    </client-only>
    <noscript inline-template>
      <Testimonial class="mb-2">
      <template #text :show-name="false">
      {{ testimonialList[1] }}
      </template>
      </Testimonial>
    </noscript>
    <ContentSection id="premium-training" :bottom-margin="false">
      <div class="bg-so-blue text-white xs:-mx-12 px-4 sm:px-24">
        <TwoPanelDetailGraphic :alt="true">
          <template #section-heading>
            Premium Classes
          </template>
          <template #header-left>
            On Demand
          </template>
          <template #body-top-left>
            We offer online training via on-demand training modules.
            They are a cost-effective alternative to onsite training, but do not include the in-depth, hands-on labs that our onsite classes do.
          </template>
          <template #body-bottom-left>
            <div>
              The following on-demand training modules are pre-recorded and can be accessed immediately upon payment and for 60 days thereafter:
            </div>
            <div class="h-2" />
            <ul class="list-disc ml-6">
              <li>Security Onion 101: Introduction to Security Onion <span class="italic font-bold">Now Free!</span></li>
              <li>Security Onion 201: Best Practices for Production Deployments</li>
              <li>Security Onion 301: Best Practices for Distributed Deployments</li>
            </ul>
            <div class="h-2" />
            <div>
              <strong>Best value!</strong> Purchase all 3 classes in a discounted bundle!
            </div>
          </template>
          <template #graphic-left>
            <CircleGraphic
              file-name="undraw_researching_22gp.svg"
              :size="25"
            />
          </template>
          <template #left-button-text>
            Sign Up
          </template>
          <template #header-right>
            Instructor Led (virtual or onsite)
          </template>
          <template #body-top-right>
            We offer multi-day comprehensive training classes with lots of labs and real-world case studies for reinforcement!
            Students receive printed course materials and a Certificate of Completion ready to make their adversaries cry!
          </template>
          <template #body-bottom-right>
            Have at least 8 students and want private live instructor-led training delivered virtually or, when safe to do so, onsite at your facility?
          </template>
          <template #graphic-right>
            <CircleGraphic
              file-name="undraw_professor_8lrt.svg"
              :size="25"
            />
          </template>
          <template #right-button-text>
            Schedule
          </template>
        </TwoPanelDetailGraphic>
        <DetailPara class="mb-16 mt-10">
          <template #body>
            We are proud to offer GSA pricing through our partner IntelliGenesis!
            Eligible organizations, please
            <span class="hover:text-gray-900 cursor-pointer underline" @click="$nuxt.$emit('show-contact-modal')">click here</span>
            for more information.
          </template>
        </DetailPara>
      </div>
    </ContentSection>
    <ContentSection id="free-training" :bottom-margin="false">
      <section-header class="mb-16">
        Security Onion 101
      </section-header>
      <div class="flex justify-center mx-24 mb-12">
        <graphic class="graphic w-full md:w-1/2" />
      </div>
    </ContentSection>
    <div v-if="scheduleList.length !== 0">
      <ContentSection id="public-training" class="-mx-12">
        <!-- <training-table class="mx-12 lg:mx-48 xl:mx-64" :schedule-list="scheduleList" /> -->
        <!-- <div style="width:195px; text-align:center;">
          <iframe
            src="https://www.eventbrite.com/calendar-widget?eid=119250685009"
            frameborder="0"
            height="425"
            width="195"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            allowtransparency="true"
          /><div style="font-family:Helvetica, Arial; font-size:12px; padding:10px 0 5px; margin:2px; width:195px; text-align:center;">
            <a class="powered-by-eb" style="color: #ADB0B6; text-decoration: none;" target="_blank" href="http://www.eventbrite.com/">Powered by Eventbrite</a>
          </div>
        </div> -->
      </ContentSection>
      <div class="bg-so-blue text-white xs:-mx-12 py-12">
        <ActionCallout class="xs:px-24" :alt="true" @button-click="$nuxt.$emit('show-contact-modal')">
          <template #info>
            For more information about official training
          </template>
          <template #button-text>
            Contact Us
          </template>
        </ActionCallout>
      </div>
    </div>
  </div>
</template>

<script>
import TwoPanelDetailGraphic from '~/components/features/TwoPanelDetailGraphic'
import SectionHeader from '~/components/SectionHeader'
import Graphic from '~/components/GraphicPlaceholder'
import ActionCallout from '~/components/action_callouts/ActionCallout'

export default {
  scrollToTop: true,
  components: {
    TwoPanelDetailGraphic,
    SectionHeader,
    Graphic,
    ActionCallout
  },
  data: () => ({
    scheduleList: [],
    links: [{ name: 'Premium', id: 'premium-training' }, { name: 'Free', id: 'free-training' }, { name: 'Public', id: 'public-training' }],
    testimonialList: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, mi vitae varius iaculis, justo nisi rutrum sapien, suscipit feugiat turpis nisl a nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, mi vitae varius iaculis, justo nisi rutrum sapien, suscipit feugiat turpis nisl a nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, mi vitae varius iaculis, justo nisi rutrum sapien, suscipit feugiat turpis nisl a nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, mi vitae varius iaculis, justo nisi rutrum sapien, suscipit feugiat turpis nisl a nisl.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, mi vitae varius iaculis, justo nisi rutrum sapien, suscipit feugiat turpis nisl a nisl.'
    ]
  }),
  async beforeMount () {
    this.scheduleList = await this.fetchScheduleList()
  },
  methods: {
    fetchScheduleList () {
      return [
        {
          date: 'October XX-XX+1, 2020',
          location: 'Augusta, GA'
        },
        {
          date: 'October XX-XX+1, 2020',
          location: 'Augusta, GA'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Security Onion Solutions - Training'
    }
  }
}
</script>

<style scoped>
.graphic {
  height: 25rem;
  min-width: 25rem;
}
</style>
