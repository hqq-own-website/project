<template>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="this.$router.push({path:'/'})" v-show="show">
        返回登录界面
    </van-button>
    <van-form >
         <h3>注册</h3>
            <!-- 通过 pattern 进行正则校验 -->
            <van-field
                v-model="value1"
                label="用户名"
                name="pattern"
                placeholder="字母或数字，4-14"
                :rules="[{ pattern, message: '请输入正确内容' }]"
            />
            <!-- 通过 validator 进行函数校验 -->
            <van-field
                v-model="value2"
                label="用户密码"
                name="validator"
                type="password"
                v-show="downIcon"
                @click-right-icon="eye"
                right-icon="eye"
                placeholder="字母加数字，4-14"
                :rules="[{ validator, message: '请输入正确内容' }]"
            />

            <van-field
                v-model="value2"
                label="用户密码"
                name="validator"
                v-show="!downIcon"
                right-icon="eye-o"
                @click-right-icon="eye"
                placeholder="字母加数字，4-14"
                :rules="[{ validator, message: '请输入正确内容' }]"
            />


            <!-- 通过 validator 进行异步函数校验 -->
            <van-field
                v-model="value3"
                label="确认密码"
                type="password"
                v-show="downIcon1"
                @click-right-icon="eye1"
                right-icon="eye"
                name="asyncValidator"
                placeholder="请输入您的确认密码"
                :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
            />

             <van-field
                v-model="value3"
                label="确认密码"
                v-show="!downIcon1"
                @click-right-icon="eye1"
                right-icon="eye-o"
                name="asyncValidator"
                placeholder="请输入您的确认密码"
                :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
            />

            <div style="margin: 16px;">
                <van-button  native-type="submit" @click="submiting">提交</van-button>
            </div>
    </van-form>
</template>

<script>
import { Toast } from 'vant';
import { addUsers } from '../server/api';

export default {
    data() {
    return {
      show:false,
      value1: '',
      value2: '',
      value3: '',
      pattern: /^[0-9a-zA-Z]*([a-zA-Z]+[a-zA-Z]+)[0-9a-zA-Z]*$/,
      downIcon:true,
      downIcon1:true,
    };
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /^[0-9a-zA-Z]*([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+)[0-9a-zA-Z]*$/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        // Toast.loading('验证中...');
        setTimeout(() => {
        //    Toast.clear();
          resolve(/^[0-9a-zA-Z]*([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+)[0-9a-zA-Z]*$/.test(val));
        }, 1000);
      });
    },
    submiting(){
        Toast.loading('验证中...');
        setTimeout(() => {
            Toast.clear();
            if(this.value2!=this.value3){
                this.$notify({
                        message: '两次密码不一致',
                        type: 'warning',
                        duration: 1000,
                    });
            }
            if(this.value1!=''&&this.value2==this.value3&&this.value2!=''&&this.value3!=''){
                    this.form = {"username":this.value1,"pwd":this.value2}
                    addUsers(this.form).then((res)=>{
                    console.log(res.data)
                    if(res.data.code==200){
                        setTimeout(()=>{
                        this.$router.push({path:'/'})
                        },1000)
                        this.$notify({
                        message: '注册成功',
                        type: 'success',
                        duration: 1000,
                    });
                    }else{
                        ElMessage.error(res.data.msg)
                    } 
                    })
                }
        }, 1000);
        
    },
     eye(){
            this.downIcon = !this.downIcon;
        },
    eye1(){
            this.downIcon1 = !this.downIcon1;
        }
        
  },
}
</script>

<style lang="scss">
.van-form{
    text-align: center;
    margin: 20% 2rem 0 2rem;
    /* margin: 6% auto; */
    border-radius: 2rem;
    box-shadow: 0 0 .2rem aliceblue;
    background-clip: border-box;
    padding: 1rem 2rem;
    /* width: 100%; */
    border: solid .1rem #eaeaea;
    h3{
            color: #00cccc;
        }
     .van-button{
            width: 100%;
            border: none;
            background: #0099ff;
            color: #eaeaea;
            margin-top: 1rem;
        }
        .van-field__label {
            margin-right: -1rem;
        }
}
</style>