(function(){
  /**
   * 1.URL解析
   *      - 地址解析：http://   user:pass@    www.zhufengpeixun.cn    :80/      index.html?       lx=1&from=wx           #video
   *                 <协议>    <登录信息认证>  <域名：服务器地址>     <端口号>   <请求资源的路径> <查询字符串：问号参数>  <片段标识符：hash值>
   *                                                              + http协议，默认是80端口
   *                                                              + https协议，默认是443端口
   *                                                              + ftp协议，默认是21端口
   *      - 编码 如果有个url是这样的 http://www.zhufengpeixun.cn/api/?lx=1&name=培训&from=http://www.baidu.com
   *                              - 有两个http: ，可能会导致解析出错
   *                              - 此时需要进行编码
   *                                + 1. encodeURI()编码 / decodeURI()解码 , 对整个url进行编解码，处理空格/中文
   *                                + 2. encodeURIComponent()编码 / decodeURIComponent()解码 , 主要对传递的参数信息进行编码
   */
  /**
   * 2.缓存检查 （性能优化中重点）
   *
   *      - 强缓存
   *        + 浏览器对于强缓存的处理，根据第一次请求资源时返回的响应头（response header）来确定
   *          @ Expires 缓存过期时间，用来指定资源到期的时间（HTTP/1.0）
   *          @ Cache-Control: cache-control: max-age=2592000 指第一次拿到资源后的2592000秒内（30天），再次发送请求，读取缓存中信息 （HTTP/1.1）
   *          @ 两者同时存在，Cache-Control优先级高于Expires
   *          @ 一般html文件不做缓存，css文件一般做缓存
   *           Q:但是强缓存会有问题，当服务器资源更新了，还读缓存内容就会导致拿不到最新信息
   *           A: 解决方案1：服务器更新资源后，让资源名和之前的不一样，这样页面就会导入全新的资源
   *                        index.dasd323.js -> index.wqwea987.js  =>  webpack的hash name
   *              解决方案2：当文件更新后，我们在html导入的时候，可以设置一个后缀名（时间戳）
   *                        <script src="index.js?74687454645">
   *              解决方案3：采用协商缓存
   *
   *      - 协商缓存
   *          + 当强缓存失效后，浏览器携带缓存标识向服务器发送请求，有服务器根据缓存标识决定是否使用缓存
   *            @ 由客户端发送给服务器的HTTP请求头标签,携带获取的缓存标识发送http请求：If-Modified-Since(从何时更改) / If-None-Match(假如不匹配)
   *            @ 服务器根据资源文件是否更新：
   *                没更新->返回304，通知客户的读取缓存信息
   *                有更新->返回200，返回最新的资源信息，以及Last-Modified（HTTP/1.0，资源文件的最后更新时间）  / ETag （HTTP/1.1，每次资源文件更新都会重新生成一个ETag）, 由服务器发送给客户端的HTTP请求头标签
   *
   *      缓存检查的步骤
   *      + 先检查强缓存
   *        @ 有，且未失效，走强缓存
   *        @ 没有，或者失效
   *          + 再去检测协商缓存
   *            @ 有，且未失效，走协商缓存
   *            @ 没有，或者失效，获取最新数据
   *      - 缓存位置
   *        + 内存缓存 memory cache（关闭浏览器即清空）
   *        + 硬盘缓存 disk cache（关闭浏览器后仍然能读到缓存）
   *          @ 打开浏览器, 先检查disk cache中是否有匹配，如果有则使用，没有则发送网络请求
   *          @ 普通刷新（F5），因为tab未被关闭，会优先使用memory cache，其次才是disk cache
   *          @ 强制刷新（ctrl F5），此时强制浏览器不使用缓存，发送的请求头带有Cache-control: no-cache，服务端直接返回最新内容
   *
   */
  /**
   * 3.DNS解析
   *      - 将 域名地址 解析出 外网ip地址，通过ip地址去对应的服务器获取资源
   *      - 每一次DNS解析耗时20-120ms，所以这里能做性能优化
   *        + 减少DNS请求，一个页面中尽可能少用不用的域名，资源尽可能都放在同一个服务器（正式项目一般不这样做）正式项目一般会将不同资源放在不同服务器上边，优点（高可用，高并发）
   *        + DNS预获取，在页面加载之前，使用<link rel="dns-prefetch" href="//xxxxxxxx">，在渲染页面之前已经通过link预获取了dns,看京东官网 https://www.jd.com/
   */
  /**
   * SYN： 简写为S，同步标志位，用于建立会话连接，同步序列号；
   * ACK： 简写为.，确认标志位，对已接收的数据包进行确认；
   * FIN： 简写为F，完成标志位，表示我已经没有数据要发送了，即将关闭连接；
   * PSH： 简写为P，推送标志位，表示该数据包被对方接收后应立即交给上层应用，而不在缓冲区排队；
   * RST： 简写为R，重置标志位，用于连接复位、拒绝错误和非法的数据包；
   * URG： 简写为U，紧急标志位，表示数据包的紧急指针域有效，用来保证连接不被阻断，并督促中间设备尽快处理；
   *
   * 4.TCP三次握手（为了建立TCP通道）
   *      -第一次握手
   *        客户主动（active open）去connect服务器，并且发送SYN 假设序列号为J,服务器是被动打开(passive open)
   *
   *      -第二次握手
   *        服务器在收到SYN后，它会发送一个SYN以及一个ACK（应答）给客户，ACK的序列号是 J+1表示是给SYN J的应答，新发送的SYN K 序列号是K
   *
   *      -第三次握手
   *        客户在收到新SYN K, ACK J+1 后，也回应ACK K+1 以表示收到了，然后两边就可以开始数据发送数据了
   *
   *      三次握手：
   *      “喂，你听得到吗？”
   *      “我听得到呀，你听得到我吗？”
   *      “我能听到你，今天 balabala……”
   *
   *      Connection:keep-alive 可以保证TCP通道建立后可以不关闭
   */
  /**
   * 5.数据传输
   *      - HTTP报文
   *        ·请求报文
   *        ·响应报文
   *      - 响应状态码
   *        ·200  ok
   *        ·202  Accepted 服务器已接收请求，但尚未处理（异步）
   *        ·204  No Content 服务器成功处理了请求，但是不需要返回任何实体数据
   *        ·206  Partial Content 服务器成功处理了部分get请求
   *        ·400  Bad Request 请求参数有误
   *        ·401  Unauthorized 权限
   *        ·404  No Found
   *        …………
   */
  /**
   * 6.TCP四次挥手
   *
   * 第一次挥手：
   *      Client端发起挥手请求，向Server端发送标志位是FIN报文段，设置序列号seq，此时，Client端进入FIN_WAIT_1状态，这表示Client端没有数据要发送给Server端了。
   * 第二次挥手：
   *      Server端收到了Client端发送的FIN报文段，向Client端返回一个标志位是ACK的报文段，ack设为seq加1，Client端进入FIN_WAIT_2状态，Server端告诉Client端，我确认并同意你的关闭请求。
   * 第三次挥手：
   *      Server端向Client端发送标志位是FIN的报文段，请求关闭连接，同时Client端进入LAST_ACK状态。
   * 第四次挥手：
   *      Client端收到Server端发送的FIN报文段，向Server端发送标志位是ACK的报文段，然后Client端进入TIME_WAIT状态。Server端收到Client端的ACK报文段以后，就关闭连接。此时，Client端等待2MSL的时间后依然没有收到回复，则证明Server端已正常关闭，那好，Client端也可以关闭连接了。
   */
  /**
   * 7.渲染页面
   */
  let url1 = 'http://www.zhufengpeixun.cn/api/?lx=1&name=培训&from=http://www.baidu.com'
  let encodeUrl = encodeURI(url1)
  let decodeUrl = decodeURI(encodeUrl)
  console.log(encodeUrl) // http://www.zhufengpeixun.cn/api/?lx=1&name=%E5%9F%B9%E8%AE%AD&from=http://www.baidu.com
  console.log(decodeUrl) // http://www.zhufengpeixun.cn/api/?lx=1&name=培训&from=http://www.baidu.com
  let url2 = `http://www.zhufengpeixun.cn/api/?lx=1&name=${encodeURIComponent('培训')}&from=${encodeURIComponent('http://www.baidu.com')}`
  console.log(url2) // http://www.zhufengpeixun.cn/api/?lx=1&name=%E5%9F%B9%E8%AE%AD&from=http%3A%2F%2Fwww.baidu.com
})()