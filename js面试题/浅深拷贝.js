// 数组浅拷贝
let arr = [1, 2, 3, [4, 5]]
// let newArr = [...arr];
// let newArr = arr.concat();
let newArr = arr.slice();
arr[0] = 9
// (浅拷贝只拷贝了数组的第一层级)
console.log(arr[3] === newArr[3]) // true
console.log(arr === newArr) // falsee
console.log(newArr, '---数组浅克隆---', arr)

/**
 * 0x000001
 * arr[
 *  0: 1
 *  1: 2
 *  2: 3
 *  3: 0x123456    ------------->  0x123456[0: 4,1: 5]
 * ]                                    |
 *  |                                   |
 *  |浅拷贝                              |指向同一个地址
 *  v                                   |
 * 0x000001                             |
 * newArr[                              |
 *  0: 1                                |
 *  1: 2                                |
 *  2: 3                                v
 *  3: 0x123456    ------------->  0x123456[0: 4,1: 5]
 * ]
 *
 */


// 对象浅拷贝
let obj = {
  a:1,
  b:{
    c:2
  }
}
// 对象浅拷贝1
// let newObj = {...obj}

// 对象浅拷贝2
// let newObj = Object.assign({}, obj)

// 对象浅拷贝3
let newObj = {}
// for(let key in obj){
//   newObj[key] = obj[key] //但是这样拿不到symbol属性。因为他是不可枚举的
// }

// 对象浅拷贝4
// 可以通过Object.keys + Object.getOwnPrototypeSymbols 获取到所有key
let keys = [
  ...Object.keys(obj),
  ...Object.getOwnPropertySymbols(obj)
]
keys.forEach((key)=>{
  newObj[key] = obj[key]
})

obj.a = 9
// (浅拷贝只拷贝了对象的第一层级)
console.log(obj === newObj) // false
console.log(obj.b === newObj.b) // true
console.log(newObj, '---对象浅克隆---', obj)

/**
 * 0x000001
 * obj[
 *  a: 1
 *  b: {
 *    c: 0x123456                  ------------->  0x123456[c: 2]
 *  }                                   |
 * ]                                    |
 *  |                                   |
 *  |浅拷贝                              |指向同一个地址
 *  v                                   |
 * 0x000001                             |
 * newObj[                              |
 *  a: 1                                |
 *  b: {                                v
 *    c: 0x123456   ------------->  0x123456[c: 2]
 *  }
 * ]
 *
 */



// 浅克隆工具方法
function shallowClone(origin){
  let type = Object.prototype.toString.call(origin).slice(8, -1).toLowerCase()
  let constructor = origin.constructor
  // 普通对象/数组
  if(/^(object|array)$/i.test(type)){
    return type === 'object' ? {...origin} : [...origin]
  }
  // symbol或者bigint
  if(/^(symbol|bigint)$/i.test(type)){
    return Object(origin)
  }
  // 对于时间/正则的处理
  if(/^(date|regexp)$/i.test(type)){
    return new constructor(origin)
  }
  // 对于报错信息
  if(/^(error)$/i.test(type)){
    return new constructor(origin.message)
  }
  // 对于函数
  if(/^(function)$/i.test(type)){
    // 返回新函数：新函数执行，就是执行原始函数
    return function(){
      return origin.call(this, ...arguments)
    }
  }
  return origin
}
let shallowCloneTest = [1,[2,3],4]
let newShallowCloneTest = shallowClone(shallowCloneTest)
console.log(newShallowCloneTest === shallowCloneTest) //false
console.log(newShallowCloneTest[1] === shallowCloneTest[1])//false
console.log(newShallowCloneTest, '---浅克隆---', shallowCloneTest)


// 深克隆（只要有下一级，就往下克隆，这样就能拷贝所有层级）
function deepClone(origin, cache = new Set()){
  let type = Object.prototype.toString.call(origin).slice(8, -1).toLowerCase()
  let constructor = origin.constructor

  // 普通对象/数组
  if(/^(object|array)$/i.test(type)){
    cache.add(origin)
    if(cache.has(origin)) return origin // cache用于存放已经克隆过得数据，以后不再克隆
    // 否则当出现一个对象属性的值又是这个对象的情况，会出现栈内存过大
    // 递归
    let result = new constructor
    let keys = [
      ...Object.keys(origin),
      ...Object.getOwnPropertySymbols(origin)
    ]
    keys.forEach((key)=>{
      result[key] = deepClone(origin[key], cache)
    })
    return result
  }

  return shallowClone(origin) //不是数组或对象，直接浅克隆即可
}
// let deepCloneTest = [1,[2,3],4]
let deepCloneTest = {
  a:1,
  b:{
    c:2
  }
}

deepCloneTest.d = deepCloneTest
let newDeepCloneTest = deepClone(deepCloneTest)
console.log(newDeepCloneTest === deepCloneTest) //false
console.log(newDeepCloneTest[1] === deepCloneTest[1])//false
console.log(newDeepCloneTest, '---深克隆---', deepCloneTest)