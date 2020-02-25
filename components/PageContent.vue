<template>
  <el-main>
    <div class="wrapper">
      <div id="hero" class="hero">
        <el-row style="width: 80%" type="flex" justify="center">
          <el-col
            :span="24"
            style="display: flex; align-items: center; flex-direction: column"
          >
            <hero-image />
            <div class="caption">
              <h3 class="caption-text">
                We help you peel back the layers of your enterprise
              </h3>
            </div>
          </el-col>
        </el-row>
      </div>

      <sos-divider />

      <el-row style="width:80%" type="flex" justify="center">
        <el-col
          :span="24"
          style="display: flex; align-items: center; flex-direction: column; text-align: center"
        >
          <p class="blurb">
            We are the builders of Security Onion, a free and open source
            platform for threat hunting, network security monitoring, and log
            management. Security Onion includes best-of-breed open source tools
            such as Snort, Suricata, Zeek, Wazuh, the Elastic Stack, and many
            other security tools. Security Onion Solutions offers appliances and
            professional services centered around the Security Onion platform,
            and is the only provider of official Security Onion training.
          </p>
        </el-col>
      </el-row>

      <why-choose-us />

      <sos-divider />

      <div class="section">
        <span style="display: flex; align-items: center">
          <icon :icon-type="services[0].iconType" :icon-size="3" />
          <h3 class="section-header">Hardware</h3>
        </span>
        <div class="service-list-card" style="margin: 1em">
          <el-card
            style="margin: 1.5em 0; padding: 0 1em; display: flex; justify-content: center"
          >
            <service-info :service="services[0]" />
          </el-card>
        </div>
      </div>

      <sos-divider />

      <div class="section">
        <span style="display: flex; align-items: center">
          <icon :icon-type="services[1].iconType" :icon-size="3" />
          <h3 class="section-header">Professional Services</h3>
        </span>
        <div
          style="display: flex; flex-direction: column; align-items: center; margin: 2em"
        >
          <service-info :service="services[1]" />
        </div>
      </div>

      <sos-divider />

      <div id="training" class="section">
        <h3 class="section-header">Training</h3>
        <div class="training-box">
          <training-container :tabs="training" />
        </div>
      </div>

      <sos-divider />

      <div id="about-us" class="section">
        <split-content-component :column-size="{ right: 12, left: 12 }">
          <template slot="left-content">
            <div
              style="display: flex; align-items: center; flex-direction: column"
            >
              <h3 class="section-header">Our Team</h3>
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
              <h3 class="section-header">Our History</h3>
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

      <div id="partners" class="section">
        <h3 class="section-header">Our Partners</h3>
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
import TrainingContainer from './TrainingContainer'
import WhyChooseUs from './WhyChooseUs'

export default {
  name: 'PageContent',
  components: {
    WhyChooseUs,
    TrainingContainer,
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
      services: require('../assets/services.yml'),
      training: require('../assets/training.yml'),
      employees: require('../assets/team/team.yml'),
      logos: [
        require('../assets/partners/credence-logo.jpg'),
        require('../assets/partners/elastic-logo.png'),
        require('../assets/partners/fireeye-logo.png'),
        require('../assets/partners/intelligenesis-logo.png'),
        require('../assets/partners/profitap-logo.png')
      ],
      onion_logo: require('../assets/sos-onion.svg'),
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
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0;
  }
}

.service-list-card {
  width: 100%;
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
    color: #ffd14b !important;
  }
}

.hero {
  position: relative;
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  padding: 0;
  color: #ffd14b;
  font-size: 1em;
  font-weight: bold;
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
  color: #ffd14b;
  font-size: 3em;
  font-weight: bold;
  justify-content: flex-end;
  margin: 0 0.5em;
}

.contact-links {
  display: flex;
  flex-direction: column;
  a {
    color: #ffd14b;
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
    color: #ffd14b;
    font-family: Montserrat, sans-serif;
    font-size: 1em;
    font-weight: bold;
  }
}

.service-dialog ::v-deep .el-dialog {
  width: 90%;
}

.blurb {
  font-size: large;
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
}

@media (min-width: $--md) {
  .caption {
    position: absolute;
    font-size: 1.25em;
    transform: translate(-50%, -25%);
  }
}

@media (min-width: $--lg) {
  .caption {
    font-size: 1.5em;
  }
  .blurb {
    font-size: larger;
  }
}

@media (min-width: $--xl) {
  .service-list-card {
    width: 30%;
  }
  .employee-list {
    width: 70%;
  }
  /*.timeline {*/
  /*  width: 40%;*/
  /*}*/
}
</style>
