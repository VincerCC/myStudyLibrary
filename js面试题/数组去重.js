// 数组的去重
let arr = [12, 13, '12', 23, 15, 25, 23, 25, 14, 16];

// 方法1，使用es6的set方法
function f1(){
  let arr1 = new Set(arr)
  console.log(arr1) //Set { 12, 13, 23, 15, 25, 14, 16 }
  console.log([...arr1]) //[ 12, 13, 23, 15, 25, 14, 16 ]
  console.log(Array.from(arr1)) //[ 12, 13, 23, 15, 25, 14, 16 ]
}
// f1()

// 方法2，循环比较，拿出当前项和后面的内容进行比较 （性能差，因为每次都改变索引了）
function f2(){
  for(let i=0; i<arr.length-1; i++){
    let item = arr[i] //拿到当前项
    let args = arr.slice(i+1) //拿到当前项后边所有数据
    if(args.indexOf(item) >-1){
      // 如果当前项在后边也有出现，当前项就是重复的，把当前项干掉
      arr.splice(i, 1)
      // 原数组已经改变，如果i继续++，会产生数组塌陷，需要i--
      i--
    }
  }
  console.log(arr)
}
// f2()

// 方法3，循环比较，若当前项不存在新数组中，往数组追加当前项
function f3(){
  let newArr = []
  for(let i=0; i<arr.length; i++){
    let item = arr[i] //拿到当前项
    if(newArr.indexOf(item) === -1){
      // 如果当前项不存在新数组中，往数组追加当前项
      newArr.push(item)
    }
  }
  console.log(newArr)
}
// f3()

// 方法4，对象键值对，利用对象键名不能重复的特性
function f4(){
  let obj = {}
  arr.forEach(item => {
    obj[item] = item
  })
  console.log(Object.keys(obj))
}
// f4()

// 方法5，es6容器Map
function f5(){
  let arrMap = new Map()
  let newArr = arr.filter(item => {
    let i = JSON.parse(item)
    return !arrMap.has(i) && arrMap.set(i)
    // if(!arrMap.has(item)){
    //   arrMap.set(item)
    //   return true
    // } else {
    //   return false
    // }
  })
  console.log(newArr)
}
// f5()

var a = 123
const foo = () => {
  console.log(this)
  return (a) => {
    console.log(this.a)
  }
}
const obj1 = {
  a: 2
}
const obj2 = {
  a: 3
}

var bar = foo.call(obj1)
console.log(bar.call(obj2))
