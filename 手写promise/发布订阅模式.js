let events = {
  arr: [],
  on(fn){
    this.arr.push(fn)
  },
  emit(data){
    this.arr.forEach(e=>e(data))
  }
}

const fs = require('fs')
let arr = []
events.on(()=>{
  console.log('触发一次 调用一次')
})
events.on((data)=>{
  arr.push(data)
})
events.on((data)=>{
  if(arr.length === 2){
    console.log('读取完毕')
    console.log(arr)
  }
})
fs.readFile('./a.txt', 'UTF8', (err, data) => {
  events.emit(data)
})
fs.readFile('./b.txt', 'UTF8', (err, data) => {
  events.emit(data)
})