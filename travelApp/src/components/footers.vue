<template>
    <div class="footer">
              <span class="votePrice">票面价是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
              <div class="buttons">
                  <span class="iconfont login-icon" @click="goLogin">&#xe600;</span>
                  <div class="login" @click="goLogin">登录</div>
                  <span class="iconfont home-icon">&#xe601;</span>
                  <div class="home" @click="goHome">首页</div>
                  <span class="iconfont day-icon">&#xe67a;</span>
                  <div class="day" @click="goDailyTour">一日游</div>
                  <span class="iconfont city-icon">&#xe672;</span>
                  <div class="city" @click="goCityList">城市列表</div>
                   <span class="iconfont order-icon">&#xe649;</span>
                  <div class="myorder">我的预订</div>
              </div>
    </div>
</template>
<script>
export default {
    methods: {
      goLogin(){
        this.$router.push({path:'/'})
      },
      goHome(){
        this.$router.push({path:'/Home'})
      },
      goDailyTour(){
        this.$router.push({path:'/dailyTour'})
      },
      goCityList(){
        this.$router.push({path:'/cityList'})
      }
    },
}
</script>

<style lang="scss">
.footer{
  width: 100%;
  height: 8rem;
  background: #e0e0e0;
  .votePrice{
    width: 100%;
    float: left;
    height: 2rem;
    line-height: 2rem;
    margin-top: .5rem;
    background: #fff;
    text-indent: 1rem;
    font-size: .1rem;
  }
  .buttons{
    color: #00cccc;
    // margin-top: 2rem;
    float: left;
    width: 100%;
    height: 6rem;
    background: #e0e0e0;
    // border-bottom: .2rem #ccc  solid;
    position: fixed;
    bottom: 0;
    z-index: 5;
    .iconfont{
        float: left;
        font-size: 2rem;
        margin-top: 1.5rem;
        // margin-bottom: 1rem;
    }
    div{
      float: left;
      margin-top: 3.5rem;
      margin-left: -2rem;
    }
    span{
      margin-left: 1.8rem;
    }
    .home{
      color: #00cccc;
    }
    .home-icon{
      color: #00cccc;
    }
    .day{
      margin-left: -2.5rem;
    }
    .city{
      margin-left: -3rem;
    }
    .myorder{
      margin-left: -3rem;
    }
  }
  .footerText{
    float: left;
    margin-left: 3rem;
    color: #666666;
  }
}
</style>