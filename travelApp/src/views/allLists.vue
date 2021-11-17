<template>
    <div>
        <headers></headers>
        <listes :data="desc"></listes>
    </div>
</template>

<script>
import listes from '../components/allListes/listes.vue'
import headers from '../components/allListes/headers.vue'
export default {
    components:{
        listes,headers
    },
    data() {
        return {
            desc:[{ contentPosition:'九龙坡区',contentPrice:'12.00起',numComment:'2985条评论',contentTiele:'重庆动物园(4A)',contentUrl:require("../assets/images/contentImg/contentUrl-x.png"),describe1:'重庆动物园成人票',describe2:'重庆动物园儿童票',price1:'24',price2:'12'},
      {contentPosition:'武隆县',contentPrice:'48.00起',numComment:'18922条评论',contentTiele:'武隆天坑地缝国家地质公园',contentUrl:require("../assets/images/contentImg/contentUrl-w.png"),describe1:'【提前一天订】武隆天生三桥旺季成人票(含...',describe2:'【当日订】武隆天生三桥旺季成人票(含电梯）',price1:'121',price2:'125'},
      {contentPosition:'万盛区',contentPrice:'5.00起',numComment:'1625条评论',contentTiele:'黑山谷(5A)',contentUrl:require("../assets/images/hsg.png"),describe1:'【成人票】黑山谷旺季门票',describe2:'【优惠人群票】黑山谷旺季门票',price1:'80',price2:'42'},
      {contentPosition:'大足区',contentPrice:'140.00起',numComment:'2002条评论',contentTiele:'大足石刻(5A)',contentUrl:require("../assets/images/dzsk.png"),describe1:'【成人票】宝顶山景区门票',describe2:'【成人票】北山景区门票',price1:'112',price2:'68'},
      {contentPosition:'乐和乐都',contentPrice:'200.00起',numComment:'10002条评论',contentTiele:'乐和乐都野生动物世界(4A)',contentUrl:require("../assets/images/lhld.png"),describe1:'【提前1天订】乐和乐都成人一日票',describe2:'【提前1天订】乐和乐都儿童一日票',price1:'184',price2:'138'},
      {contentPosition:'南川区',contentPrice:'65.50起',numComment:'5002条评论',contentTiele:'金佛山(5A)',contentUrl:require("../assets/images/afs.png"),describe1:'【成人票】金佛山世界昆虫博物园门票',describe2:'  金佛山世界昆虫博物园亲子票（1大1小）',price1:'65.5',price2:'88'},
      {contentPosition:'万盛区',contentPrice:'200.00起',numComment:'7002条评论',contentTiele:'梦幻奥陶纪',contentUrl:require("../assets/images/acj.png"),describe1:'【1日票】梦幻奥陶纪淡季成人票（周末）',describe2:'  【1日票】梦幻奥陶纪淡季成人票（平日）',price1:'230',price2:'210'},
      ],
        }
    },
    methods:{
       
    }
}
</script>

<style lang="scss">

</style>