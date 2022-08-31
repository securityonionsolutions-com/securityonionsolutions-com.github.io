<template>
  <div class="xs:px-12">
    <PageNav page-name="Security Onion" :links="links" />
    <SubHero id="download-before" class="hero-software">
      <template #header>
        License
      </template>
      <template #body>
        <div class="text-center">
          Security Onion 2.4 is licensed under the terms of the Elastic License 2.0 (ELv2)
        </div>
      </template>
    </SubHero>
    <ContentSection id="overview" :alternate="true">
      <div class="text-xl px-6 xs:px-12 lg:px-32">
        <div class="text-4xl mt-8 mb-3">
          Elastic License 2.0 (ELv2)
        </div>

        <div class="text-3xl mt-8 mb-3">
          Acceptance
        </div>
        By using the software, you agree to all of the terms and conditions below.

        <div class="text-3xl mt-8 mb-3">
          Copyright License
        </div>
        The licensor grants you a non-exclusive, royalty-free, worldwide, non-sublicensable, non-transferable license to use, copy, distribute, make available, and prepare derivative works of the software, in each case subject to the limitations and conditions below.

        <div class="text-3xl mt-8 mb-3">
          Limitations
        </div>
        You may not provide the software to third parties as a hosted or managed service, where the service provides users with access to any substantial set of the features or functionality of the software.
        <p class="mb-3" />
        You may not move, change, disable, or circumvent the license key functionality in the software, and you may not remove or obscure any functionality in the software that is protected by the license key.
        <p class="mb-3" />
        You may not alter, remove, or obscure any licensing, copyright, or other notices of the licensor in the software. Any use of the licensor’s trademarks is subject to applicable law.

        <div class="text-3xl mt-8 mb-3">
          Patents
        </div>
        The licensor grants you a license, under any patent claims the licensor can license, or becomes able to license, to make, have made, use, sell, offer for sale, import and have imported the software, in each case subject to the limitations and conditions in this license. This license does not cover any patent claims that you cause to be infringed by modifications or additions to the software. If you or your company make any written claim that the software infringes or contributes to infringement of any patent, your patent license for the software granted under these terms ends immediately. If your company makes such a claim, your patent license ends immediately for work on behalf of your company.

        <div class="text-3xl mt-8 mb-3">
          Notices
        </div>
        You must ensure that anyone who gets a copy of any part of the software from you also gets a copy of these terms.
        <p class="mb-3" />
        If you modify the software, you must include in any modified copies of the software prominent notices stating that you have modified the software.

        <div class="text-3xl mt-8 mb-3">
          No Other Rights
        </div>
        These terms do not imply any licenses other than those expressly granted in these terms.

        <div class="text-3xl mt-8 mb-3">
          Termination
        </div>
        If you use the software in violation of these terms, such use is not licensed, and your licenses will automatically terminate. If the licensor provides you with a notice of your violation, and you cease all violation of this license no later than 30 days after you receive that notice, your licenses will be reinstated retroactively. However, if you violate these terms after such reinstatement, any additional violation of these terms will cause your licenses to terminate automatically and permanently.

        <div class="text-3xl mt-8 mb-3">
          No Liability
        </div>
        <b><i>As far as the law allows, the software comes as is, without any warranty or condition, and the licensor will not be liable to you for any damages arising out of these terms or the use or nature of the software, under any kind of legal claim.</i></b>

        <div class="text-3xl mt-8 mb-3">
          Definitions
        </div>
        The <b>licensor</b> is the entity offering these terms, and the <b>software</b> is the software the licensor makes available under these terms, including any portion of it.
        <p class="mb-3" />
        <b>you</b> refers to the individual or entity agreeing to these terms.
        <p class="mb-3" />
        <b>your company</b> is any legal entity, sole proprietorship, or other kind of organization that you work for, plus all organizations that have control over, are under the control of, or are under common control with that organization. <b>control</b> means ownership of substantially all the assets of an entity, or the power to direct its management and policies by vote, contract, or otherwise. Control can be direct or indirect.
        <p class="mb-3" />
        <b>your licenses</b> are all the licenses granted to you for the software under these terms.
        <p class="mb-3" />
        <b>use</b> means anything you do with the software requiring one of your licenses.
        <p class="mb-3" />
        <b>trademark</b> means trademarks, service marks, and similar rights.
      </div>
    </ContentSection>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  components: {
  },
  data: () => ({
    links: []
  })
}
</script>

<style scoped>
.hero-software {
  background: right bottom no-repeat url(~assets/img/graphics/chevrons.jpg);
}
</style>
