<template>
     <div class="dailyHeader">
            <span class="iconfont back" @click="backtoHome">&#xe677;</span>
            <div class="dailyHeader-serch-city">
                <input type="text" placeholder="景点门票" ref="inputtext">
                <span class="serch">搜索</span>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
         backtoHome(){
            this.$router.push({path:'/Home'})
        }
    },
}
</script>

<style lang="scss">
.dailyHeader{
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
    margin-left: 1.5rem;
    margin-top: 0.4rem;
    font-weight: 600;
    position: absolute;
    /* background: red; */
    left: -.3rem;
    top: -.3rem;
  }
}
.dailyHeader-serch-city{
  input{
    border: none;
    border-radius: .4rem;
    width: 65%;
    height: 2.3rem;
    margin-left: 2rem;
    color: #666666;
    text-align: center;
    font-size: .5rem;
  }
  .serch{
      margin-left: 1rem;
      color: aliceblue;
      font-weight: 600;
  }
}
</style>