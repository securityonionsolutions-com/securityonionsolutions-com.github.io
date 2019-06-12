<template>
  <div id="app">
    <navbar />
    <br />
    <pageContent />
    <sos-footer />
    <el-backtop target="#hero"></el-backtop>
  </div>
</template>

<script>
import SosFooter from '~/components/SosFooter'
import Navbar from '~/components/Navbar'
import PageContent from '~/components/PageContent'

export default {
  components: {
    SosFooter,
    Navbar,
    PageContent
  }
}
</script>

<style lang="scss">
@import '~normalize-scss/sass/normalize';
@include normalize();

* {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

/*
Write your variables here. All available variables can be
found in element-ui/packages/theme-chalk/src/common/var.scss.
For example, to overwrite the theme color:
*/
$--color-primary: #f6b11f;

/* icon font path, required */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import '~element-ui/packages/theme-chalk/src/index.scss';
</style>
