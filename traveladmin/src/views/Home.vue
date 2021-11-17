<template>
    <el-container>
        <el-header>
            <div class="travel-title">旅游App后台管理系统</div>
            <div class="travel-user">
                <span>{{user}}</span>
                <span class="out" @click="out">退出登录</span>
            </div>
        </el-header>
              <el-container style="height: 500px; border: 1px solid #eee">
                <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                  <el-menu :default-openeds="['1', '3']">
                    <el-sub-menu index="1">
                      <template #title
                        ><span class="el-icon-message"></span>用户操作</template
                      >
                      <el-menu-item-group>
                      <router-link to="/admin/users/userAdmin" style="text-decoration:none"><el-menu-item>用户管理</el-menu-item></router-link>
                      
                      </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                      <template #title><span class="el-icon-menu"></span>景点操作</template>
                      <el-menu-item-group>
                        <router-link to="/admin/users/travel" style="text-decoration:none"><el-menu-item>景点管理</el-menu-item></router-link>
                      </el-menu-item-group>
                    </el-sub-menu>
                  </el-menu>
                </el-aside>
                <el-container>
                  <el-main style="height:100%">
                    <router-view></router-view>
                  </el-main>
                </el-container>
              </el-container>
    </el-container>
</template>

<script>
// let user = localStorage.getItem("user")
console.log( localStorage.getItem("user"))
export default {
    data() {
      return {
        user:localStorage.getItem("user")
      }
    },
    methods: {
      out(){
        localStorage.removeItem("user")
        this.$router.push('/')
      }
    },
}
</script>

<style lang="scss">
.out{
  cursor: pointer;
}
.el-container{
    height: 100%;
    .el-header {
        background: #0099ff;
        color: white;
        line-height: 350%;
        font-weight: 600;
        .travel-title{
            float: left;
        }
        .travel-user{
            float: right;
            span{
                margin-left: 1rem;
            }
            
        }
    }
    
}
.el-menu{
  color: white;
  li{
    background: #0099ff;
    color: white;
    font-weight: 600;
    --el-menu-text-color:white;
    --el-menu-active-color:white;
  }
  
}
// .el-aside {
//         // clear: both;
//         background: #0099ff;
//         color: white;
//         text-align: center;
//     }
// .el-main{
//       height: 100%;
//     }


// element.style{
//   background: #0099ff;
//         color: white;
//         text-align: center;
// }
</style>