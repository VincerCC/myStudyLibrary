const express = require('express')
// 导入路由模块.js
const router = require('./router/index')
const app = express()
// 使用 ```app.use``` 函数注册路由模块
app.use(router)


app.listen(901, () => {
  console.log(`服务器默认启动在127.0.0.1:901`);
})