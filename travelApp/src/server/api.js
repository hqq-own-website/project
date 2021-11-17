// 引入common文件，{ }引入get post方法
import { post } from "./common.js"
// import { get }  from "./common.js"
import axios from 'axios';
axios.defaults.baseURL = '/api'

//封装方法

export function getUserInfo(callback) {
    console.log(callback)
    return post("http://localhost:3000/users/login", callback);
}

export function addUsers(callback) {
    console.log(callback)
    return post("http://localhost:3000/users/add",callback);
}

export function getLocaltion() {
    return new Promise((resolve, reject) => {
        axios({
            url: '/province?appkey=89fb6464d444003e',
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