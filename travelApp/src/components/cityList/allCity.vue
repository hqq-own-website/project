<template>
    <div class="allcityheader" v-for="(item,i) in data">
        <div class="currentCity-all">{{item.fristName}}</div>
        <div class="currentCity-city-all" v-for="city in data[i].name">{{city}}</div>
        
    </div>
    <div class="list">
            <li class="item"
                :ref="item"
                v-for="item of letter" 
                :key="item">{{item}}
            </li>
    </div>
</template>

<script>
export default {
    props:['data','letter'],
    data(){
        return{
            cityArr:'',
            citys:[],
            allCitys:[],
        }
    },
    
    
}
</script>

<style lang="scss">
.currentCity-all{
    // margin-top: 3rem;
    width: 100%;
    height: 2rem;
    font-family: 'PINGFANG BOLD';
    background: #efefef;
    font-size: .1rem;
    color: #1c1212;
    line-height: 2rem;
    text-indent: 1rem;
}
.currentCity-city-all{
    width: 100%;
    border: 1px solid #eae8e8;
    text-indent: 1rem;
    height: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: .3rem;
    font-size: .8rem;
    font-weight: 600;
}
.list{
    display: flex;
    flex-direction:column;
    justify-content: center;
    position:absolute;
    top: 5rem;
    right: 1rem;
    bottom: 0;
    width: .4rem;
    font-size: .5rem;
    .item{
        line-height:.8rem;
        text-align: center;
        color: #00bcd4;
        list-style:none;
    }
}
</style>