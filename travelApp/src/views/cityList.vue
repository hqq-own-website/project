<template>
    <div>
        <div id="nav">
              <span class="iconfont backToHome" @click="toHome">&#xe677;</span>
              <div class="domestic" ref="domestic" @click="turndomestic">境内</div>
              <div class="abroad" ref="abroad" @click="turnabroad">境外·港澳台</div>
          <!-- <div class="serch-city-citiList">
              <input type="text" placeholder="请输入城市名称或拼音" ref="seacherInput" v-model="keyWord" @blur="seacherCity">
          </div> -->
          <searchCity :data="allCity"></searchCity>

        </div>


        <!-- 当前城市 -->
        
        <nowCity :data="currentCity"></nowCity>

        <!-- 热门城市 -->

        <hotCity :data="hotCity"></hotCity>


        <!-- 所有城市 -->

        <allCity :data="allCitys" :letter="letter"></allCity>


    </div>
</template>
<script>
import {getLocaltion} from "../server/api.js"
import nowCity from '../components/cityList/nowCity.vue'
import hotCity from '../components/cityList/hotCity.vue'
import allCity from '../components/cityList/allCity.vue'
import searchCity from '../components/cityList/searchCity.vue'
var pinyin = require('js-pinyin');
export default {
  components:{nowCity,hotCity,allCity,searchCity},
  data(){
    return{
      currentCity:'重庆',
      hotCity:['北京','上海','成都','哈尔滨','三亚','福建'],
      // allCity:[{name:'北京'},{name:'成都'},{name:'哈尔滨'},{name:'三亚'},{name:'福建'},{name:'北京'},{name:'北京'},],
      allCity:'',
      allCitys:[],
      citys:[],
      letter:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    }
  },
  
  mounted() {
    getLocaltion().then((res)=>{
      this.allCity = res.data.result
      console.log(allCity)
      for (let i = 0; i < this.allCity.length; i++) {
            //遍历数组,拿到城市名称
            let cityName = this.allCity[i].name;
            console.log(cityName)
            //取全部城市的首字母
            let fristName = pinyin.getCamelChars(cityName).substring(0, 1);    //这里截取首字母的第一位
            console.log(fristName)
            //给原json添加首字母键值对
            this.allCity[i]['fristName'] = fristName;
            //放入新数组
            console.log(this.allCity)
        }
        // 将首字母相同的地区放入同一个数组对象
        for(let i= 0; i<this.allCity.length;i++){
            console.log(this.citys)
            let n = this.citys.indexOf(this.allCity[i].fristName);
            if(n==-1){
                this.citys.push(this.allCity[i].fristName);
                this.allCitys.push({fristName:this.allCity[i].fristName,name:[this.allCity[i].name]})
            }else{
                this.allCitys[n].name.push(this.allCity[i].name)
            }
        }
    })
    
    
  },
  methods: {
      toHome(){
          this.$router.push({path:'/Home'});
      },
      turndomestic(){
        if(this.$refs.domestic.style.color === 'aliceblue'){   

            this.$refs.domestic.style.background = 'aliceblue';
            this.$refs.domestic.style.color = '#00bdd5';

            this.$refs.abroad.style.background = '#00bdd5';
            this.$refs.abroad.style.color = 'aliceblue';
        }
      },
      turnabroad(){
          if(this.$refs.abroad.style.color === 'aliceblue'||this.$refs.abroad.background === 'aliceblue'||this.$refs.abroad.style.color === ''){
            
            this.$refs.domestic.style.background = '#00bdd5';
            this.$refs.domestic.style.color = 'aliceblue';
            
            //境外
            this.$refs.abroad.style.background = 'aliceblue';
            this.$refs.abroad.style.color = '#00bdd5';
        }
      },
      
  },
}
</script>
<style lang="scss">
#nav{
  height: 4rem;
  width: 100%;
  text-align: center;
  background: #00bcd4;
  line-height: 4rem;
  margin: 0;
  .domestic{
    width: 30%;
    text-align: center;
    line-height: 1.1rem;
    font-size: .5rem;
    color: #00bcd4;
    height: 1.1rem;
    position: absolute;
    left: 4.3rem;
    top: .5rem;
    border: .1rem solid aliceblue;
    background: aliceblue;
  }
  .abroad{
    width: 30%;
    height: 1.1rem;
    line-height: 1.1rem;
    font-size: .5rem;
    text-align: center;
    color: aliceblue;
    position: absolute;
    left: 10.9rem;
    top: .5rem;
    border: .1rem solid aliceblue;
    background: #00bdd5;
  }
  .backToHome{
    color: aliceblue;
    font-size: 1.2rem;
    margin-left: 0.5rem;
    margin-top: -.6rem;
    position: absolute;
    left: -.3rem;
    top: -.3rem;
  }
}
.serch-city-citiList{
  input{
    border: none;
    border-radius: .4rem;
    width: 85%;
    height: 1.5rem;
    margin-top: 2rem;
    color: #666666;
    text-align: center;
    font-size: .5rem;
  }
}
.currentCity{
    width: 100%;
    height: 2rem;
    font-family: 'PINGFANG BOLD';
    background: #efefef;
    font-size: .1rem;
    color: #1c1212;
    line-height: 2rem;
    text-indent: 1rem;
    font-weight: 600;
}
.currentCity-city{
    height: 3.5rem;
    width: 100%;
    font-size: .8rem;
    font-weight: 600;
    // background: red;
    div{
        border: .02rem solid #cdcdce;
        border-radius: .2rem;
        width: 28%;
        height: 40%;
        text-align: center;
        line-height: 1.5rem;
        float: left;
        margin: 1rem 0 0 .5rem;
    }
}
</style>
