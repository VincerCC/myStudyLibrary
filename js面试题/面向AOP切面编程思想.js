let fn = () => {
  console.log('fn')
}
Function.prototype.before = function (cb) {
  if(typeof cb !== 'function') throw new TypeError('cb must be function')
  return (...args) => {
    cb.call(this, ...args)
    return this.call(this, ...args)
  }
}
Function.prototype.after = function (cb) {
  if(typeof cb !== 'function') throw new TypeError('cb must be function')
  return (...args) => {
    let res = this.call(this, ...args)
    cb.call(this, ...args)
    return res
  }
}
fn.before(() => {
  console.log('before')
}).after(() => {
  // 这个after里边执行的this，就是执行的before
  console.log('after')
})()