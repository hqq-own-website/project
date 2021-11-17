<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search-content" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list"  @click="cityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
 
<script>
import Bscroll from 'better-scroll'
var pinyin = require('js-pinyin');
export default {
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: ['data'],
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        // console.log(this.data)
        this.data.forEach((value) => {
            const spell = pinyin.getCamelChars(value.name);
            console.log(value.name)
            if (spell.indexOf(this.keyword) != -1 || value.name.indexOf(this.keyword) != -1) {
                    result.push(value)
            }
        })
        console.log(result)
        this.list = result
      }, 100)
    }
  },
  methods: {
    cityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs['search-content'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  }
}
</script>
 
<style lang="scss">
    .search
    {
        height: .72rem;
        // background: $bgColor;
        padding: 0.1rem;
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
    
  .search-content{
        z-index: 1;
        overflow: hidden;
        position :absolute;
        height: 100%;
        top :4rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        .search-item
        {
            background: #fff;
        }
        .border-bottom{
            margin-top: 1rem;
            height: 2rem;
            border: 1px solid #eae8e8;
            line-height: 2rem;
            letter-spacing: .3rem;
            font-weight: 600;
        }  
  }
      
</style>