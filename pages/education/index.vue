<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <div class="xs:px-12">
    <SubHero id="education" v-reveal.once class="hero reveal-scale">
      <template #header>
        <div>
          Security Onion
        </div>
        <div>
          for Higher Education
        </div>
      </template>
      <template #body>
        <div class="text-center">
          Prepare the next generation of threat hunters with the leading threat hunting platform
        </div>
      </template>
    </SubHero>
    <ContentSection id="overview" :alternate="true">
      <div class="flex flex-col items-center px-6 xs:px-12 lg:px-32 pb-4">
        <SectionHeader v-reveal class="mb-6">
          Using Security Onion in the Classroom
        </SectionHeader>
        <div class="text-lg text-center md:w-2/3 mb-12">
          <p>
            Join the ranks of universities and institutions for higher education around the world
            that use Security Onion to educate the next generation of cybersecurity professionals!
          </p>
        </div>
        <TwoPanelDetail v-reveal class="mt-12 reveal-scale">
          <template #header-left>
            Community Edition
          </template>
          <template #body-left>
            <p>
              Use the community edition in the classroom with no need for additional licensing. This version is perfect for introductory courses or scenarios where students are primarily focused on the core open-source toolset.
            </p>
            <p class="mt-4 mb-6">
              Since it's the exact same code used in the field, students get hands-on experience with the industry-standard platform with zero budget requirements or licensing overhead.
            </p>
            <div class="flex justify-center">
              <so-button alternate link="https://github.com/Security-Onion-Solutions/securityonion/blob/2.4/main/DOWNLOAD_AND_VERIFY_ISO.md">
                Download
              </so-button>
            </div>
          </template>
          <template #header-right>
            Security Onion Pro
          </template>
          <template #body-right>
            <p class="mb-6">
              Student and Instructor Licenses are available at a discount<span class="font-bold">*</span> from the retail price. With the rapid advances in AI students need to be trained on how to make use of this technology to find and stop bad actors quickly. Contact us to purchase academic licenses and provide your students access to cutting-edge Cyber Security features, including Onion AI, Connect API, and more. 
            </p>
            <div class="flex justify-center">
              <so-button alternate @click="handleContactClick('academic-pro', $event)">
                Contact Us
              </so-button>
            </div>
          </template>
        </TwoPanelDetail>
      </div>
    </ContentSection>
    <ContentSection>
      <div>
        <SectionHeader v-reveal class="mb-6">
          <div class="text-5xl">
            Frequently Asked Questions
          </div>
        </SectionHeader>
        <div class="flex flex-col items-center">
          <DetailPara v-reveal.once class="md:w-2/3 lg:w-1/2 mb-6 reveal-left stagger-1">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  What resources are available to help me learn about Security Onion?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  YouTube: <a href="https://securityonion.net/youtube" class="text-so-blue cursor-pointer hover:underline">securityonion.net/youtube</a>
                  <br>
                  Official Training: <nuxt-link to="/training" class="text-so-blue cursor-pointer hover:underline">securityonionsolutions.com/training</nuxt-link>
                </div>
              </div>
            </template>
          </DetailPara>
          <DetailPara v-reveal.once class="md:w-2/3 lg:w-1/2 mb-6 reveal-right stagger-2">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  Do you offer academic discounts on training?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  Our Essentials course is <nuxt-link :to="{ path: '/training',hash:'#free-training'}" class="text-so-blue cursor-pointer hover:underline"><span class="font-bold">FREE</span></nuxt-link>! For those looking to further their understanding of the Security Onion platform
                  we do offer academic discounts<span class="font-bold">*</span> on our on-demand training. <span class="link text-so-blue hover:underline cursor-pointer" @click="handleContactClick('discount', $event)">Contact us</span> for more information.
                </div>
              </div>
            </template>
          </DetailPara>
          <DetailPara v-reveal.once class="md:w-2/3 lg:w-1/2 mb-6 reveal-left stagger-3">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  I'm having trouble with Security Onion. How do I get help?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  We have excellent documentation available <a href="https://docs.securityonion.net/" class="text-so-blue cursor-pointer hover:underline">here</a>,
                  with its own FAQ <a href="https://docs.securityonion.net/faq" class="text-so-blue cursor-pointer hover:underline">here</a>.
                  For more information about support options, <nuxt-link to="/support" class="text-so-blue cursor-pointer hover:underline">click here</nuxt-link>. Alternatively, consider purchasing an academic Security Onion Pro license to have access to our support team as well as provide cutting edge Cyber Security features to your students.
                </div>
              </div>
            </template>
          </DetailPara>
          <DetailPara v-reveal.once class="md:w-2/3 lg:w-1/2 mb-6 reveal-right stagger-4">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  May I use Security Onion's documentation as part of my course?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  You are free to reference our documentation while teaching your course, but please check the
                  <a href="https://docs.securityonion.net/about#license" class="text-so-blue cursor-pointer hover:underline">documentation's license</a>
                  for further details.
                </div>
              </div>
            </template>
          </DetailPara>
          <DetailPara v-reveal.once class="md:w-2/3 lg:w-1/2 mb-6 reveal-left stagger-5">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  May I use Security Onion Solutions' paid course material as part of my course?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  Security Onion Solutions' paid course material is copyrighted and should not be re-used in any way without express written permission.
                </div>
              </div>
            </template>
          </DetailPara>
          <DetailPara v-reveal.once class="md:w-2/3 lg:w-1/2 mb-6 reveal-right stagger-6">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  How do I get someone to talk to my class about Security Onion?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  <span class="link text-so-blue hover:underline cursor-pointer" @click="handleContactClick('talk', $event)">Contact us</span> for more details.
                </div>
              </div>
            </template>
          </DetailPara>

          <SectionHeader v-reveal class="mt-16 mb-6">
            <div class="text-3xl">
              Security Onion Pro licensing
            </div>
          </SectionHeader>

          <DetailPara v-reveal.once class="md:w-2/3 lg:w-1/2 mb-6 reveal-left stagger-1">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  Will my students share a single license across their Security Onion installations?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  No, your sales representative will provide a license pack, containing the desired number of licenses needed for your classroom.
                </div>
              </div>
            </template>
          </DetailPara>

          <DetailPara v-reveal.once class="md:w-2/3 lg:w-1/2 mb-6 reveal-right stagger-2">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  Are Onion AI credits included?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  Yes, the students will all share a set of credits, while the instructor will have a separate set of credits.
                </div>
              </div>
            </template>
          </DetailPara>

          <DetailPara v-reveal.once class="md:w-2/3 lg:w-1/2 mb-6 reveal-left stagger-3">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  Can I request additional credits during the course?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  Yes, if you or your students use all the credits, contact us and we'll work with you to understand the expected credit needs for the remainder of the term.
                </div>
              </div>
            </template>
          </DetailPara>

          <DetailPara v-reveal.once class="md:w-2/3 lg:w-1/2 mb-6 reveal-right stagger-4">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  When will the licenses expire?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  Typically, the instructor license will remain valid for a year, while the student licenses will remain valid for the length of the semester. Our sales representatives will work with you if your course duration is not a typical semester in length.
                </div>
              </div>
            </template>
          </DetailPara>

          <DetailPara v-reveal.once class="md:w-2/3 lg:w-1/2 reveal-left stagger-5">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  How much will this cost?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  We want to ensure that the next generation of cyber security professionals are well-trained! We discount<span class="font-bold">*</span> academic licenses accordingly, to make this possible. <span class="link text-so-blue hover:underline cursor-pointer" @click="handleContactClick('academic-pro', $event)">Contact us</span> today to learn more.
                </div>
              </div>
            </template>
          </DetailPara>
          <div class="md:w-1/2 lg:w-1/3 mt-16">
            <div class="flex flex-row space-x-1 ml-2">
              <div class="font-bold">*</div>
              <div class="text-left">
                Discounts are available to faculty of accredited institutions in the US, and their students, subject to limitations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection id="education_info" :alternate="true">
      <div class=" px-6 xs:px-12 lg:px-32">
        <action-callout :alternate="true" class="-mt-4" @button-click="sos.showContactModal({ text: 'Please contact me with more information about using Security Onion in my classroom.', source: 'education_general_contact_us' })">
          <template #info>
            <div class="text-2xl flex justify-center">
              <div>
                Have more questions about teaching using Security Onion?
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
  </div>
</template>

<script>
import { sos } from '~/lib/sos.js'

import ActionCallout from '~/components/action_callouts/ActionCallout'  
import DetailPara from '~/components/features/DetailPara'
import SubHero from '~/components/hero/SubHero'
import SoButton from '~/components/SoButton'
import TwoPanelDetail from '~/components/features/TwoPanelDetail'

export default {
  data: () => ({
    sos,
  }),
  components: {
    ActionCallout,
    DetailPara,
    SubHero,
    SoButton,
    TwoPanelDetail,
  },
  methods: {
    handleContactClick (messageType, event) {
      if (event) { event.preventDefault() }
      if (messageType === 'discount') {
        sos.showContactModal({ text: 'Please contact me with more information about academic discounts on official Security Onion training.', source: 'education_discount_contact_us' })
      } else if (messageType === 'talk') {
        sos.showContactModal({ text: 'Please contact me with more information about Security Onion Solutions speaking to my classroom.', source: 'education_speaking_contact_us' })
      } else if (messageType === 'academic-pro') {
        sos.showContactModal({ text: 'Please contact me with more information about Security Onion Pro licensing for higher education.', source: 'education_academic_pro_contact_us' })
      }
    }
  }
}
</script>

<style scoped>
.hero {
  background: right center no-repeat url('/img/graphics/education_hero.png');
  background-size: cover;
}
</style>
