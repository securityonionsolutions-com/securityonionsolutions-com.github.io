<template>
  <div class="xs:px-12">
    <PageNav page-name="Security Onion" :links="links" />
    <SubHero id="download-before" class="hero-software">
      <template #header>
        Terms and Conditions
      </template>
      <template #body>
        <div class="text-center">
          Updated on 10/21/2020
        </div>
      </template>
    </SubHero>
    <ContentSection id="overview" :alternate="true">
      <div class="bg-so-blue text-xl text-white xs:-mx-12 px-6 xs:px-12 lg:px-32">
        <div class="text-3xl mt-8 mb-3">
          License
        </div>
        This product is licensed under the GNU General Public License version 2.0 (GPLv2)

        <div class="text-3xl mt-8 mb-3">
          Disclaimer of Warranty
        </div>
        THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM .AS IS. WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

        <div class="text-3xl mt-8 mb-3">
          Limitation of Liability
        </div>
        IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
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
  background: right bottom no-repeat url(~assets/img/graphics/terms.jpg);
}
</style>
