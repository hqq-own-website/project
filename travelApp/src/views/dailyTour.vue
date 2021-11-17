<template>
    <div>
        <div class="dailyHeader">
            <span class="iconfont back" @click="backtoHome">&#xe677;</span>
            <div class="dailyHeader-serch-city">
                <input type="text" placeholder="输入/景点/游玩主题" ref="inputtext">
                <span class="serch" @click="serchplace">搜索</span>
            </div>
        </div>
        <div v-if="resultData.length > 0">
                <div class="dailyList" v-for="item in resultData">
                    <div class="content" >
                        <van-card
                        :price="item.contentPrice"
                        :desc="item.numComment"
                        :title="item.contentTiele"
                        :thumb="item.contentUrl"
                        />
                        <div class="describe">
                            <span class="cqGo">重庆出发</span>
                            <span class="free">无自费</span>
                            <span class="noShopong">无购物</span>
                        </div>
                        
                    </div>
                </div>
        </div>

        <div v-else>
                <div class="dailyList" v-for="(item,i) of data">
                        <div class="content">
                            <van-card
                            :price="item.contentPrice"
                            :desc="item.numComment"
                            :title="item.contentTiele"
                            :thumb="item.contentUrl"
                            @click="sendData(i)"
                            ref="sendDate"
                            />
                            <div class="describe">
                                <span class="cqGo">重庆出发</span>
                                <span class="free">无自费</span>
                                <span class="noShopong">无购物</span>
                            </div>
                                
                        </div>
                </div>
                <van-pagination v-model="currentPage" :total-items="8" :items-per-page="4" @click="go" />
        </div>
        

        <div class="whereVote">去哪儿门票</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            resultData:'',
            data:[{ contentPrice:'12.00起',numComment:'已售12132',contentTiele:'【去哪儿精选】武隆天坑地缝1日游 赠保险√含中餐√ 豪华小团√',contentUrl:require("../assets/images/contentImg/contentUrl-x.png")},
            {contentPrice:'48.00起',numComment:'已售12132',contentTiele:'【重庆交运】武隆天坑地缝一日游 （国企品质+轻奢小团+上门接）',contentUrl:require("../assets/images/contentImg/contentUrl-w.png")},
            {contentPrice:'200.00起',numComment:'已售12132',contentTiele:'【去哪儿精选】重庆一日游 （长江索道+磁器口+洪崖洞+两江游）',contentUrl:require("../assets/images/contentImg/contentUrl-yx.png")},
            {contentPrice:'180.00起',numComment:'已售12132',contentTiele:' 重庆市内全景一日游  免费接 送火锅底料 长江索道洪崖洞磁器口',contentUrl:require("../assets/images/contentImg/contentUrl-hlg.png")},
            ],
      currentPage: 1,
    }
    },
    methods: {
        backtoHome(){
            this.$router.push({path:'/Home'})
        },

        // 搜索功能
        serchplace(){
            // this.$refs.inputtext
            const inputValue = this.$refs.inputtext.value;
            if(inputValue===''||inputValue===' '){
                this.resultData = ''
                this.$refs.inputtext.value='';
            }else{
                this.resultData = this.data.filter((item)=>{
                    if(item.contentTiele.includes(inputValue)){
                        
                        // console.log(!item.contentTiele.includes(inputValue))                        
                        return item;
                    }
                });
                if(this.resultData.length===0){
                        this.$notify({
                        message: '未找到相关内容',
                        type: 'warning',
                        duration: 1000,
                        });
                    }
            }
            console.log(this.resultData)
        },

        //分页功能
        go(){
            if(this.currentPage==1){
                const newData = [
                    { contentPrice:'12.00起',numComment:'已售12132',contentTiele:'【去哪儿精选】武隆天坑地缝1日游 赠保险√含中餐√ 豪华小团√',contentUrl:require("../assets/images/contentImg/contentUrl-x.png")},
                    {contentPrice:'48.00起',numComment:'已售12132',contentTiele:'【重庆交运】武隆天坑地缝一日游 （国企品质+轻奢小团+上门接）',contentUrl:require("../assets/images/contentImg/contentUrl-w.png")},
                    {contentPrice:'200.00起',numComment:'已售12132',contentTiele:'【去哪儿精选】重庆一日游 （长江索道+磁器口+洪崖洞+两江游）',contentUrl:require("../assets/images/contentImg/contentUrl-yx.png")},
                    {contentPrice:'180.00起',numComment:'已售12132',contentTiele:' 重庆市内全景一日游  免费接 送火锅底料 长江索道洪崖洞磁器口',contentUrl:require("../assets/images/contentImg/contentUrl-hlg.png")},                ]
                this.data = newData
            }
            if(this.currentPage==2){
                const newData = [
                    {contentPrice:'27.00起',numComment:'已售12132',contentTiele:'【纯玩上门接】旗舰小团+花园自助餐+武隆天坑地缝vip1日游',contentUrl:require("../assets/images/contentImg/contentUrl-cjsd.png")},
                    {contentPrice:'87.00起',numComment:'已售12132',contentTiele:'【热销爆款】梦幻奥陶纪一日游√ 上门接您√17人保姆舱赠意外险',contentUrl:require("../assets/images/contentImg/contentUrl-tk.png")},
                    {contentPrice:'200.00起',numComment:'已售12132',contentTiele:'『铂金纯玩』梦幻奥陶纪一日游｜4千好评+VIP睡眠舱+上门接',contentUrl:require("../assets/images/contentImg/contentUrl-ts.png")},
                ]
                this.data = newData
            }
        },
        sendData(i){
            // alert(123)
            console.log(this.data[i])
            console.log(this.data[i].contentUrl)
            console.log(this.data[i].contentPrice)
            console.log(this.data[i].contentTiele)
            console.log(this.data[i].numComment)
            let obj = [{url:this.data[i].contentUrl,price:this.data[i].contentPrice,title:this.data[i].contentTiele,dexc:this.data[i].numComment}];
            console.log(obj)
            localStorage.setItem("showDate",JSON.stringify(obj))
            this.$router.push({path:'/dailyDetails'})
            // let a =JSON.parse(localStorage.getItem("showDate"))
            // console.log(a)
        }
    },
}
</script>

<style lang="scss">
.dailyHeader{
  height: 4rem;
  width: 100%;
  text-align: center;
  background: #00bcd4;
  line-height: 4rem;
  margin: 0;
  .back{
        /* float: left; */
    color: aliceblue;
    font-size: 1.6rem;
    margin-left: 1.5rem;
    margin-top: 0.4rem;
    font-weight: 600;
    position: absolute;
    /* background: red; */
    left: -.3rem;
    top: -.3rem;
  }
}
.dailyHeader-serch-city{
  input{
    border: none;
    border-radius: .4rem;
    width: 65%;
    height: 2.3rem;
    margin-left: 2rem;
    color: #666666;
    text-align: center;
    font-size: .5rem;
  }
  .serch{
      margin-left: 1rem;
      color: aliceblue;
      font-weight: 600;
  }
}
.dailyList{
    width: 100%;
    height: 8rem;
    margin-top: .5rem;
    // background: red;
    
    .content{
        margin-top: .5rem;
        .van-card{
            background-color: white;
        }
        .van-card__price{
            float: right;
        }
        .van-card__title {
            font-size: 1rem;
            font-weight: 600;
        }
        .van-card__price-integer {
            // font-size: .5rem;
            color: red;
            font-size: 1.2rem;
            font-weight: 600;
        }
        .van-card__price-currency{
            // font-size: .5rem;
            color: red;
            margin-left: .7rem;
            font-weight: 600;
        }
        .van-card__desc {
            position: relative;
            top: 2.2rem;
            left: 1rem;
        }
        .van-card__price-decimal {
            font-size: .1rem;
            color:  #bcbcbc;
        }
        .describe{
            span{
                position: relative;
                margin-left: .5rem;
                font-size: .1rem;
                top: -3.5rem;
                left: 7rem;
            }
            .cqGo{
                color: #00bcd4;
            }
            
        }

    }
    
}
.whereVote{
    color: #00bcd4;
    margin: 1rem 0 1rem 38%;
    font-size: 1.2rem;
}
</style>