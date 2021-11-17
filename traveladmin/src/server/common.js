import axios from 'axios'
// import { config } from 'vue/types/umd';

// 测试环境的接口
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL=''
}

// 生产环境的接口
if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL=''
}

//设置超出时间
axios.defaults.timeout = 5000;
axios.interceptors.request.use(
    config => {
        config.headers = { DeviceType: "H5" }
        return config;
    }
)

// export function get(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, {
//             params:params
//         }).then(res => {
//             console.log(res)
//             resolve(res)
//         }).catch(err => {
//             console.log("错误:", err)
//             reject(err)
//         })
//     })
// }
//get请求
// export function get(url) {
//     return new Promise((resolve, reject) => {
//         axios.get(url).then(res => {
//             console.log(res)
//             resolve(res)
//         }).catch(err => {
//             console.log("错误:", err)
//             reject(err)
//         })
//     })
// }

// 查询用户的post请求
// export function post (url) {
//     return new Promise((resolve, reject) => {
//         axios.post(url).then(res => {
//             console.log(res.data)
//             resolve(res) //将获得的数据打包返回
//         }).catch(err => {
//             console.log("错误:", err)
//             reject(err)
//         })
//     })
// }



export function post (url,params) {
    return new Promise((resolve, reject) => {
        axios.post(url,
            params
        ).then(res => {
            console.log(params)
            console.log(res.data)
            resolve(res) //将获得的数据打包返回
        }).catch(err => {
            console.log("错误:", err)
            reject(err)
        })
    })
}