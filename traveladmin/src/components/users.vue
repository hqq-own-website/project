<template>
    <div id="alllist">
        <ul>
         <li 
          @mouseenter="show(i)" @mouseleave="block" v-for="(u,i) in alluser">
          <!-- 此处的:key="i"是绑定唯一key值，不然会出现选择框混乱 -->
          <span class="cck" :key="i">用户名：</span>
          {{u.username}}
          <el-button type="primary" @click="edit(i)" 
          icon="el-icon-edit">
          </el-button>
          
          <el-button v-show="isShow==i" type="primary" @click="del(i)" 
          icon="el-icon-delete">
          </el-button>
          </li>
       </ul>
       <el-dialog v-model="dialogFormVisible" title="编辑用户信息">
            <el-form :model="form">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="用户密码" :label-width="formLabelWidth">
                <el-input v-model="form.pwd" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="upUser()" type="primary">保存</el-button>
                <el-button  @click="dialogFormVisible = false"
                  >取消</el-button
                >
              </span>
            </template>
        </el-dialog>
        

       <el-button type="primary" @click="showAdd"
          >新增</el-button
        >
        <el-dialog v-model="dialogTableVisible" title="新增用户">
            <el-form :model="form">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="用户密码" :label-width="formLabelWidth">
                <el-input v-model="form.pwd" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button type="primary" @click="addUser()">保存</el-button>
                <el-button  @click="dialogTableVisible = false"
                  >取消</el-button
                >
              </span>
            </template>
        </el-dialog>
    </div>
</template>
<script> 
import { getUser,updateUser,delUser,addUsers } from '../server/api'
import { reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
export default { 
    data() {
        return {
            alluser:{},
            isShow:-1,
            userId:''
        }
    },
    mounted() {
        getUser().then((res)=>{
          this.alluser = res.data.data
        })
    },
    methods: {
        // 删除功能的显示
      show(l){
        // 对显现的标识符赋值，参数l是数组的索引；is-show若为true则显示，所以用索引来判断鼠标在哪一个li标签上
        this.isShow = l;
      },
    //删除功能的隐藏
      block(){
        // 鼠标离开则不显示，故而让isShow的值与索引值不相等
        this.isShow=-1;
        this.isEdit = -1;
      },
      edit(i){
        console.log(this.alluser[i]._id);
        this.dialogFormVisible = true;
        this.form.username = this.alluser[i].username;
        this.form.pwd = this.alluser[i].pwd;
        this.userId = this.alluser[i]._id;
      },
      del(i){
          let _id = {"_id":this.alluser[i]._id}
          console.log(_id)
          delUser(_id).then((res)=>{
            console.log(res.data)
            setTimeout(()=>{
              this.$router.go(0)
            },1000)
            ElMessage({
                message: res.data.msg,
                type: 'success',
              })
            })
      },
      upUser(){
        console.log(this.userId);
        console.log(this.form.username);
        console.log(this.form.pwd);
        let parmas = {"_id":this.userId,"username":this.form.username,"pwd":this.form.pwd}
        updateUser(parmas).then((res)=>{
          console.log(res.data)
          
          setTimeout(()=>{
            this.$router.go(0)
          },1000)
          ElMessage({
              message: res.data.msg,
              type: 'success',
            })
        })
      },
      showAdd(){
        this.dialogTableVisible = true;
        this.form.username = '';
        this.form.pwd = '';
      },
      addUser(){
        addUsers(this.form).then((res)=>{
          console.log(res.data)
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
      }
    },
    setup() {
    const state = reactive({
      dialogFormVisible: false,
      dialogTableVisible:false,
      form: {
        username: '',
        pwd: '',
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
.el-aside {
    color: #333;
  }
  #alllist {
        ul li{
        list-style: none;
        margin-top:0.4rem;
        height: 4rem;
        line-height: 4rem;
        text-indent: 2rem;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border: 1px solid #0099ff;
      }
      .el-button{
          float: right;
          margin-top: 0.8rem;
          margin-right: 1rem;
          /* display: none; */
      }
      .dialog-footer{
          display: inline-block;
          line-height: 1;
          min-height: 40px;
          white-space: nowrap;
          cursor: pointer;
      }
      .el-form-item__label {
          flex: 0 0 auto;
          text-align: left;
          font-size: var(--el-form-label-font-size);
          color: var(--el-text-color-regular);
          line-height: 40px;
          padding: 0 12px 0 0;
          box-sizing: border-box;
      }
      .el-form-item__content{
        flex: 1;
        line-height: 40px;
        position: relative;
        font-size: 14px;
        left: -40px;
      }
  }
  .cck{
    float: left;
    width: 12%;
    height: 70%;
    /* margin: .53rem -1rem 0 1rem; */
  }
</style>