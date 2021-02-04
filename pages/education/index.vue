<template>
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
          Use the leading free and open threat hunting tool in your classrom
        </div>
      </template>
    </SubHero>
    <ContentSection id="overview" :alternate="true">
      <div class="flex flex-col items-center bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32 pb-4">
        <SectionHeader class="mb-6">
          Using Security Onion in the Classroom
        </SectionHeader>
        <div class="text-lg text-center w-2/3">
          <p class="mb-4">
            Join the ranks of universities and educational institutions around the world
            that use Security Onion to educate the next generation of cybersecurity professionals.
          </p>
          <p>
            Our OSS license is perfectly suited for the classrom, no need to purchase or apply for special educational licenses
            for educators or students. The version of Security Onion you use to teach is the same one that students will use
            once they graduate.
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
                  Do you offer academic discounts on training?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  Our Essentials course is <span class="font-bold">FREE</span>! For those looking to further their understanding of the Security Onion platform
                  we do offer academic discounts<span class="font-bold">*</span> on our online training.
                </div>
              </div>
            </template>
          </DetailPara>
          <DetailPara class="md:w-2/3 lg:w-1/2">
            <template #header>
              <div class="flex flex-row space-x-2">
                <div>Q:</div>
                <div class="text-left">
                  Can I use Security Onion's documentation as part of my course?
                </div>
              </div>
            </template>
            <template #body>
              <div class="flex flex-row space-x-2 ml-2">
                <div>A:</div>
                <div class="text-left">
                  You are free to reference our documentation while teaching your course, but please check the documentation's license for further details.
                  Notably, you may not copy our documentation verbatim to use as the course content. Please treat it as reference material only.
                </div>
              </div>
            </template>
          </DetailPara>
          <div class="md:w-1/2 lg:w-1/3 mt-16">
            <div class="flex flex-row space-x-2 ml-2">
              <div>*</div>
              <div class="text-left">
                Discounts are available to students and faculty of accredited institutions, subject to discretion.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
    <ContentSection id="education_info" :alternate="true">
      <div class="bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <action-callout :alternate="true" class="-mt-4" @button-click="$nuxt.$emit('show-contact-modal', { text: 'Please contact me with more information about using Security Onion in my classroom.', source: 'education_contact_us' })">
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
}
</script>

<style scoped>
.hero {
  background: right bottom no-repeat url(~assets/img/graphics/squares.jpg);
}
</style>
