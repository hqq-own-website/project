<template>
    <div class="daliybanner" v-for="item in bannerUrl">
        <img :src="item.url">
        <span class="iconfont back" @click="back">&#xe60f;</span>
    </div>
</template>

<script>
export default {
    props:['bannerUrl'],
    data(){
        return{
            
        }
    },
    methods:{
        back(){
            this.$router.push({path:'/dailyTour'})
            
        }
    }
}
</script>

<style lang="scss">
.daliybanner{
    // background: red;
    width: 100%;
    // height: 10rem;
    img{
        width: 100%;
        // height: 60%;
    }
    .back{
        position:absolute;
        left: 1rem;
        top: 1rem;
        color: white;
        font-size: 2rem;
    }
}
</style>