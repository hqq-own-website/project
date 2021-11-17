<template>
    <div>
        <div class="weekWhereGo">
            <div class="title">
                周末去哪儿
            </div>
            <div v-for="item in data">
                <div class="imgShow">
                    <img :src="item.showUrl">
                    <span class="showTitle">{{item.showTitle}}</span><br>
                    <span class="showDescribe">{{item.showDescribe}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['data'],
    data() {
        return {
    
        }
    },
}
</script>

<style lang="scss">
.weekWhereGo{
    width: 100%;
    .title{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        text-indent: 1rem;
        background: #e0e0e0;
    }
    .imgShow{
        img{

            width: 100%;
        }
        .showTitle{
            font-size: .9rem;
            margin-left: 1rem;
        }
        .showDescribe{
            font-size: .1rem;
            text-indent: 1rem;
            font-weight: 100;
            margin-left: 1rem;
        }
    }
}
</style>