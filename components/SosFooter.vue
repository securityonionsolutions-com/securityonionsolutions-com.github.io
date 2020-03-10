<template>
  <el-footer id="footer" height="auto" style="width: 100%">
    <el-row
      type="flex"
      justify="center"
      :gutter="20"
      style="width: 100%; text-align: center"
    >
      <el-col :span="12" class="footer-col">
        <div class="hidden-xs-only">
          <p style="margin-bottom: 0;">
            Contact us:
          </p>
          <el-row style="width: 100%;" :gutter="20">
            <el-col :span="24" :md="12">
              <p>
                <a
                  href="mailto:onsitetraining@securityonionsolutions.com"
                >onsitetraining@securityonionsolutions.com</a>
              </p>
              <p>
                <a
                  href="mailto:appliances@securityonionsolutions.com"
                >appliances@securityonionsolutions.com</a>
              </p>
            </el-col>
            <el-col :span="24" :md="12">
              <p>
                <a
                  href="mailto:professionalservices@securityonionsolutions.com"
                >professionalservices@securityonionsolutions.com</a>
              </p>
              <p>
                <a
                  href="mailto:onlinetraining@securityonionsolutions.com"
                >onlinetraining@securityonionsolutions.com</a>
              </p>
            </el-col>
          </el-row>
        </div>
        <div class="hidden-sm-and-up">
          <p style="margin-bottom: 0;">
            <a
              href="mailto:professionalservices@securityonionsolutions.com"
            >Contact us!</a>
          </p>
        </div>

        <p>Copyright © Security Onion Solutions, LLC</p>
        <el-row type="flex" justify="center" :gutter="20" style="width: 50%">
          <el-col :span="12" style="width: auto">
            <a
              class="el-button--text button"
              href="https://www.linkedin.com/company/security-onion-solutions-llc"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                style="color: black;"
                class="button fa-2x"
              />
            </a>
          </el-col>
          <el-col :span="12" style="width: auto">
            <a
              class="el-button--text button"
              href="https://twitter.com/securityonion"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                style="color: black;"
                class="button fa-2x"
              />
            </a>
          </el-col>
        </el-row>
        <p style="margin-top: 3em;">
          Onion icon from
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
          >www.flaticon.com</a>
          is licensed by
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >CC 3.0 BY</a>
        </p>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script>
export default {
  name: 'SosFooter',
};
</script>

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

.footer-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  h5,
  p {
    color: #777;
  }
  p {
    a {
      text-decoration: none;
      color: #777777;
    }
    font-size: small;
  }
}

@media (max-width: $--lg) {
  .el-col {
    :last-child {
      margin-bottom: 0;
    }
  }
  .el-row {
    margin-bottom: 1em;
  }
}

#footer {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
}
</style>
