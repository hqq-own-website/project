<template>
    <div class="guessLikeAll">
        <div class="titel">
            <span class="iconfont like">&#xe629;</span>
            <span class="youLike">猜你喜欢</span>
        </div>    
        <div class="guessLike" v-for="item in data">
            <div class="content" >
                <van-card
                :price="item.contentPrice"
                :desc="item.numComment"
                :title="item.contentTiele"
                :thumb="item.contentUrl"
                />
                <span class="iconfont star">&#xe61e;&#xe61e;&#xe61e;&#xe61e;</span>
                <span class="contentPosition">{{item.contentPosition}}</span>
                <span class="describe">{{item.describe}}</span>
            </div>
        </div>
        <div class="bottom" @click="toLikeList">查看所有景点</div>
    </div>
</template>

<script>
    export default{
        props:['data'],
        data() {
            return {
            }
        },
        methods: {
            toLikeList(){
                this.$router.push({path:'/dailyTour'})
            }
        },
    }
</script>

<style lang="scss">
.guessLikeAll{
    background: aliceblue;
}
.titel{
    margin-top: .5rem;
}
.like{
      color: red;
      margin-left: 1.2rem;
    }
.youLike{
      margin: .3rem 0 0 .3rem;
    }
.guessLike{
    width: 100%;
    height: 8rem;
    margin-top: .5rem;
    // background: red;
    
    .content{
        margin-top: .5rem;
        .van-card{
            background-color: aliceblue;
        }
        .van-card__title {
            font-size: 1rem;
            margin: .5rem 0 0.5rem .5rem;
        }
        .van-card__price-integer {
            // font-size: .5rem;
            color: red;
        }
        .van-card__price-currency{
            // font-size: .5rem;
            color: red;
            margin-left: .7rem;
        }
        .van-card__desc {
            margin-left: 5rem;
        }
        .van-card__price-decimal {
            font-size: .1rem;
            color:  #bcbcbc;
        }
        .star{
            position: relative;
            color: yellow;
            top: -3.9rem;
            left: 7.4rem;
            margin-left: .2rem;
        }
        .contentPosition{
            position: relative;
            z-index: 1;
            left: 15rem;
            top: -1.7rem;
            font-size: .5rem;
        }
        .describe{
            color: red;
            font-size: .6rem;
            margin-left: 2rem;
        }

    }
    
}
.bottom{
        width: 100%;
        clear: both;
        height: 2rem;
        font-size: .6rem;
        color: #00cccc;
        margin-top: 1rem;
        text-align: center;
        line-height: 2rem;
        border-top: .2rem solid #cccccc;
}
.van-card__thumb img {
    border-radius: 0;
}
</style>