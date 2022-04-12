const express = require('express')
const app = express()

// 定义一个中间件处理函数
const mw = function (req, res, next) {
  console.log('我是一个中间件函数');
  // 中间件中给 req、res 添加属性，下游路由或者中间件能直接获取到，他们是共享的
  req.a = '100'
  res.a = '101'
  // 当前中间件处理完毕后，需要调用 next()函数，表示将流转关系转交给下一个中间件或者路由
  next()
}


// 注册为全局生效的中间件
app.use(mw)

app.get('/test', (req, res) => {
  res.send(`来自上游中间件的req属性${req.a},res 属性${res.a}`)
})
app.listen(999, () => {
  console.log(`服务器默认启动在127.0.0.1:999`);
})