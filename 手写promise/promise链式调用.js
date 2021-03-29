// promise的特点，解决了什么问题?
// 1.链式调用解决嵌套回调问题
const fs = require('fs')

const myPromise = require('./source/实现promise链式调用.js')
// 上一个的输出 是 下一个的输入
fs.readFile('./a.txt', 'UTF8', (err, data) => {
  if(err) return console.log(err)

  fs.readFile('./b.txt', 'UTF8', (err, data) => {
    if(err) return console.log(err)
  })
})
// promise解决上方的链式调用
function readFile(path, encoding){
  return new myPromise((resolve, reject)=>{
    fs.readFile(path, encoding, (err, data) => {
      if(err) return reject(err)
      resolve(data)
    })
  })

}
// readFile('./a.txt','utf8').then((value)=>{
//   console.log(value)
// }, (err) => {
//   console.log(err)
// })
// promise链式调用, 当调用then方法后，会返回新的promise
// 无论上一次then走的成功还是失败，只要返回的是普通值，都会执行下一次then成功回调
// 情况1：then中方法返回的是非promise值，会作为下一次then的成功结果n
// readFile('./a.txt','utf8').then((value)=>{
//   return 1
// }, (err) => {
//   console.log(err)
// }).then((val)=>{
//   console.log(val) // 1
// })
// 情况2：then中方法执行出错，会走到下一次then的失败
// readFile('./a.txt1','utf8')
// .then((value)=>{
// }, (err) => {
//   console.log(err)
// })
// .then((val)=>{
//   console.log('s', val) // 1
// }, (err) => {
//   console.log('e', err)
// })
// 情况3：then中方法返回一个promise，此时会根据promise的结果来处理走成功还是失败
readFile('./a.txt','utf8')
.then((value)=>{
  console.log(value)
  return readFile('./b.txt','utf8')
}, (err) => {
  console.log(err)
})
.then((val)=>{
  console.log('s', val) // 1
}, (err) => {
  console.log('e', err)
})

// 总结：如果返回一个普通值（除了promise）就会传递给下一个then的成功，如果返回一个失败的promise或者抛出异常，就回传递给下一个then的失败


// 2.同步并发问题