<template>
  <el-header>
    <el-row type="flex" justify="space-between">
      <el-col>
        <div style="display: flex; align-items: center">
          <sos-onion-svg style="margin-right: 0.5em" />
          <h2>Security Onion Solutions</h2>
          <p class="hidden-lg-and-down tagline">
            " We help you peel back the layers of your enterprise "
          </p>
        </div>
      </el-col>
      <el-col :span="3" :lg="20">
        <div id="main-nav">
          <el-menu
            mode="horizontal"
            class="header-menu"
            menu-trigger="click"
            @select="handleSelect"
          >
            <el-menu-item index="1-1" class="hidden-md-and-down"
              ><el-link href="https://securityonion.net/" :underline="false"
                >Security Onion</el-link
              ></el-menu-item
            >
            <el-menu-item index="1-2" class="hidden-md-and-down"
              ><el-link
                href="https://securityonion.net/conference"
                :underline="false"
                >SO Conference</el-link
              ></el-menu-item
            >
            <el-submenu index="2" class="hidden-lg-and-up">
              <el-menu-item index="2-1"
                ><el-link href="https://securityonion.net/" :underline="false"
                  >Security Onion</el-link
                ></el-menu-item
              >
              <el-menu-item index="2-2"
                ><el-link
                  href="https://securityonion.net/conference"
                  :underline="false"
                  >SO Conference</el-link
                ></el-menu-item
              >
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
// import VueScrollTo from 'vue-scrollto';

import SosOnionSvg from './SosOnionSvg'
export default {
  name: 'Navbar',
  components: { SosOnionSvg },
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {}
  }
}
</script>

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

.el-header {
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.5em;
}

@media (min-width: $--md) {
  .el-header {
    padding-left: 2em;
    padding-right: 2em;
  }
}

.header-menu {
  display: flex;
  justify-content: flex-end;
  border-bottom: none !important;
}

.tagline {
  margin-left: 1em;
  margin-bottom: 0.75em;
  color: #f6b11f;
  font-weight: bolder;
  text-transform: uppercase;
  word-spacing: 0.001em;
}
</style>
