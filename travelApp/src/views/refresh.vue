<template>
    <van-loading type="spinner" color="#1989fa" vertical>加载中...</van-loading>
</template>

<script>
    export default{
        data(){
            this.$router.push({path:'/cityList'})
        }
    }
</script>

<style>
.van-loading{
  margin-top: 50%;
}

</style>