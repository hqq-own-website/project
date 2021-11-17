<template>
    <div class="allTravel" v-for="(item,i) in list">
        <el-descriptions
        class="margin-top"
        title=""
        :column="3"
        :size="size"
        border
        >
            <template #extra>
            <el-button type="primary" size="small" @click="eidt(i)">编辑</el-button>
            </template>
            <el-descriptions-item>
            <template #label>
                景点名称
            </template>
            {{item.travelTitle}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                景点价格
            </template>
            {{item.parce}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                景点位置
            </template>
            {{item.local}}
            </el-descriptions-item>
            <el-descriptions-item class="img">
            <template #label>
                风景图片
            </template>
            <img :src="item.avatar">
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                景点描述
            </template>
            {{item.dec}}
            </el-descriptions-item>
        </el-descriptions>
    </div>

    <el-dialog v-model="dialogFormVisible" title="编辑景点信息">
            <el-form :model="form">
              <el-form-item label="景点名称" :label-width="formLabelWidth">
                <el-input v-model="form.travelTitle" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="景点价格" :label-width="formLabelWidth">
                <el-input v-model="form.parce" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="景点位置" :label-width="formLabelWidth">
                <el-input v-model="form.local" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="风景图片" :label-width="formLabelWidth">
                <img :src="imgUrl" class="img">
                <el-upload
                    class="upload-demo"
                    action="http://localhost:3000/upload/img"
                    name="myfile"
                    :on-success="onSuccess"
                    :show-file-list="false"
                >
                <el-button size="small" type="primary">上传图片</el-button>
                </el-upload>
              </el-form-item>
              <el-form-item label="景点描述" :label-width="formLabelWidth">
                <el-input v-model="form.dec" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="upTravel()" type="primary">保存</el-button>
                <el-button  @click="delTravel"
                  >删除景点信息</el-button
                >
              </span>
            </template>
        </el-dialog>
        

       <el-button type="primary" class="addTravel" @click="showAdd">新增景点</el-button>
        <el-dialog v-model="dialogTableVisible" title="新增景点">
            <el-form :model="form">
              <el-form-item label="景点名称" :label-width="formLabelWidth">
                <el-input v-model="form.travelTitle" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="景点价格" :label-width="formLabelWidth">
                <el-input v-model="form.parce" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="景点位置" :label-width="formLabelWidth">
                <el-input v-model="form.local" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="风景图片" :label-width="formLabelWidth">
                    <img :src="imgUrl" class="img">
                    <el-upload
                        class="upload-demo"
                        action="http://localhost:3000/upload/img"
                        name="myfile"
                        :on-success="onSuccess"
                        :show-file-list="false"
                    >
                      <el-button size="small" type="primary">上传图片</el-button>
                    </el-upload>
                
              </el-form-item>
              <el-form-item label="景点描述" :label-width="formLabelWidth">
                <el-input v-model="form.dec" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button type="primary" @click="saveTravel()">保存</el-button>
                <el-button  @click="dialogTableVisible = false"
                  >取消</el-button
                >
              </span>
            </template>
        </el-dialog>
</template>

<script>
import { addTravel,getTravel,updateTravel,delTravel } from '../server/api'
import { reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
export default {
  data() {
    return {
      size: '',
      url:require("../assets/logo.png"),
      list:'',
      imgUrl:'',
      travelId:''
    }
  },
  mounted() {
    getTravel().then((res)=>{
      console.log(res.data)
      if(res.data.code==200){
        this.list = res.data.data
        ElMessage({
            message: res.data.msg,
            type: 'success',
        })
      }else{
        ElMessage.error(res.data.msg)
      }
    })
  },
  methods: {
      eidt(i){
          console.log(i)
          this.dialogFormVisible = true
          this.form = this.list[i]
          // this.form.travelTitle = this.list[i].travelTitle
          // this.form.parce = this.list[i].parce
          // this.form.local = this.list[i].local
          this.imgUrl = this.list[i].avatar
          // this.form.dec = this.list[i].dec
          this.travelId =this.list[i]._id
      },
      onSuccess(res){
          console.log(res)
          this.imgUrl = res.data
      },
      showAdd(){
        
          this.form.travelTitle = ''
          this.form.parce = ''
          this.form.local = ''
          this.imgUrl = ''
          this.form.dec = ''
          this.dialogTableVisible = true
        
      },

      // 保存修改景点信息
      upTravel(){
        let parmas = {"_id":this.travelId,"travelTitle":this.form.travelTitle,"parce":this.form.parce,"avatar":this.imgUrl,"dec":this.form.dec}
        updateTravel(parmas).then((res)=>{
          if(res.data.code==200){
            setTimeout(()=>{
              this.$router.go(0)
            },1000)
            ElMessage({
                message: res.data.msg,
                type: 'success',
              })
          }else{
            ElMessage.error(res.data.msg)
          }
        })
      },

      // 删除景点
      delTravel(){
          let _id = {"_id":this.travelId}
          delTravel(_id).then((res)=>{
            if(res.data.code==200){
            setTimeout(()=>{
              this.$router.go(0)
            },1000)
            ElMessage({
                message: res.data.msg,
                type: 'success',
              })
          }else{
            ElMessage.error(res.data.msg)
          }
        })
      },

      //保存新增景点信息
      saveTravel(){
          this.form.avatar = this.imgUrl
          addTravel(this.form).then((res)=>{
          console.log(res.data)
            setTimeout(()=>{
              this.$router.go(0)
            },1000)
            ElMessage({
                message: res.data.msg,
                type: 'success',
              })
        })
      }
  },
  setup() {
    const state = reactive({
      dialogFormVisible: false,
      dialogTableVisible:false,
      form: {
        travelTitle: '',
        parce: '',
        local:'',
        avatar:'',
        dec:''
      },
      formLabelWidth: '120px',
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss">
.allTravel{
    margin-top: 10px;
    img{
        height: 8rem;
        width: 8rem;
        // margin-left: 20%;
    }
}

.el-main {
    --el-main-padding: 10px;
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: var(--el-main-padding);
}
.el-descriptions__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
}
.addTravel{
    float: right;
    margin-top: 10px;
}
.el-form-item__content {
    flex: 1;
    line-height: 0;
    position: relative;
    font-size: 14px;
    min-width: 0;
    button{
      position: absolute;
      left: 0;
    }
}
</style>