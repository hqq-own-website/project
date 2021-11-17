<template>
  <div>
        <div class="weekHot">
            <span class="iconfont fire">&#xe63f;</span>
            <span class="theHot" >本周热门榜单</span>
            <span class="iconfont all" @click="goAllLists">全部榜单&#xe8f1;</span>
            <!-- <div class="hotImg">
                <div class="hotImg-list" v-for="item in weekHotUrl">
                    <van-card :thumb="item.url"/>
                    <span class="text">{{item.title}}</span>
                    <span class="money">￥{{item.price}}<span class="up">起</span></span>
                </div>
                
            </div> -->
            <div class="swiper-container1">
                <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for="item in data">
                    <img :src="item.url">
                    <div class="top"><img :src="item.topUrl"></div>
                    <span class="text">{{item.title}}</span>
                    <span class="money">￥{{item.price}}<span class="up">起</span></span>
                </div>
                
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>


    

  
</template>
<script>
import swiper from '../../node_modules/swiper/swiper-bundle'
import '../../node_modules/swiper/swiper.min.css'
  export default {
      props:['data'],
    data(){
        return{
           
        }
    },
    mounted() {
        new swiper('.swiper-container1', {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        });
    },
    methods: {
        goAllLists(){
            this.$router.push({path:'/allLists'})
        }
    },
  }
</script>
<style lang="scss">
.swiper-container1{
    overflow: hidden;
    margin-top: .5rem;
    margin-left: .2rem;
    .swiper-slide{
        margin-bottom: 1rem;
        margin-left: -1rem;
        img{
            width: 6rem;
            margin-left: 2.2rem;
        }
        .top{
            position: absolute;
            width: 2rem;
            height: 1rem;
            top: 0;
            img{
                width: 100%;
            }
        }
    .text{
        width: 7rem;
        float: left;
        text-align: center;
        margin-left: 1.8rem;
        font-size: .2rem;
        }
        .money{
            font-size: .9rem;
            color: red;
            width: 6rem;
            margin-left: 2.9rem;
            .up{
                margin-left: .2rem;
                color: #bcbcbc;
                font-size: .1rem;
            }
        }
    }
}

.weekHot{
  width: 100%;
//   height: 8rem;
  margin-top: .5rem;
  background: aliceblue;
  .fire{
      margin-left: 1.2rem;
      color: red;
  }
  .theHot{
      margin: .3rem 0 0 .3rem;
  }
  .all{
      font-size: .1rem;
      color: #bcbcbc;
      float: right;
      margin-right: 1rem;
      line-height: 1rem;
      margin-top: .3rem;
  }
}
</style>