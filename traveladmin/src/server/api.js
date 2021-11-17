// 引入common文件，{ }引入get post方法
import { post } from "./common.js"
// import { get }  from "./common.js"
import axios from 'axios';
// axios.defaults.baseURL = '/api'

//封装方法

// 修改用户
export function updateUser(callback) {
    console.log(callback)
    return post("http://localhost:3000/users/update",callback);
}
// 删除用户
export function delUser(callback) {
    console.log(callback)
    return post("http://localhost:3000/users/del",callback);
}
// 添加用户
export function addUsers(callback) {
    console.log(callback)
    return post("http://localhost:3000/users/add",callback);
}

// 添加景点
export function addTravel(callback) {
    console.log(callback)
    return post("http://localhost:3000/travels/add",callback);
}

// 删除景点
export function delTravel(callback) {
    console.log(callback)
    return post("http://localhost:3000/travels/del",callback);
}

// 修改景点信息
export function updateTravel(callback) {
    console.log(callback)
    return post("http://localhost:3000/travels/update",callback);
}

//管理员登录
export function adminLogin(callback) {
    console.log(callback)
    return post("http://localhost:3000/admins/login",callback);
}


//管理员注册
export function addAdmin(callback) {
    console.log(callback)
    return post("http://localhost:3000/admins/register",callback);
}


// 得到所有用户
export function getUser() {
    return new Promise((resolve, reject) => {
        axios({
            url: 'http://localhost:3000/users/find',
            method: 'GET',
        }).then((res) => {
            // console.log(res)
            resolve(res)
        }).catch((err) => {
            // console.log(err)
            reject(err)
        })
    })
}

// 得到所有景点信息
export function getTravel() {
    return new Promise((resolve, reject) => {
        axios({
            url: 'http://localhost:3000/travels/find',
            method: 'GET',
        }).then((res) => {
            // console.log(res)
            resolve(res)
        }).catch((err) => {
            // console.log(err)
            reject(err)
        })
    })
}