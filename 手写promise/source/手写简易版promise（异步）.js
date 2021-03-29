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
      if(this.state === PENDING){
        this.state = FULFILLED;
        this.value = value;
        console.log(this.onResolvedCallbacks)
        this.onResolvedCallbacks.forEach(fn=>fn())
      }
    }
    const reject = (reason) => {
      // 必须是等待态才能改变状态
      if(this.state === PENDING){
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn=>fn())
      }
    }
    try{
      executor(resolve, reject)
    } catch(e){
      console.log(e)
      reject(e)
    }
  }
  then(onFulfilled, onRejected){ //两个函数参数,onFulfilled, onRejected
    if(this.state === 'PENDING') {
      // 代码是异步调用resolve或者reject
      this.onResolvedCallbacks.push(()=>{
        // todo...
        onFulfilled(this.value)
      })
      this.onRejectedCallbacks.push(()=>{
        // todo...
        onRejected(this.reason)
      })
    }
    if(this.state === 'FULFILLED') {
      console.log(FULFILLED)
      onFulfilled(this.value)
    }
    if(this.state === 'REJECTED') {

      console.log(REJECTED)
      onRejected(this.reason)
    }
  }
}
module.exports = myPromise