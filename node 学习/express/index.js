// 导入 express
const express = require('express')
// 创建 web 服务器
const server = express()
// 启动服务器 server.listen(端口号, 启动成功后的回调函数)
const port = 8081
// 启动服务器
server.listen(port, ()=>{
    // 服务器启动成功后会触发
    // 服务器默认启动在127.0.0.1:80
    // 也可以用 localhost:80访问
    console.log(`服务器默认启动在127.0.0.1:${port}`);
})
server.get('/test', (req, res) => {
  // req请求对象，包含请求相关的属性和方法
  // res 响应对象，包含响应相关的属性和方法
  res.send(req.query)
})
server.get('/getId/:ids/:username', (req, res) => {
  // 获取 动态参数
  // req请求对象，包含请求相关的属性和方法
  // res 响应对象，包含响应相关的属性和方法
  res.send(req.params)
})
server.post('请求 url', (req, res) => {
  // req请求对象，包含请求相关的属性和方法
  // res 响应对象，包含响应相关的属性和方法
})