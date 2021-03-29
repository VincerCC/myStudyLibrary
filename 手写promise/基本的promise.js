// promise是一个类，无需考虑兼容性
// 当使用promise的时候，会传入一个执行器，此执行器，是立即执行
// promise有三个状态，成功态、等待态、失败态
// 默认为等待态，如果调用resolve会走到成功态，如果调用reject会走到失败态
// 每个promise实例都有then方法
// promise状态一旦改变后不能更改
// promise是基于回调的

const myPromise = require('./source/手写简易版promise（不能异步）.js')
let p = new myPromise((resolve, reject) => {
  if(Date.now()%2===0){
    resolve('成功')
  } else {
    reject('失败')
  }
})
p.then((res)=>{
  console.log(res)
},(err)=>{
  console.log(err)
})