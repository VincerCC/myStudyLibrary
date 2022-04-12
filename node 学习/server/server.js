
// 启动服务
// 导入 http 模块
const http = require('http')
const port = 809
// 创建 web 服务器实例
const server = http.createServer()
// 为服务器实例绑定request 事件
server.on('request', (req,res) => {
    // 只要有客户端来请求我们的服务器，就会触发 request 事件
    // ...
    const {url, method} = req
    // req.url 是客户端请求的 url 地址，端口号后边的地址
    // req.methods 是客户端请求的类型
    console.log(`your url is ${url}, method is ${method}`);

    // 为了防止中文乱码，需要设置响应头content-type 为 utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    // res 响应对象
    // res.end() 向客户端响应一些内容
    const responseData = `<h1>乱码your url is ${url}, method is ${method}</h1>`
    res.end(responseData)

    // 返回 html 显示在页面上
    // fs.readFile('./index.html', 'utf8', function(err, data) {
    //   if(err) {
    //     console.log('读取失败了', err)
    //     return
    //   }
    //   console.log(data);

    //   res.end(data)
    // })
})
// 启动服务器
server.listen(port, ()=>{
    // 服务器启动成功后会触发
    // 服务器默认启动在127.0.0.1:80
    // 也可以用 localhost:80访问
    console.log(`服务器默认启动在127.0.0.1:${port}`);

})
