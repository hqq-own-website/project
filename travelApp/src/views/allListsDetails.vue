<template>
    <div>
        <div class="bannerAllLists">
            <span class="title">{{data.contentTiele}}</span>
            <span class="iconfont back" @click="back">&#xe60f;</span>
            <img :src="data.contentUrl">
        </div>
        <div class="bannerAllListsDec">
          <div class="title">{{data.describe1}}{{data.describe2}}</div>
          <div class="money"><span class="up">￥</span><span class="price">{{data.contentPrice}}</span></div>

          <div class="goodComment">
              <span class="goodUrl"><img :src="goodUrl"></span>
              <span class="iconfont star">&#xe61e;&#xe61e;&#xe61e;&#xe61e;&#xe61e;</span>
              <span class="score">5.0分</span>
              <span class="iconfont comment">{{data.numComment}}</span>
              <span class="iconfont iconComment">&#xe8f1;</span>
          </div>

          <div class="buyVote">
              <span class="voteTitle">购票须知</span>
              <span class="hr"></span>
              <div class="explain">
                  <span class="explainTitle">预订说明</span>
                  <div class="orderTime">
                      <span class="orderTimeTitle">预订时间：</span>
                      <span class="orderTimeTitleTime">21:00前随买随用</span>
                      <span class="orderTimeTitletext">需要在游玩当天的21:00前预订</span>

                      <span class="validity">有效期：</span>
                      <span class="validityTime">游玩日期当天有效</span>
                      <span class="validityRule">限购政策：</span>
                      <span class="validityText">每笔订单最多购买5份<br>同一身份证每天最多预订1份</span>
                  </div>
              </div>

              <div class="refund">
                  <span class="explainTitle">预订说明</span>
                  <div class="orderTime">
                      <span class="orderTimeTitle">退款规则：</span>
                      <span class="orderTimeTitleTime">随时退</span>
                      <span class="orderTimeTitletext">经核实如未取票，90天内支持随时退款。</span>

                      <span class="validity">退款处理：</span>
                      <span class="validityTime">游玩日期当天有效</span>
                      <span class="validityRule">额外说明：</span>
                      <span class="validityText">每笔订单最多购买5份，未使用可随时申请退款。</span>
                  </div>
              </div>
              <span class="more">更多购票须知</span>
          </div>

          <div class="goodComment">
              <span class="tips">温馨提示</span>
              <span class="iconfont tipsIcon">&#xe8f1;</span>
          </div>


           <div class="goodComment">
              <span class="tips">景区信息</span>
              <span class="iconfont tipsIcon">&#xe8f1;</span>
          </div>
        </div>

        <div class="borderNow">
                <span class="priceM">价格</span>
                <span class="up">￥</span><span class="price">{{data.contentPrice}}</span>

                <span class="borderNowText">立即预订</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        // banner:require("../assets/images/contentImg/contentUrl-x.png"),
        goodUrl:require("../assets/images/good.png"),
        data:JSON.parse(localStorage.getItem("BuyDate"))
    }
  },
  mounted() {
      console.log(this.data)
  },
  methods: {
    back(){
        this.$router.push({path:'/allLists'})
    }
  },
};
</script>

<style lang="scss">
.bannerAllLists{
    width: 100%;
    .back{
        position: absolute;
        font-size: 2rem;
        margin: .5rem;
        color: white;
    }
    .title{
        position: absolute;
        font-size: 1.5rem;
        color: white;
        top: 11.5rem;
        left: .5rem;
    }
    img{
        width: 100%;
        height: 60%;
    }
    
}
.bannerAllListsDec{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 17rem;
    margin-top: -12rem;
    border-radius: 1rem 1rem 0 0;
    background: white;
    .title{
        float: left;
        margin: 1rem;
        font-size: 1.1rem;
    }
    .money{
        float: left;
        margin: -.8rem 0 0 1rem;
        .up{
            color: #ff8d06;
            font-size: .5rem;
        }
        .price{
            color: #ff8d06;
            font-size: 1.5rem;
        }
    }
    .goodComment{
        width: 100%;
        height: 3rem;
        float: left;
        /* background: red; */
        margin-top: .5rem;
        border-top: .5rem solid #f2f2f2;
        border-bottom: .5rem solid #f2f2f2;
        .goodUrl{
            float: left;
            height: 2rem;
            margin: 1rem 0 0 1rem;
            img{
                width: 60%;
            }
        }
        .star{
            color: #ff8d06;
            margin-left: .2rem;
            margin: 1r;
            float: left;
            margin-top: 1rem;
        }
        .score{
            float: left;
            margin: 1.1rem 0 0 1.5rem;
            font-size: .8rem;
        }
        .comment{
            float: left;
            font-size: .8rem;
            margin: 1rem 0 0 5rem;
        }
        .iconComment{
            float: left;  
            margin: 1rem 0 0 .5rem;
        }
    }
    .buyVote{
        width: 100%;
        float: left;
        .voteTitle{
            float: left;
            margin: 1rem;
            font-weight: 300;
        }
        .hr{
            float: left;
            width: 90%;
            margin-left: 1rem;
            border-bottom: 1px solid #ccc;
        }
    }
    .explain{
        float: left;
        width: 100%;
        .explainTitle{
            font-size: 1rem;
            float: left;
            margin: 1rem 0 0 1rem;
            border-left: .3rem solid #00bcd4;
            line-height: 1rem;
            text-indent: .2rem;
        }
        .orderTime{
            clear: both;
            float: left;
            margin: 1rem 0 0 1.5rem;
            .orderTimeTitle{
                float: left;
                font-size: 1rem;
            }
            .orderTimeTitleTime{
                float: left;
                height: 1.1rem;
                width: 6rem;
                font-size: .7rem;
                margin-top: .2rem;
                color: white;
                line-height: 1.1rem;
                text-align: center;
                background: #ffa41b;
            }
            .orderTimeTitletext{
                float: left;
                margin: .5rem 0 0 5rem;
            }
            .validity{
                float: left;
                margin-top: .5rem;
            }
            .validityTime{
                float: left;
                margin: .5rem 0 0 1rem;
            }
            .validityRule{
                clear: both;
                float: left;
                margin-top: .5rem;
            }
            .validityText{
                float: left;
                margin-top: .5rem;
            }
        }
    }
    .refund{
        float: left;
        width: 100%;
        .explainTitle{
            font-size: 1rem;
            float: left;
            margin: 1rem 0 0 1rem;
            border-left: .3rem solid #00bcd4;
            line-height: 1rem;
            text-indent: .2rem;
        }
        .orderTime{
            clear: both;
            float: left;
            margin: 1rem 0 0 1.5rem;
            .orderTimeTitle{
                float: left;
                font-size: 1rem;
            }
            .orderTimeTitleTime{
                float: left;
                height: 1.1rem;
                width: 6rem;
                font-size: .7rem;
                margin-top: .2rem;
                color: white;
                line-height: 1.1rem;
                text-align: center;
                background: #ffa41b;
            }
            .orderTimeTitletext{
                float: left;
                margin: .5rem 0 0 5rem;
            }
            .validity{
                float: left;
                margin-top: .5rem;
            }
            .validityTime{
                float: left;
                margin: .5rem 0 0 0;
            }
            .validityRule{
                clear: both;
                float: left;
                margin-top: .5rem;
            }
            .validityText{
                float: left;
                margin-top: -1.2rem;
                margin-left: 5rem;
            }
        }
    }
    .more{
        float: left;
        margin: 2rem 0 0 8rem;
    }
    .tips{
        line-height: 3rem;
        margin-left: 1rem;
        font-weight: 600;
    }
    .tipsIcon{
        float: right;
        margin: 1rem;
    }
}
.borderNow{
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        float: left;
        .priceM{
            margin-left: 1rem;
        }
        .up{
            color: #ff8d06;
            font-size: .5rem;
        }
        .price{
            color: #ff8d06;
            font-size: 1.5rem;
        }
        .borderNowText{
            background: #ff8d06;
            color: white;
            float: right;
            height: 3rem;
            text-align: center;
            width: 40%;
        }
        
    }
</style>
