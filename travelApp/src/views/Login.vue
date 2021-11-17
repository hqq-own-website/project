<template>
    <div>
        <van-cell-group :model="loginForm">
            <h3>登录</h3>
            <van-field
                v-model="loginForm.username"
                label="用户名"
                placeholder="请输入用户名"
                :error-message="usermessage"
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
             <van-field class="lable" v-show="usermessage"
               :error-message="message"
            />
            <van-button type="primary" @click="login">登录</van-button>
            <van-button type="primary" @click="this.$router.push({path:'/register'})">注册</van-button>
        </van-cell-group>
    </div>
</template>

<script>
import {getUserInfo} from "../server/api.js"
    export default{
        name:"login",
        data(){
            return{
                usermessage:false,
                message:'',
                appkey :'89fb6464d444003e',
                loginForm:{
                    username:'',
                    pwd:'',
                },
                downIcon:true
            }
        },
        
        methods:{
            login(){
                if(this.loginForm.username===''||this.loginForm.pwd===''){
                    this.usermessage=true;
                    this.message='您有未输入项';
                }else{
                    this.usermessage=false;
               
                
                //  用.then(res=>{})的方式来调用promise的返回数据，res就是resolve(res)的数据
                    getUserInfo(this.loginForm).then(res=>{
                        if(res.data.status==='ok'){
                            this.$router.push({path:'/Home'})
                        }else{
                            this.usermessage=true;
                            this.message='账号或密码错误';
                        }
                    })
                }
            },
            //密码的显示与隐藏
            eye(){
                this.downIcon = !this.downIcon;
            }
        },
    }
</script>

<style lang="scss">
.van-cell-group{
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