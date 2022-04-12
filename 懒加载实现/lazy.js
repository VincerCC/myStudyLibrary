
/**
 *
 * 为了避免页面一次性向服务器发送大量请求而造成页面阻塞，我们需要控制请求数量，按照我们需要的量去加载图片。
 *
    懒加载的优点
    提高前端性能，按需加载图片减轻服务器负担，提高页面加载速度。

    懒加载的原理
    图片的加载是依赖于src路径，我们可以设置一个暂存器，把图片路劲放到暂存器中，当我们需要这个图片加载显示时，再把路径赋值给src，这样就能实现按需加载，也就是懒加载。我们通常使用html5中的data-属性作为暂存器，例如src的值默认是正在加载中的GIF，而真正的图片路径是保存在data-中。

    懒加载的实现
    对于用户来说，看得到的地方才需要加载，看不到的地方加载了也是白白浪费资源。所以我们知道，在可视区域中，我们才需要加载图片.

    如何判断图片是否在可是区域？
    我们可以利用元素的偏移高度，对比设备宽度加上滚动条高度来判断该元素是否处于可视区域中。
    当 元素的offsetTop 大于 视口的高度（clientHeight） + 滚动条高度（scrollTop）时，图片就在可视区域之外
    即 img.offsetTop <= document.documentElement.clientHeight + document.documentElement.scrollTop; //  =>  true 视口内，显示图片 、 false 视口外，不显示图片

 */
!(
  function(window) {
    lazy()
    document.addEventListener('scroll', scroll)
  }
)(window)
function scroll() {
  lazy()
}
function lazy() {
  // 获取视口的高度
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
  // 获取滚动条高度
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  // 获取图片
  const imgs = document.querySelectorAll('.list_img')
  Array.prototype.slice.call(imgs).forEach((imgItem) => {
    checkImgInView(clientHeight, scrollTop, imgItem)
  })
}

function checkImgInView(clientHeight, scrollTop, el) {
  // 检查图片是否在视口中
  const imgUrl = el.getAttribute('data-src')
  const imgTop = el.offsetTop
  if(imgTop <= clientHeight + scrollTop) {
    // 在视口内
    // 将 src 替换为 data-src 的地址
    el.setAttribute('src', imgUrl)
  }
}