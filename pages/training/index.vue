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
    <div class="text-center font-semibold text-xl xs:text-3xl mb-4 mx-4 xs:mx-0">
      See what some of our recent students have had to say:
    </div>
    <client-only>
      <TestimonialList :list="testimonialList" />
    </client-only>
    <noscript inline-template>
      <Testimonial>
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
            <span class="hover:text-gray-900 cursor-pointer underline" @click="$nuxt.$emit('show-contact-modal')">contact us</span>
            for more information.
          </template>
        </DetailPara>
      </div>
    </ContentSection>
    <ContentSection id="free-training" :bottom-margin="false">
      <section-header class="mb-2">
        Security Onion 101
      </section-header>
      <div class="text-center text-base xs:text-lg mb-16">
        Our Intro to Security Onion course is now free to watch, check it out
      </div>
      <div class="flex justify-center">
        <GraphicPlaceholder class="video-placeholder">
          Coming Soon
        </GraphicPlaceholder>
      </div>
    </ContentSection>
    <ContentSection id="public-training" class="xs:-mx-12" :bottom-margin="false">
      <div class="flex justify-center">
        <training-table v-if="scheduleList.length !== 0" class="mx-2 xl:w-1/2 xs:mx-12 lg:mx-48 xl:mx-64" :schedule-list="scheduleList" />
      </div>
      <div class="bg-so-blue text-white py-12">
        <ActionCallout class="xs:px-24" :alt="true" @button-click="$nuxt.$emit('show-contact-modal')">
          <template #info>
            For more information about official training
          </template>
          <template #button-text>
            Contact Us
          </template>
        </ActionCallout>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import TwoPanelDetailGraphic from '~/components/features/TwoPanelDetailGraphic'
import SectionHeader from '~/components/SectionHeader'
import ActionCallout from '~/components/action_callouts/ActionCallout'

export default {
  scrollToTop: true,
  components: {
    TwoPanelDetailGraphic,
    SectionHeader,
    ActionCallout
  },
  data: () => ({
    scheduleList: require('@/content/training_schedule.json').events,
    links: [{ name: 'Premium', id: 'premium-training' }, { name: 'Free', id: 'free-training' }, { name: 'Public', id: 'public-training' }],
    testimonialList: [
      'I needed this class. This is the best instruction of SO and dedicated time to it that I have ever had.',
      'One can tell they\'re not just instructors. They know the subject at an engineering level.',
      // 'It probably looks like I just ran through this quickly and selected "Excellent" for everything but I truly believe this was superb training! The instructors really knew what they were talking about and were not afraid to expand on anything or go off the slides. I\'ve really been impressed by how this training event went. Outstanding job',
      'You guys are impressive. It\'s very very rare that I get to be in a class with practitioners that are as awesome and knowledgeable as Security Onion Solutions. Thanks so much.',
      // 'Virtual hands on really helped reduce the burden on the students to have hardware. The labs were absolutely necessary and going through the case studies to "find evil" was the best. We first tried to do it and then the instructor showing us what we missed was most beneficial.',
      'They kept me engaged with my ADD -- not an easy task!'
    ]
  }),
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
.video-placeholder {
  width: 48rem;
  height: 27rem;
}
</style>
