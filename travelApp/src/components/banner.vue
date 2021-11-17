<template>
    <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"  v-for="item in data"><img :src="item"></div>
            </div>
        </div>
</template>

<script>
import swiper from '../../node_modules/swiper/swiper-bundle'
import '../../node_modules/swiper/swiper.min.css'
  export default {
    name: 'banner',
    props:['data'],
    data() {
      return {

      }
    },
    mounted() {
        new swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        })
    }
  }
</script>

<style lang="scss">
 .swiper-container {
     overflow: hidden;
      width: 100%;
      height: 9rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
</style>