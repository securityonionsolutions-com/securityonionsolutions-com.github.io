<template>
  <el-main>
    <div class="wrapper">
      <div id="hero" class="hero">
        <hero-image />
      </div>

      <div class="caption hidden-xl-only">
        <h1 class="caption-text">
          " We help you peel back the layers of your enterprise "
        </h1>
      </div>

      <sos-divider />

      <el-row class="width-fix" type="flex" justify="center">
        <el-col
          :span="24"
          style="display: flex; align-items: center; flex-direction: column; text-align: center"
        >
          <p class="blurb">
            We are the builders of Security Onion, a free and open source
            platform for threat hunting, network security monitoring, and log
            management. Security Onion includes best-of-breed open source tools
            such as Snort, Suricata, Zeek, Wazuh, the Elastic Stack, and many
            other security tools.
          </p>
          <p class="blurb">
            Security Onion Solutions offers appliances and professional services
            centered around the Security Onion platform, and is the only
            provider of official Security Onion training.
          </p>
        </el-col>
      </el-row>

      <div id="why-choose-us" class="width-fix" style="margin-top: 3em">
        <why-choose-us />
      </div>

      <sos-divider :small-divider="true" />

      <el-card class="width-fix" style="margin-bottom: 1em; padding: 1.5em 0">
        <div style="display: flex; flex-direction: column; align-items: center">
          <div id="training" class="section">
            <h1 class="section-header">
              Training
            </h1>
            <div style="width: 5%; margin: 0">
              <el-divider />
            </div>
            <split-content-component
              :column-size="{ left: 24, right: 24 }"
              :hide-divider="true"
            >
              <template slot="left-content">
                <div class="subsection">
                  <div style="width: 80%; margin-bottom: 2.5em">
                    <span style="display: flex; align-items: center">
                      <i :class="training[1].iconType" class="sos_icon" />
                      <h3 class="section-header">{{ training[1].title }}</h3>
                    </span>
                    <service-info :service="training[1]" />
                  </div>
                </div>
              </template>
              <template slot="right-content">
                <div class="subsection">
                  <div style="width: 80%">
                    <span style="display: flex; align-items: center">
                      <i :class="training[0].iconType" class="sos_icon" />
                      <h3 class="section-header">{{ training[0].title }}</h3>
                    </span>
                    <service-info :service="training[0]" />
                  </div>
                </div>
              </template>
            </split-content-component>
          </div>

          <sos-divider />

          <div id="hardware" class="section">
            <div
              style="display: flex; flex-direction: column; align-items: center; width: 80%"
            >
              <span
                style="display: flex; flex-direction: column; align-items: center; margin-bottom: 0.75em; text-align: center"
              >
                <icon
                  :icon-type="services[0].iconType"
                  :icon-size="2"
                  style="margin-bottom: 1em"
                />
                <h2 class="section-header">{{ services[0].title }}</h2>
              </span>
              <div
                style="display: flex; flex-direction: column; align-items: center; margin-top: 2em"
              >
                <service-info :service="services[0]" />
              </div>
            </div>
          </div>

          <sos-divider />

          <div id="profserv" class="section">
            <div
              style="display: flex; flex-direction: column; align-items: center; width: 80%"
            >
              <span
                style="display: flex; flex-direction: column; align-items: center; margin-bottom: 0.75em; text-align: center"
              >
                <icon
                  :icon-type="services[1].iconType"
                  :icon-size="3"
                  style="margin-bottom: 1em"
                />
                <h2 class="section-header">{{ services[1].title }}</h2>
              </span>
              <div
                style="display: flex; flex-direction: column; align-items: center; margin-top: 2em"
              >
                <service-info :service="services[1]" />
              </div>
            </div>
          </div>
        </div>
      </el-card>

      <sos-divider />

      <div id="about-us" class="section">
        <split-content-component
          :column-size="{ left: 12, right: 12 }"
          style="width: 100%"
        >
          <template slot="left-content">
            <div
              style="display: flex; align-items: center; flex-direction: column"
            >
              <h1 class="section-header">Our Team</h1>
              <el-row
                type="flex"
                justify="center"
                :gutter="40"
                class="employee-list"
              >
                <el-col
                  v-for="(employee, index) in employees"
                  :key="index"
                  style="margin-bottom: 2em; width: auto;"
                  :span="4"
                >
                  <empl-info-card :employee="employee" />
                </el-col>
              </el-row>
            </div>
          </template>
          <template slot="right-content">
            <div
              style="display: flex; align-items: center; flex-direction: column"
            >
              <h1 class="section-header">Our History</h1>
              <el-row type="flex" justify="center" class="timeline">
                <el-col>
                  <company-history-timeline />
                </el-col>
              </el-row>
            </div>
          </template>
        </split-content-component>
      </div>

      <sos-divider />

      <div id="partners" class="section" style="margin-bottom: 1em">
        <h1 class="section-header" style="margin-bottom: 0.5em">
          Our Partners
        </h1>
        <el-row :gutter="100" style="width: 90%;" class="logo-block">
          <el-col
            v-for="(logo, index) in logos"
            :key="index"
            class="logos"
            :xs="24"
            :sm="12"
            :md="8"
            :xl="4"
          >
            <sos-partner-logo :logo="logo"></sos-partner-logo>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-main>
</template>

<script>
import ServiceInfo from './ServiceInfoComponent'
import Icon from './Icon'
import EmplInfoCard from './EmployeeInfoCard'
import CompanyHistoryTimeline from './CompanyHistoryTimeline'
import SosDivider from './SosDivider'
import SosPartnerLogo from './PartnerLogo'
import HeroImage from './HeroImage'
import SplitContentComponent from './SplitContentComponent'
import WhyChooseUs from './WhyChooseUs'

export default {
  name: 'PageContent',
  components: {
    WhyChooseUs,
    SplitContentComponent,
    HeroImage,
    SosPartnerLogo,
    SosDivider,
    CompanyHistoryTimeline,
    EmplInfoCard,
    Icon,
    ServiceInfo
  },
  data() {
    return {
      selectedService: Object,
      services: require('../assets/yml/services.yml'),
      training: require('../assets/yml/training.yml'),
      employees: require('../assets/yml/team.yml'),
      logos: [
        require('../assets/img/partners/credence-logo.jpg'),
        require('../assets/img/partners/elastic-logo.png'),
        require('../assets/img/partners/fireeye-logo.png'),
        require('../assets/img/partners/intelligenesis-logo.png'),
        require('../assets/img/partners/profitap-logo.png')
      ],
      onion_logo: require('../assets/img/icons/sos-onion.svg'),
      content_side_internal_toggle: true
    }
  },
  computed: {
    service_list() {
      this.services.forEach((key, index) => {
        index % 2 === 0
          ? (key.content_side_toggle = true)
          : (key.content_side_toggle = false)
      })
      return this.services
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

.el-row {
  margin-bottom: 0;
  :last-child {
    margin-bottom: 0;
  }
}

.hero {
  width: 80%;
  margin-top: 0;
}

h1 {
  font-size: 2.75em;
}

h2 {
  font-size: 2.25em;
}

h3 {
  font-size: 1.75em;
}

.service-list-card {
  width: 90%;
}

.sos_icon {
  color: #f6b11f;
  font-size: 1.75em;
}

.logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
}

.logo-block {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.employee-list,
.timeline {
  margin-top: 3em;
  width: 90%;
  flex-wrap: wrap;
}

.timeline {
  line-height: 1.5em;
}

.button {
  padding-left: 0.2em;
  float: right;
  color: black !important;
  -webkit-transition: color 0.3s;
  -moz-transition: color 0.3s;
  -o-transition: color 0.3s;
  transition: color 0.3s;
  :hover,
  :focus,
  :active {
    color: #f6b11f !important;
  }
}

.el-header {
  text-align: end;
}

.section {
  padding: 0 0.25em 0 0.25em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fa-layer {
  display: inline-block;
  width: 100%;
}

.section-header {
  color: #f6b11f;
  font-weight: bold;
  justify-content: flex-end;
  margin: 0 0.5em;
}

.contact-links {
  display: flex;
  flex-direction: column;
  a {
    color: #f6b11f;
    font-size: 2em !important;
    margin-bottom: 0;
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 2em;
  }
}

.caption {
  top: 70%;
  left: 50%;
  text-transform: uppercase;
  text-align: center;
  .caption-text {
    color: #f6b11f;
    font-family: Montserrat, sans-serif;
    font-size: 1em;
    font-weight: bold;
  }
}

.service-dialog ::v-deep .el-dialog {
  width: 90%;
}

.blurb {
  font-size: larger;
  line-height: 1.5;
}

.training-box {
  width: 80%;
  padding: 2em;
  @media (min-width: $--md) {
    width: 60%;
  }
  @media (min-width: $--lg) {
    width: 50%;
  }
  @media (min-width: $--xl) {
    width: 40%;
  }
}

.width-fix {
  width: 100%;
}

@media (min-width: $--sm) {
  .service-list-card {
    width: 60%;
  }

  .service-dialog ::v-deep .el-dialog {
    width: 50%;
  }

  .timeline {
    width: 70%;
  }

  .logos {
    min-height: 200px;
    margin-bottom: unset;
  }

  .width-fix {
    width: 80%;
  }
}

@media (min-width: $--md) {
  .caption {
    font-size: 1.25em;
  }
  .width-fix {
    width: 60%;
  }
  .hero {
    width: 60%;
  }
}

@media (min-width: $--lg) {
  .caption {
    font-size: 1.5em;
  }
  .blurb {
    width: 80%;
    font-size: x-large;
  }
}

@media (min-width: $--xl) {
  .service-list-card {
    width: 40%;
  }
  .employee-list {
    width: 70%;
  }
  .width-fix {
    width: 40%;
  }
  .hero {
    width: 45%;
    margin-top: 1.5em;
  }
}
.subsection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
</style>
