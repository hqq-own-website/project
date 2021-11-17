<template>
    <div>

      <!-- 头部 -->
        <headers :data="localtion"></headers>

        <!-- 轮播图 -->
        <banner :data="imgUrl"></banner>
        <!-- 图标Icon -->
        <listIcon :data="listUrl"></listIcon>
        
        <!-- 本周热门榜单 -->
        <weekHot :data="weekHotUrl"></weekHot>

        <!-- 猜你喜欢 -->
        <guessLike :data="guessLikeContent"></guessLike>

        <!-- 周末去哪儿 -->

         <weekWhereGo :data="weekWhereGoList"></weekWhereGo>


         <!-- 底部 -->
         <footers></footers>
    </div>
</template>
<script>
import headers from '../components/headers.vue'
import banner from '../components/banner.vue'
import listIcon from '../components/listIcon.vue'
import weekHot from '../components/weekHot.vue'
import guessLike from '../components/guessLike.vue'
import weekWhereGo from '../components/weekWhereGo.vue'
import footers from '../components/footers.vue'
export default {
  components:{headers, banner, listIcon ,weekHot,guessLike,weekWhereGo,footers},
  data(){
    return{
      localtion:'重庆',
      
      imgUrl: [require("../assets/images/banner/banner1.jpg"),require("../assets/images/banner/banner2.jpg"),require("../assets/images/banner/banner3.png")],
      
      
      listUrl:[{url:require("../assets/images/list/list-j.png"),listTitle:'景点门票'},{url:require("../assets/images/list/list-h.png"),listTitle:'滑雪季',hot:'Hot'},
      {url:require("../assets/images/list/list-p.png"),listTitle:'泡温泉',hot:'Hot'},{url:require("../assets/images/list/list-d.png"),listTitle:'动植园'},
      {url:require("../assets/images/list/list-y.png"),listTitle:'游乐园'},{url:require("../assets/images/list/list-b.png"),listTitle:'必游榜单'},
      {url:require("../assets/images/list/list-yc-.png"),listTitle:'演出'},{url:require("../assets/images/list/list-c.png"),listTitle:'城市观光'},
      ],


      weekHotUrl:[{url:require("../assets/images/weekHot/weekHot-w.png"),price:'48',title:'武隆天坑地缝国...',topUrl:require("../assets/images/weekHot/top1.png")},{url:require("../assets/images/weekHot/weekHot-c.png"),price:'28',title:'重庆长江索道',topUrl:require("../assets/images/weekHot/top2.png")},
            {url:require("../assets/images/weekHot/weekHot-t.png"),price:'200',title:'武隆天生三桥风...',topUrl:require("../assets/images/weekHot/top3.png")},{url:require("../assets/images/acj.png"),price:'76',title:'梦幻奥陶纪'},{url:require("../assets/images/afs.png"),price:'65',title:'金佛山(5A)'},{url:require("../assets/images/dzsk.png"),price:'140',title:'大足石刻(5A)'},{url:require("../assets/images/hsg.png"),price:'5',title:'黑山谷(5A)'},{url:require("../assets/images/lhld.png"),price:'200',title:'乐和乐都野生动物世界(4A)'},
            {url:require("../assets/images/ljys.png"),price:'39',title:'两江国际影视城（民国街）'}
      ],


      guessLikeContent:[{ contentPosition:'九龙坡区',contentPrice:'12.00起',numComment:'2985条评论',contentTiele:'重庆动物园',contentUrl:require("../assets/images/contentImg/contentUrl-x.png")},
      {contentPosition:'武隆县',describe:'《变形金刚4》取景地',contentPrice:'48.00起',numComment:'18922条评论',contentTiele:'武隆天坑地缝国家地质公园',contentUrl:require("../assets/images/contentImg/contentUrl-w.png")},
      {contentPosition:'武隆县',contentPrice:'200.00起',numComment:'16222条评论',contentTiele:'印象武隆',contentUrl:require("../assets/images/contentImg/contentUrl-yx.png")},
      {contentPosition:'渝北区',describe:'不可错过的欢乐世界',contentPrice:'180.00起',numComment:'20002条评论',contentTiele:'重庆欢乐谷',contentUrl:require("../assets/images/contentImg/contentUrl-hlg.png")},
      {contentPosition:'渝中区',describe:'小伙伴们都收藏了，去看看吧~',contentPrice:'27.00起',numComment:'10002条评论',contentTiele:'重庆长江索道',contentUrl:require("../assets/images/contentImg/contentUrl-cjsd.png")},
      {contentPosition:'武隆县',contentPrice:'87.00起',numComment:'5002条评论',contentTiele:'天坑寨子民俗风情区',contentUrl:require("../assets/images/contentImg/contentUrl-tk.png")},
      {contentPosition:'武隆天坑...',describe:'重庆本月收藏Top5╰(￣▽￣)╭',contentPrice:'200.00起',numComment:'7002条评论',contentTiele:'武隆天生三桥风景区',contentUrl:require("../assets/images/contentImg/contentUrl-ts.png")},
      ],

      weekWhereGoList:[{ showUrl:require("../assets/images/showUrl/showUrl1.png"),showTitle:'重庆夜景大赏',showDescribe:'享巴渝特色，赏两江风光，感受不一样的重庆夜景！'},
      { showUrl:require("../assets/images/showUrl/showUrl2.png"),showTitle:'重庆必打卡',showDescribe:'重庆，非去不可'},
      { showUrl:require("../assets/images/showUrl/showUrl3.png"),showTitle:'本地人带你耍',showDescribe:'玩转小面之都，High翻天'}
      ]
    }
  },
  methods:{
    toCityList(){
      this.$router.push({path:'/refresh'})
    }
  }
}
</script>
<style lang="scss">






</style>
