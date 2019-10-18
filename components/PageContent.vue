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

      <div id="services" class="section">
        <h3 class="section-header">Our Products and Services</h3>
        <div
          class="subsection"
          style="width: 100%; margin-top: 3.5em; margin-bottom: 0"
        >
          <el-card class="service-list-card">
            <el-collapse accordion>
              <el-collapse-item
                v-for="(service, index) in services"
                :key="index"
              >
                <template slot="title">
                  <icon :icon-type="service.iconType" />
                  <el-badge
                    v-if="service.isNew"
                    value="new"
                    class="new-badge"
                    >{{ service.title }}</el-badge
                  >
                  <div v-else>{{ service.title }}</div>
                </template>
                <service-info :service="service" />
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </div>
        <div class="subsection">
          <h3 class="header" style="padding-top: 2em">Why choose us?</h3>
          <el-row class="choose-us">
            <el-col :span="24" :lg="20">
              <p>
                We created and maintain Security Onion, so we know it better
                than anybody else
              </p>
              <img
                class="hidden-sm-and-up"
                :src="require('../assets/onion.svg')"
                alt="onion-svg"
                width="8em"
              />
              <p>
                We're the only official authorized training provider for
                Security Onion
              </p>
              <img
                class="hidden-sm-and-up"
                :src="require('../assets/onion.svg')"
                alt="onion-svg"
                width="8em"
              />
              <p>
                Our instructors are the only Security Onion Certified
                Instructors in the world
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
                We've been teaching Security Onion classes and providing
                Professional Services since 2014
              </p>
              <img
                class="hidden-sm-and-up"
                :src="require('../assets/onion.svg')"
                alt="onion-svg"
                width="8em"
              />
              <p>
                We offer custom appliances selected from our years of experience
                to fit many different scenarios
              </p>
              <img
                class="hidden-sm-and-up"
                :src="require('../assets/onion.svg')"
                alt="onion-svg"
                width="8em"
              />
              <p>
                When you purchase products and services from us, you're helping
                to fund development of Security Onion!
              </p>
            </el-col>
          </el-row>
        </div>
      </div>

      <sos-divider />

      <div id="team" class="section">
        <h3 class="section-header">Our Team</h3>
        <el-row type="flex" justify="center" :gutter="40" class="employee-list">
          <el-col
            v-for="(employee, index) in employees"
            :key="index"
            style="margin-bottom: 2em; width: auto;"
            :span="6"
          >
            <empl-info-card :employee="employee" />
          </el-col>
        </el-row>
      </div>

      <sos-divider />

      <div id="history" class="section">
        <h3 class="section-header">Our History</h3>
        <el-row type="flex" justify="center" class="timeline">
          <el-col>
            <company-history-timeline />
          </el-col>
        </el-row>
      </div>

      <sos-divider />

      <div id="partners" class="section">
        <h3 class="section-header">Our Partners</h3>
        <el-row :gutter="100" style="width: 100%;">
          <el-col
            v-for="(logo, index) in logos"
            :key="index"
            class="logos"
            :sm="6"
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

export default {
  name: 'PageContent',
  components: {
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
      employees: require('../assets/team/team.yml'),
      logos: [
        require('../assets/partners/credence-logo.jpg'),
        require('../assets/partners/elastic-logo.png'),
        require('../assets/partners/intelligenesis-logo.png'),
        require('../assets/partners/profitap-logo.png')
      ]
    }
  },
  computed: {},
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
.new-badge {
}

.service-list-card {
  width: 100%;
}

.logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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

.fa-layer {
  display: inline-block;
  width: 100%;
}

.section-header {
  color: #ffd14b;
  font-size: 2.5em;
  font-weight: bold;
  justify-content: flex-end;
  margin-bottom: 0;
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

.header {
  font-size: 2em;
  font-weight: bold;
  padding-top: 0 !important;
  margin-top: 1em;
  margin-bottom: 0.5em;
  justify-content: flex-end;
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

.choose-us {
  text-align: center;
  display: block;
}

@media (min-width: $--sm) {
  .service-list-card {
    width: 40%;
  }

  .choose-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .service-dialog ::v-deep .el-dialog {
    width: 50%;
  }

  .timeline {
    width: 60%;
  }

  .logos {
    min-height: 200px;
  }
}

@media (min-width: $--md) {
  .timeline {
    width: 40%;
  }

  .caption {
    position: absolute;
    font-size: 1.25em;
    transform: translate(-50%, -25%);
  }
}

@media (min-width: $--lg) {
  .employee-list {
    width: 70%;
  }

  .caption {
    font-size: 1.5em;
  }
}

@media (min-width: $--xl) {
  .service-list-card {
    width: 30%;
  }
  .employee-list {
    width: 60%;
  }

  .timeline {
    width: 30%;
  }
}
</style>
