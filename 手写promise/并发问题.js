
const fs = require('fs')
fs.readFile('./a.txt', 'UTF8', (err, data) => {
  console.log(data)
})
fs.readFile('./b.txt', 'UTF8', (err, data) => {
  console.log(data)
})
// 如果我想要拿到两个文件的结果该怎么做呢？
// 方法一（不行），使用数组
let arr = [];

fs.readFile('./a.txt', 'UTF8', (err, data) => {
  arr.push(data)
})
fs.readFile('./b.txt', 'UTF8', (err, data) => {
  arr.push(data)
})
console.log('arr', arr) // 返回为空，应该readFile是异步的，先执行了这句同步代码



// 方法二，使用高阶函数
function after(time, fn){
  let arr = [];
  // 但是这样不保证顺序，
  return (data)=>{
    arr.push(data)
    // 如果调用次数到达了规定次数，直接返回结果
    if(--time === 0){
      fn(arr)
    }
  }
}

let out = after(2, (arr) => {
  console.log(arr)
})

fs.readFile('./a.txt', 'UTF8', (err, data) => {
  out(data)
})
fs.readFile('./b.txt', 'UTF8', (err, data) => {
  out(data)
})