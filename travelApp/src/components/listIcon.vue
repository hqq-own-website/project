<template>
<div class="listIcon">
    <div class="list-icon" v-for="item in data">
           <div class="forList">
              <van-icon :name="item.url" size="4rem" :badge="item.hot"/>
              <!-- <span>{{item.listTitle}}</span>
              <van-icon :name="listUrl" size="4rem"/> -->
              {{item.listTitle}}
           </div>
    </div>
    <hr>
    <div class="list-icon-bg"></div>
</div>
</template>

<script>
  export default {
    name: 'banner',
    props:['data'],
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss">
.list-icon{
  .forList{
    float: left;
    width: 4rem;
    height: 4rem;
    margin: 1rem 0 1rem 1.5rem;
    font-size: .1rem;
    text-align: center;
  }
}
.list-icon-bg{
  width: 100%;
  height: 13.5rem;
  background: aliceblue;
}
.listIcon{
  position: relative;
}
hr{
  width: 100%;
  position: absolute;
  background: #cccccc;
  border: none;
  height: 1px;
  top: 6.2rem;
}
</style>