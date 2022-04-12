(function() {
  window.addEventListener('resize', resize)
  waterFall()
})(window)
function resize() {
  var imgs = document.querySelectorAll('.list_img')
  Array.prototype.slice.call(imgs).forEach((item) => {
    item.style = ''
  })
  waterFall()
}
function waterFall() {
  var imgs = document.querySelectorAll('.list_img')
  // 获取其中一张图片的宽度
  const imgWidth = imgs[0].clientWidth
  // 获取当前视口宽度
  const screenWidth = document.body.clientWidth
  // 求出列数
  const imgColumn = Math.floor(screenWidth/imgWidth)
  // 创建数组，用于存放图片的高度
  const heightArr = new Array(imgColumn)
  Array.prototype.slice.call(imgs).forEach((imgItem, index) => {
    // 获取当前图片的高度
    const imgHeight = imgItem.clientHeight
    // 第一排的图片不需要加定位，只需要取图片高度值进去数组
    // 图片下标小于列数，就是第一列
    if(index < imgColumn) {
      heightArr[index] = imgHeight
    } else {
      // 不是第一列，需要添加定位
      // 获取图片最小的高度
      const minHeight = Math.min(...heightArr)
      // 获取最小高度对应的列数
      const minColumn = heightArr.indexOf(minHeight)
      // 将图片优先放到最小高度的那一列中
      // top 为上一行的最小高度
      // left 为我当前这张图所在的列数 * 图片的宽度
      imgItem.style = `
        position: absolute;
        top: ${minHeight}px;
        left: ${minColumn*imgWidth}px;
      `
      // 更新高度数组
      heightArr[minColumn] += imgHeight
    }
  })
}