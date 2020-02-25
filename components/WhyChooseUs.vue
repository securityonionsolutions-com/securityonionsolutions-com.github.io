<template>
  <div class="subsection">
    <h3 class="header" style="padding-top: 2em">Why choose us?</h3>
    <el-row class="choose-us">
      <el-col :span="24" :lg="20">
        <p>
          We created and maintain Security Onion, so we know it better than
          anybody else
        </p>
        <img
          class="hidden-sm-and-up"
          :src="require('../assets/onion.svg')"
          alt="onion-svg"
          width="8em"
        />
        <p>
          We're the only official authorized training provider for Security
          Onion
        </p>
        <img
          class="hidden-sm-and-up"
          :src="require('../assets/onion.svg')"
          alt="onion-svg"
          width="8em"
        />
        <p>
          Our instructors are the only Security Onion Certified Instructors in
          the world
        </p>
        <img
          class="hidden-sm-and-up"
          :src="require('../assets/onion.svg')"
          alt="onion-svg"
          width="8em"
        />
        <p>
          Our course material is the only authorized training material for
          Security Onion
        </p>
        <img
          class="hidden-sm-and-up"
          :src="require('../assets/onion.svg')"
          alt="onion-svg"
          width="8em"
        />
        <p>
          We've been teaching Security Onion classes and providing Professional
          Services since 2014
        </p>
        <img
          class="hidden-sm-and-up"
          :src="require('../assets/onion.svg')"
          alt="onion-svg"
          width="8em"
        />
        <p>
          We offer custom appliances selected from our years of experience to
          fit many different scenarios
        </p>
        <img
          class="hidden-sm-and-up"
          :src="require('../assets/onion.svg')"
          alt="onion-svg"
          width="8em"
        />
        <p>
          When you purchase products and services from us, you're helping to
          fund development of Security Onion!
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'WhyChooseUs'
}
</script>

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

.subsection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  width: 100%;
  ul {
    text-align: center;
    list-style-position: inside;
    padding-left: 0;
    li {
      font-size: large;
      padding-top: 0.25em;
      padding-bottom: 0.25em;
    }
  }
}
.header {
  font-size: 2.5em;
  font-weight: bold;
  padding-top: 0 !important;
  margin-top: 1em;
  margin-bottom: 0.5em;
  justify-content: flex-end;
}
.choose-us {
  text-align: center;
  font-size: large;
  display: block;
  @media (min-width: $--sm) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
</style>
