<template>
  <div class="xs:px-12">
    <PageNav page-name="Training" :links="links" />
    <SubHero class="hero-training text-center">
      <template #header>
        Official Training
      </template>
      <template #body>
        <div class="justify-center">
          <div class="flex flex-row text-2xl justify-center">
            Security Onion Solutions is the only official training provider of the Security Onion software.
          </div>
          <div class="flex flex-row text-xl font-light justify-center mt-8">
            Choose from On-Demand (Free and Premium) or Instructor Led training.
          </div>
        </div>
      </template>
    </SubHero>

    <ContentSection id="free-training" :alt="true">
      <div class="bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <section-header class="mb-6">
          Free On-Demand
        </section-header>
        <div class="text-center text-base xs:text-lg mb-16">
          <p>
            Get started by taking the <span class="italic">free</span> <span class="font-semibold">Security Onion 2 Essentials</span> training.
          </p>
          <p>
            This course is a prerequisite to the premium on-demand courses.
          </p>
        </div>
        <div class="flex justify-center video-container">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLljFlTO9rB155aYBjHw2InKkSMLuhWpxH"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    </ContentSection>

    <ContentSection id="premium-on-demand">
      <div class="xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <section-header class="mb-6">
          Premium On-Demand
        </section-header>
        <div class="text-left text-xl">
          We offer online training via on-demand training modules.
          They are a cost-effective alternative to instructor led training, but do not include the in-depth, hands-on labs that our instructor led classes offer.
        </div>
        <div class="text-left text-xl mt-6">
          We currently provide training for both the new Security Onion 2, and existing Security Onion 16.04.
        </div>
        <feature-left class="my-6">
          <template #header>
            <div class="text-center xs:text-left">
              Security Onion 2
            </div>
          </template>
          <template #graphic>
            <CircleGraphic
              class="shadow-xl"
              file-name="training1.jpg"
              :size="20"
            />
          </template>
          <template #body>
            <div class="text-left">
              Courses include:
              <ul class="list-disc ml-6 mb-6">
                <li class="my-2">
                  Security Onion 2 in Production <span class="bg-gray-200  text-sm text-red-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap">Coming Soon</span>
                </li>
                <li class="my-2">
                  Developing Your Detection Pipeline With Security Onion 2 <span class="bg-gray-200 text-sm text-red-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap">Coming Soon</span>
                </li>
              </ul>
            </div>
            <div class="align-center hidden">
              <action-callout class="my-12" link="https://onlinetraining.securityonionsolutions.com/">
                <template #button-text>
                  <div class="text-lg my-1">
                    Get Started
                  </div>
                </template>
              </action-callout>
            </div>
          </template>
        </feature-left>
        <feature-right class="my-6">
          <template #header>
            <div class="text-center xs:text-left">
              Security Onion 16.04 (legacy)
            </div>
          </template>
          <template #graphic>
            <CircleGraphic
              class="shadow-xl"
              file-name="training2.jpg"
              :padding="false"
              :size="20"
            />
          </template>
          <template #body>
            <div class="text-left">
              Courses include:
              <ul class="list-disc ml-6">
                <li class="my-1">
                  Security Onion 101: Introduction to Security Onion
                </li>
                <li class="my-1">
                  Security Onion 201: Best Practices for Production Deployments
                </li>
                <li class="my-1">
                  Security Onion 301: Best Practices for Distributed Deployments
                </li>
              </ul>
            </div>
            <div class="text-left mt-4">
              <strong>Best value!</strong> Purchase all three classes in a discounted bundle and get 30 days additional access!
            </div>
          </template>
        </feature-right>
        <action-callout class="my-12" link="https://onlinetraining.securityonionsolutions.com/">
          <template #info>
            <div>
              Ready to check out the course details?
            </div>
          </template>
          <template #button-text>
            <div class="text-lg my-1">
              Get Started
            </div>
          </template>
        </action-callout>
      </div>
    </ContentSection>

    <ContentSection id="instructor-training" :alt="true">
      <div class="bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <section-header class="mb-6">
          Instructor Led Training
        </section-header>
        <feature-right class="xs:mb-12" :text-margin="true">
          <template #graphic>
            <CircleGraphic
              file-name="workbook.jpg"
              :size="20"
            />
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              We offer multi-day comprehensive training classes with hands-on labs and real-world case studies for reinforcement!
              Students receive printed course materials and a Certificate of Completion ready to make their adversaries cry!
            </div>
            <action-callout :alt="true" class="my-6" @button-click="$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about private training classes.', source: 'training_private_contact_us' })">
              <template #info>
                <div class="text-xl">
                  Have at least 8 students and want private instructor-led training?
                </div>
              </template>
              <template #button-text>
                <div class="text-lg my-1">
                  Find Out How
                </div>
              </template>
            </action-callout>
          </template>
        </feature-right>
        <DetailPara class="mb-16 mt-10">
          <template #body>
            We are proud to offer GSA pricing through our partner IntelliGenesis!
            Eligible organizations, please
            <span class="hover:text-gray-900 cursor-pointer underline" @click="$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about GSA pricing.', source: 'GSA_pricing_info' })">contact us</span>
            for more information.
          </template>
        </DetailPara>
      </div>
    </ContentSection>
    <ContentSection id="public-training">
      <div class="xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <section-header class="mb-6">
          Upcoming Instructor Led Training Events
        </section-header>
        <div class="flex justify-center">
          <training-table v-if="scheduleList.length !== 0" class="mx-2 xs:mx-12 lg:mx-24 xl:mx-32 w-full" :schedule-list="scheduleList" />
          <div v-if="scheduleList.length == 0" class="text-xl">
            No classes are currently scheduled.
          </div>
        </div>
      </div>
    </ContentSection>

    <ContentSection id="testimonials" :alt="true">
      <div class="bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <SectionHeader class="mb-6">
          Student Feedback
        </SectionHeader>
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
      </div>
    </ContentSection>
  </div>
</template>

<script>
import SectionHeader from '~/components/SectionHeader'

export default {
  scrollToTop: true,
  components: {
    SectionHeader
  },
  data: () => ({
    scheduleList: require('@/content/training_schedule.json').events,
    links: [{ name: 'Free', id: 'free-training' }, { name: 'Premium', id: 'premium-on-demand' }, { name: 'Instructor Led', id: 'instructor-training' }],
    testimonialList: [
      'I needed this class. This is the best instruction of SO and dedicated time to it that I have ever had.',
      'One can tell they\'re not just instructors. They know the subject at an engineering level.',
      'I\'ve really been impressed by how this training event went. Outstanding job',
      'It\'s very very rare that I get to be in a class with practitioners that are as awesome and knowledgeable as Security Onion Solutions.',
      'The labs were absolutely necessary and going through the case studies to "find evil" was the best.'
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
.hero-training {
  background: right bottom no-repeat url(~assets/img/graphics/dots.jpg);
}
</style>
