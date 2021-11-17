// 可选文件

// vue.config.js
module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  // outputDir: process.env.NODE_ENV === 'production' ? '/dist/' : '/' ,//生产打包
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.binstd.com/area",
        //  target: 'http://api.douban.com/v2',
        changeorigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
