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
            Choose from On-Demand (Free and Premium) or Instructor-Led training.
          </div>
        </div>
      </template>
    </SubHero>
    <ContentSection id="training-info" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <feature-left class="xs:mb-12" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Instructor-Led Training
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                file-name="bryant_classroom_close.jpg"
                :size="20"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              In-person classes are multi-day comprehensive training courses which include many hands-on labs. Each course is designed with real-world examples and case studies that reinforce Security Onion work role tasks. Each instructor-led course provides in-depth content with a hands-on approach to learning. You will learn methods and techniques to sift through your data to find anomalies, malicious traffic, and then action on the results.
              Students receive printed course materials and a Certificate of Completion to show they are ready to make their adversaries cry!
            </div>
          </template>
        </feature-left>
        
        <feature-right class="xs:mb-20" :text-margin="true">
          <template #header>
            <div class="text-center xs:text-left">
              Premium On-Demand
            </div>
          </template>
          <template #graphic>
            <div>
              <Graphic
                class="shadow-xl rounded-md overflow-hidden"
                :padding="false"
                :size="20"
                file-name="training1.jpg"
                :clickable="true"
              />
            </div>
          </template>
          <template #body>
            <div class="text-center xs:text-left">
              We also offer online training via On-Demand training modules.
              They are a cost-effective alternative to instructor-led training, but do not include the hands-on labs that our instructor-led classes offer. The On-Demand courses demonstrate techniques that you will be able to implement immediately. The On-Demand content allows you to learn at your own pace and repeat sections as often as you would like. Students have six months access to each course to take at their own pace.
            </div>
          </template>
        </feature-right>
        <feature-left>
          <template #header>
            <div class="text-3xl mb-6 text-center">
              F.A.Q.
            </div>
          </template>
          <template #body>
            <div class="flex flex-col text-left">
              <div>
                Q: Who teaches the On-Demand and Instructor-Led courses?<br>
                A: Courses are taught by Security Onion Certified Instructors.<br><br>
                Q: Do I need a computer to attend training in person?<br>
                A: Security Onion Solutions provides student computers for in-person classes and a cloud lab environment for virtual classes.<br><br>
                Q: What materials will I need for the course?<br>
                A: All students in instructor-led courses receive official course material on the first day of class.<br><br>
                Q: How long do I have access to the On-Demand courses?<br>
                A: You will have full access for 6 months after purchase.<br><br>
              </div>
              <action-callout :alternate="true" @button-click="sos.showContactModal({ text: 'Please contact me to discuss Security Onion training opportunities.' })">
                <template #button-text>
                  <div class="text-lg my-2">
                  Still have a question?
                  </div>
                </template>
              </action-callout>
            </div>
          </template>
          <template #graphic>
            <div class="lg:-ml-0">
              <Graphic
                class="shadow-xl rounded-xl overflow-hidden"
                :size="20"
                file-name="sos-site-header-2-square.jpg"
              />
            </div>
          </template>
        </feature-left>
      </div>
    </ContentSection>
    <ContentSection id="courses">
      <div class="flex flex-col items-center justify-center mx-1 xs:-mx-10 sm:mx-0">
        <CourseGrid />
      </div>
    </ContentSection>
    <ContentSection id="courseregistration" :alternate="true">
      <div class="text-2xl justify-left text-center px-12 xs:px-12 lg:px-32 -my-4">
        <div>
          We are proud to offer GSA pricing through our partner IntelliGenesis!
          Eligible organizations, please contact us for more information.<br>
          <action-callout :alternate="true" class="my-12" @button-click="sos.showContactModal({ text: 'Please contact me with more information about GSA pricing on live training classes.', source: 'GSA_pricing_info' })">
            <template #button-text>
              <div class="text-lg my-2">
                <div>
                 Contact Us
                </div>
              </div>
            </template>
          </action-callout>
        </div>
      </div>
    </ContentSection>
    <ContentSection id="public-training">
      <div class="xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <section-header class="mb-6">
          Upcoming Instructor-Led Training Events
        </section-header>
        <div class="flex justify-center">
          <training-table v-if="scheduleList.length !== 0" class="mx-2 xs:mx-12 lg:mx-24 xl:mx-32 w-full" :schedule-list="scheduleList" />
          <div v-if="scheduleList.length == 0" class="text-xl">
            No classes are currently scheduled.
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection id="free-training" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
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
            src="https://www.youtube.com/embed/watch?list=PLljFlTO9rB17azL-HwV4BUWUv7Egmcx3T"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'

import ActionCallout from '~/components/action_callouts/ActionCallout'
import FeatureLeft from '~/components/features/FeatureLeft.vue'
import FeatureRight from '~/components/features/FeatureRight'
import SectionHeader from '~/components/SectionHeader'
import SubHero from '~/components/hero/SubHero'
import CourseGrid from '~/components/courses/CourseGrid'
import FeatureLeftAction from '~/components/features/FeatureLeftAction.vue'

import events from '~/content/training_schedule.json'
import FeatureRightAction from '~/components/features/FeatureRightAction.vue'

export default {
  scrollToTop: true,
  components: {
    CourseGrid,
    SubHero,
    ActionCallout,
    FeatureRight,
    FeatureLeft,
    FeatureLeftAction,
    FeatureRightAction
},
  data: () => ({
    sos,
    scheduleList: events.events,
    links: [{ name: 'Free', id: 'free-training' }, { name: 'Training Info', id: 'training-info' }, { name: 'Course Details', id: 'courses' }, { name: 'Public Courses', id: 'public-training'}],
  }),
  head () {
    return {
      title: 'Security Onion Solutions'
    }
  }
}
</script>

<style scoped>
.hero-training {
  background: right bottom no-repeat url('/img/graphics/training_bg.png');
}

</style>

