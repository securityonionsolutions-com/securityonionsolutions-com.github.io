<template>
  <div class="header-wrapper">
    <el-row type="flex">
      <el-col class="hidden-md-and-down">
        <el-carousel
          indicator-position="outside"
          trigger="click"
          :interval="10000"
        >
          <el-carousel-item
            v-for="(item, index) in headerImgArrHoriz"
            :key="index"
          >
            <el-image :src="item.img" :alt="item.alt" fit="cover" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col class="hidden-lg-and-up">
        <el-carousel
          indicator-position="outside"
          trigger="click"
          :interval="10000"
        >
          <el-carousel-item
            v-for="(item, index) in headerImgArrSquare"
            :key="index"
          >
            <el-image :src="item.img" :alt="item.alt" fit="cover" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HeroImage',
  data() {
    return {
      headerImgArrHoriz: [
        {
          alt: 'Josh Brower speaking',
          img: require('../assets/img/headers/sos-site-header-1.jpg')
        },
        {
          alt: 'Doug Burks speaking',
          img: require('../assets/img/headers/sos-site-header-2.jpg')
        },
        {
          alt: 'Wes Lamber speaking',
          img: require('../assets/img/headers/sos-site-header-3.jpg')
        },
        {
          alt: 'Mike Reeves speaking',
          img: require('../assets/img/headers/sos-site-header-4.jpg')
        },
        {
          alt: 'Phil Plantamura speaking',
          img: require('../assets/img/headers/sos-site-header-5.jpg')
        }
      ],
      headerImgArrSquare: [
        {
          alt: 'Josh Brower speaking',
          img: require('../assets/img/headers/sos-site-header-1-square.jpg')
        },
        {
          alt: 'Doug Burks speaking',
          img: require('../assets/img/headers/sos-site-header-2-square.jpg')
        },
        {
          alt: 'Wes Lamber speaking',
          img: require('../assets/img/headers/sos-site-header-3-square.jpg')
        },
        {
          alt: 'Mike Reeves speaking',
          img: require('../assets/img/headers/sos-site-header-4-square.jpg')
        },
        {
          alt: 'Phil Plantamura speaking',
          img: require('../assets/img/headers/sos-site-header-5-square.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '~element-ui/packages/theme-chalk/src/common/var';

::v-deep .el-carousel__container {
  height: 15em;
  @media (min-width: $--sm) {
    height: 22em;
  }
  @media (min-width: $--md) {
    height: 20em;
  }
  @media (min-width: $--xl) {
    height: 25em;
  }
}
</style>
