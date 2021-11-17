<template>
    <div class="hotcity">
        <div class="currentCity">热门城市</div>
        <div class="currentCity-city" ><div v-for="item in data">{{item}}</div></div>
    </div>
</template>
<script>
export default {
    props:['data']
}
</script>
<style lang="scss">
.hotcity{
    margin-bottom: 3rem;
}
</style>