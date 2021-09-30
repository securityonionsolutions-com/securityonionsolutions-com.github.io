<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <div class="xs:px-12">
    <SubHero id="download-before" class="hero">
      <template #header>
        <div>
          Security Onion
        </div>
        <div>
          For Education
        </div>
      </template>
      <template #body>
        <div class="text-center">
          Use the leading free and open threat hunting tool in your classroom
        </div>
      </template>
    </SubHero>
    <ContentSection id="overview" :alternate="true">
      <div class="flex flex-col items-center px-6 xs:px-12 lg:px-32 pb-4">
        <SectionHeader class="mb-6">
          Using Security Onion in the Classroom
        </SectionHeader>
        <div class="text-lg text-center w-2/3">
          <p class="mb-4">
            Join the ranks of universities and institutions for higher education around the world
            that use Security Onion to educate the next generation of cybersecurity professionals!
          </p>
          <p>
            The Security Onion free and open license is perfectly suited for classroom use.
            No need to purchase or apply for special educational licenses for educators or students.
            The version of Security Onion used in the classroom is the same one used to defend enterprise networks around the world!
          </p>
        </div>
      </div>
    </ContentSection>
    <ContentSection>
      <div>
        <SectionHeader class="mb-6">
          <div class="text-5xl">
            FAQ
          </div>
        </SectionHeader>
        <div class="flex flex-col items-center">
          <DetailPara class="md:w-2/3 lg:w-1/2 mb-6">
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
          <DetailPara class="md:w-2/3 lg:w-1/2 mb-6">
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
                  Our Essentials course is <span class="font-bold">FREE</span>! For those looking to further their understanding of the Security Onion platform
                  we do offer academic discounts<span class="font-bold">*</span> on our on-demand training. <span class="link text-so-blue hover:underline cursor-pointer" @click="handleContactClick('discount', $event)">Contact us</span> for more information.
                </div>
              </div>
            </template>
          </DetailPara>
          <DetailPara class="md:w-2/3 lg:w-1/2 mb-6">
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
                  with its own FAQ <a href="https://docs.securityonion.net/en/2.3/faq.html" class="text-so-blue cursor-pointer hover:underline">here</a>.
                  For more information about support options, <nuxt-link to="/support" class="text-so-blue cursor-pointer hover:underline">click here</nuxt-link>.
                </div>
              </div>
            </template>
          </DetailPara>
          <DetailPara class="md:w-2/3 lg:w-1/2 mb-6">
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
                  <a href="https://docs.securityonion.net/en/2.3/about.html#license" class="text-so-blue cursor-pointer hover:underline">documentation's license</a>
                  for further details.
                </div>
              </div>
            </template>
          </DetailPara>
          <DetailPara class="md:w-2/3 lg:w-1/2 mb-6">
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
          <DetailPara class="md:w-2/3 lg:w-1/2">
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
          <div class="md:w-1/2 lg:w-1/3 mt-16">
            <div class="flex flex-row space-x-2 ml-2">
              <div>*</div>
              <div class="text-left">
                Discounts are available to students and faculty of accredited institutions, subject to limitations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection id="education_info" :alternate="true">
      <div class="px-6 xs:px-12 lg:px-32">
        <action-callout :alternate="true" class="-mt-4" @button-click="$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about using Security Onion in my classroom.', source: 'education_general_contact_us' })">
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
export default {
  methods: {
    handleContactClick (messageType, event) {
      if (event) { event.preventDefault() }
      if (messageType === 'discount') {
        this.$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about academic discounts on official Security Onion training.', source: 'education_discount_contact_us' })
      } else if (messageType === 'talk') {
        this.$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about Security Onion Solutions speaking to my classroom.', source: 'education_speaking_contact_us' })
      }
    }
  }
}
</script>

<style scoped>
.hero {
  background: right bottom no-repeat url(~assets/img/graphics/squares.jpg);
}
</style>
