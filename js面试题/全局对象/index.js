/**
 * 全局对象
 * window浏览器：window, self, frames, this
 * node: global
 * worker: self
 * 通用: globalThis
 */
var a = 'window -> a'
var obj = {
  a: 'obj -> a',
  test: function () {
    console.log(this.a)
    console.log(globalThis.a)
    console.log(window.a)
  }
}
obj.test()
/**
 * 浏览器中
 *  obj -> a
    index.js:13 window -> a
    index.js:14 window -> a
 */