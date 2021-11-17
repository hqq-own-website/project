<template>
    <div id="nav">
          <span class="iconfont back">&#xe677;</span>
          <div class="serch-city">
              <span class="iconfont font-serch">&#xe696;</span>
              <input type="text" placeholder="输入城市/景点/游玩主题">
              <span class="localtion">{{data}}</span>
              <span class="iconfont font-localtion" @click="toCityList">&#xe65c;</span>
          </div>
    </div>
</template>
<script>
export default {
    props:['data'],
    methods:{
      toCityList(){
        this.$router.push({path:'/cityList'})
      }
    }
}
</script>
<style lang="scss">
#nav{
  height: 4rem;
  width: 100%;
  text-align: center;
  background: #00bcd4;
  line-height: 4rem;
  margin: 0;
  .back{
        /* float: left; */
    color: aliceblue;
    font-size: 1.6rem;
    margin-left: 0.5rem;
    margin-top: 0.4rem;
    font-weight: 600;
    position: absolute;
    /* background: red; */
    left: -.3rem;
    top: -.3rem;
  }
}
.serch-city{
  input{
    border: none;
    border-radius: .4rem;
    width: 65%;
    height: 2.3rem;
    margin-left: .5rem;
    color: #666666;
    text-align: center;
    font-size: .5rem;
  }
 .localtion{
    color: aliceblue;
    // letter-spacing: 1rem;
    margin-left: .5rem;
    letter-spacing: .3rem;
    
  }
  .font-serch{
    color: #666666;
    position: absolute;
    left: 5.2rem;
    top: .1rem;
    font-size: .9rem;
  }
  .font-localtion{
    color: aliceblue;
    font-size: 1.5rem;
    position: absolute;
    right: .9rem;
    }
}
</style>