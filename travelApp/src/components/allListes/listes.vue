<template>
    <div class="guessLikeAllList">
        <div class="flList">
            <span class="qbfl">全部分类</span>
            <span class="tjpx">推荐排序</span>
        </div>
        <div class="guessLikeList" v-for="(item,i) in data">
            <div class="content" >
                <van-card
                :price="item.contentPrice"
                :desc="item.numComment"
                :title="item.contentTiele"
                :thumb="item.contentUrl"
                @click="saveData(i)"
                />
                <span class="iconfont star">&#xe61e;&#xe61e;&#xe61e;&#xe61e;</span>
                <span class="contentPosition">{{item.contentPosition}}</span>
                <div class="describe1">
                    {{item.describe1}}
                    <span>￥{{item.price1}}</span>
                </div>
                <div class="describe2">
                    {{item.describe2}}
                    <span>￥{{item.price2}}</span>
                </div>
            </div>
        </div>
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
            },
            saveData(i){
                console.log(this.data[i])
                // console.log(this.data[i].contentUrl)
                // console.log(this.data[i].contentPrice)
                // console.log(this.data[i].contentTiele)
                // console.log(this.data[i].numComment)
                // let obj = [{url:this.data[i].contentUrl,price:this.data[i].contentPrice,title:this.data[i].contentTiele,dexc:this.data[i].numComment}];
                // console.log(obj)
                localStorage.setItem("BuyDate",JSON.stringify(this.data[i]))
                // let a = JSON.parse(localStorage.getItem("BuyDate"))
                this.$router.push({path:'/allListsDetails'})
            }
        },
    }
</script>

<style lang="scss">
.guessLikeAllList{
    background: white;
}
.flList{
    width: 100%;
    position: absolute;
    height: 4rem;
    top: 4rem;

    .qbfl{
        float: left;
        margin-top: 1rem;
        height: 2rem;
        width: 49%;
        line-height: 2rem;
        text-align: center;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .tjpx{
        float: left;
        margin-top: 1rem;
        height: 2rem;
        width: 50.3%;
        line-height: 2rem;
        text-align: center;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
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
.guessLikeList{
    width: 100%;
    height: 8rem;
    margin-top: .5rem;
    // background: red;
    
    .content{
        margin-top: 4rem;
        .van-card{
            background-color: white;
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
        .describe1{
            font-size: .5rem;
            border-top: solid 1px #ccc;
            height: 2rem;
            margin: -1rem 1rem 0 1rem;
            line-height: 2rem;
            text-indent: .5rem;
            span{
                float: right;
                color: red;
            }
        }
        .describe2{
            font-size: .5rem;
            border-top: solid 1px #ccc;
            height: 2rem;
            margin: 0 1rem 0 1rem;
            line-height: 2rem;
            text-indent: .5rem;
            span{
                float: right;
                color: red;
            }
        }

    }
    
}
.van-card__thumb img {
    border-radius: 0;
}
</style>