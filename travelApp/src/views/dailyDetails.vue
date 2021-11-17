<template>
    <div class="all" v-for="item in data">
       <!-- 图片 -->
       <banner :bannerUrl="data"></banner>

       <div class="dec">
           <div class="title"><span class="jx"><img :src="jx"></span>{{item.title}}</div>
           <div class="money"><span class="up">￥</span><span class="price">{{item.price}}</span></div>
           <div class="mouthSile">{{item.dexc}}</div>
       </div>

       <div class="bq">
           <img :src="qjx">
           <span class="iconfont">&#xe602;品质商家</span>
           <span class="iconfont">&#xe602;精选路线</span>
           <span class="iconfont">&#xe602;去哪儿保障</span>
       </div>


       <div class="pl">
            <div class="money">
                <span class="price">5.0</span>
                <span class="up">分</span>
                <span class="my">非常满意</span>
            </div>
            <span class="personPl">7222条评论</span>
            <div class="pl-bq">
                <span>导游热情</span>
                <span>服务好</span>
                <span>景点好玩</span>
                <span>行程安排靠谱 </span>
            </div>
       </div>

       <div class="order">
           <span class="iconfont">&#xe637;</span>
           <span class="zx">咨询</span>
           <div class="button-yd">立即预订</div>
       </div>
    </div>
</template>
<script>
import banner from '../components/dailyDetail/banner.vue'
export default {
components:{ 
    banner
},
    data(){
        return{
           jx:require("../assets/images/jx.png"),
           qjx:require("../assets/images/Qjx.png"),
           data:JSON.parse(localStorage.getItem("showDate"))
        }
    },
    mounted() {
        console.log(this.data)
    },    
}
</script>
<style lang="scss">
.all{
    background: aliceblue;
    .dec{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 7rem;
    margin-top: -4rem;
    border-radius: 1rem 1rem 0 0;
    background: white;
    .jx{
        img{
            width: 3rem;
            height: 1rem;
            margin: 1rem 1rem 0 1rem;
        }
    }
    .title{
        font-size: 1.2rem;
    }
    .money{
        float: left;
        margin: .5rem 0 0 .5rem;
        .up{
            color: #e0b448;
            font-size: .5rem;
        }
        .price{
            color: #e0b448;
            font-size: 1.5rem;
        }
    }
    .mouthSile{
        float: right;
        margin: .8rem .5rem 0 0;
        color: #cccccc;
        font-size: .5rem;
    }
    
}
.bq{
    background: white;
    height: 4rem;
    margin-top: 1rem;
    img{
        width: 4rem;
        margin: 1rem 0 0 1rem;
    }
    span{
        font-size: .8rem;
        margin-left: 1.5rem;
    }
}
.pl{
    width: 100%;
    height: 6rem;
    background: white;
    margin-top: 1rem;
    .money{
        float: left;
        margin: .5rem 0 0 .5rem;
        .up{
            color: #e0b448;
            font-size: .8rem;
        }
        .price{
            color: #e0b448;
            font-size: 1.5rem;
        }
        .my{
            color: #e0b448;
            font-size: .8rem;
            margin-left: .5rem;
        }
    }
    .personPl{
        font-size: .8rem;
        float: right;
        margin: 1rem;
        color: #e0b448;
    }
    .pl-bq{
        float: left;
        span{
            float: left;
            height: 1.3rem;
            font-size: .5rem;
            margin: .2rem 0 0 1.5rem;
            line-height: 1.3rem;
            text-align: center;
            background: #faf2e9;
        }
    }
}
.order{
    height: 3rem;
    width: 100%;
    background: white;
    margin-top: 1rem;
    .iconfont{
        float: left;
        color: #8f8e8e;
        font-weight: 400;
        margin: .5rem 0 0 1rem;
        font-size: 1.7rem;
    }
    .zx{
        float: left;
        color: #8f8e8e;
        font-weight: 400;
        margin: 2rem 0 0 -1.8rem;
    }
    .button-yd{
        float: left;
        width: 70%;
        background:  #e0b448;
        color: white;
        height: 2rem;
        margin: 1rem 0 0 1.8rem;
        text-align: center;
        line-height: 2rem;
        border-radius: 2rem;
    }
}
}

</style>