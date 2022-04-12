// promise是一个类，无需考虑兼容性
// 当使用promise的时候，会传入一个执行器，此执行器，是立即执行
// promise有三个状态，成功态、等待态、失败态
// 默认为等待态，如果调用resolve会走到成功态，如果调用reject会走到失败态
// 每个promise实例都有then方法
// promise状态一旦改变后不能更改
// promise是基于回调的


const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
// 利用x的值来判断是调用promise的resolve还是reject
function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    // 不能返回promise本身，会导致链式调用
    return reject(new TypeError('错误'))
  }
  if ((typeof x === 'object' && typeof x !== null) || typeof x === 'function') {
    // 有可能是promise
    try {
      let then = x.then
      if (typeof then === 'function') {
        // 我就认为你是promise
        then.call(x, y => {
          resolve(y)
        }, r => {
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (error) {
      console.log(error)
      reject(error)
    }
  } else {
    resolve(x)
  }
}
class myPromise {
  constructor(executor) {
    this.state = PENDING;//默认状态
    this.value = undefined; // 成功的参数
    this.reason = undefined;// 失败的参数
    this.onResolvedCallbacks = [];// 成功的回调方法
    this.onRejectedCallbacks = [];// 失败的回调方法
    // 修改状态
    const resolve = (value) => {
      // 必须是等待态才能改变状态
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    const reject = (reason) => {
      // 必须是等待态才能改变状态
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      console.log(e)
      reject(e)
    }
  }
  then(onFulfilled, onRejected) { //两个函数参数,onFulfilled, onRejected


    // 实现链式调用
    let p2 = new myPromise((resolve, reject) => {
      setTimeout(() => {

      if (this.state === 'FULFILLED') {
        // setTimeout(() => { //为了能够拿到实例化后的p2
          try {
            console.log(FULFILLED)
            let s = onFulfilled(this.value)
            //可能是个promise，如果是promise，需要看一下promise是 成功 还是 失败
            resolvePromise(p2, s, resolve, reject)
          } catch (error) {
            reject(error)
          }
        // }, 0);
      }
      if (this.state === 'REJECTED') {

        // setTimeout(() => { //为了能够拿到实例化后的p2
          try {
            console.log(REJECTED)
            let r = onRejected(this.reason)
            resolvePromise(p2, r, resolve, reject)
          } catch (error) {
            reject(error)
          }
        // }, 0)
      }

      if (this.state === 'PENDING') {
        // 代码是异步调用resolve或者reject
        this.onResolvedCallbacks.push(() => {
          // todo...
          // setTimeout(() => { //为了能够拿到实例化后的p2

            try {

              let s = onFulfilled(this.value)
              resolvePromise(p2, s, resolve, reject)
            } catch (error)   {
              reject(error)
            }
          // }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          // todo...
          // setTimeout(() => { //为了能够拿到实例化后的p2

            try {

              let r = onRejected(this.reason)
              resolvePromise(p2, r, resolve, reject)
            } catch (error) {
              reject(error)
            }
          // }, 0)

        })
      }

      }, 0)
    })
    return p2
  }
}
module.exports = myPromise