
const express = require('express')
// 调用 ```express.Router()```函数创建路由对象
const router = express.Router()
// 向路由实例对象上挂载路由
router.get('/routerGet', (req, res) => {
  console.log('routerGet');
  res.send('routerGet')
})
router.post('/routerPost', () => {
  console.log('routerPost');
})
// 使用 ```module.exports```向外共享路由对象
module.exports = router