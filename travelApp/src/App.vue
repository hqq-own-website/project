<template>
  <div id="app">
    <router-view v-if="!show && !flage"/>
    <van-loading v-if="show && !flage" class="loading" size="40px" vertical color="#0094ff" type="spinner">加载中...</van-loading>
    <div v-if="flage" class="animate__animated animate__flipInX tip-box">
      <div class="padding-left-right tip">
        <img class="img" :src="img" />
        <div>{{msg}}</div>
        <!-- <van-button class="btn" icon="revoke" type="primary" block v-click="back()">按钮</van-button> -->
      </div>

    </div>
  </div>
</template>

<script>

</script>

<style >
.tip-box{
  padding-top: 30vh;
}
.img{
  width: 10vh;
  margin-bottom: .2rem;
}
.tip{
  font-size: .4rem;
  display: block;
  text-align: center;
  align-self: center;
}
.btn{
  margin-top: .4rem;
  font-size: .4rem;
}
.loading{
  vertical-align: middle;
  margin-top: 40vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
.van-nav-bar {
  background: #3a9cf0;
  z-index: 100;
}
.van-nav-bar__text,.van-nav-bar .van-icon,.van-nav-bar__title{
  color: #fff;
}
.padding-left-right{
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;
}

</style>
