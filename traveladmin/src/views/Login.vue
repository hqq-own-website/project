<template>
    <div>
        <van-cell-group :model="loginForm">
            <h3>登录</h3>
            <van-field
                v-model="loginForm.username"
                label="用户名"
                placeholder="请输入用户名"
                clearable
            />
            <van-field
                v-model="loginForm.pwd"
                label="用户密码"
                v-show="downIcon"
                right-icon="eye"
                @click-right-icon="eye"
                placeholder="请输入密码"
                type="password"
            />
            <van-field
                v-model="loginForm.pwd"
                label="用户密码"
                v-show="!downIcon"
                right-icon="eye-o"
                @click-right-icon="eye"
                placeholder="请输入密码"
            />
            <van-button type="primary" @click="toHome">登录</van-button>
            <van-button type="primary" @click="toregist">注册</van-button>
        </van-cell-group>
    </div>
</template>

<script>
import { adminLogin } from '../server/api'
import { ElMessage } from 'element-plus'
    export default{
        name:"login",
        data(){
            return{
                loginForm:{
                    username:'',
                    pwd:'',
                },
                downIcon:true
            }
        },
        
        methods:{
            eye(){
                this.downIcon = !this.downIcon;
            },
            toHome(){
                if(this.loginForm.username===''||this.loginForm.password===''){
                        ElMessage.error('您有未输入项')
                }else{
               
                //  用.then(res=>{})的方式来调用promise的返回数据，res就是resolve(res)的数据
                   adminLogin(this.loginForm).then((res)=>{
                        if(res.data.code==200){
                            let user = this.loginForm.username
                            localStorage.setItem("user",user)
                            setTimeout(()=>{
                            this.$router.push('/admin/users/userAdmin')
                            },1000)
                            ElMessage({
                                message: res.data.msg,
                                type: 'success',
                            })
                        }else{
                            ElMessage.error('账号或密码错误')
                        }
                    })
                }
                
            },
            toregist(){
                this.$router.push('/regist')
            }
        },
    }
</script>

<style lang="scss">
.van-cell-group{
        text-align: center;
        // margin: 20% 2rem 0 2rem;
        /* margin: 6% auto; */
        border-radius: 2rem;
        position: relative;
        left: 35%;
        top: 8rem;
        box-shadow: 0 0 .2rem aliceblue;
        background-clip: border-box;
        width: 30%;
        height: 30rem;
        padding: 1rem 2rem;
        /* width: 100%; */
        border: solid .1rem #eaeaea;
        h3{
            color: #00cccc;
            margin-top: 3rem;
        }
        .van-button{
            width: 100%;
            margin-top: 1rem;
        }
        .lable{
            border: none;

            font-size: 2rem;
            font-weight: 600;
            .van-field__control {
                display: none;
            }
            .van-field__error-message {
                font-size: 1rem;
                text-align: center;
            }
        }
}
.van-cell{
    border: 1px solid #0099ff;
    margin-top: 1rem;
}
label{
    color: #00cccc;
}
</style>