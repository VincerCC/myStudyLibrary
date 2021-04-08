// 函数柯里化  多个参数的（已知个数）传入 把他转化成N个函数   可以暂存变量
// 一般柯里化参数要求 都是一个个传递
// 判断变量类型
function isType(type, val) {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}
console.log(isType('String', 'a'))

console.log('-----------使用柯里化实现 判断变量类型----------')
// 使用柯里化实现 判断变量类型
function isString(type) {
  return function (val) {
    return Object.prototype.toString.call(val) === `[object ${type}]`
  }
}
let myIsString = isString('String')
console.log(myIsString('a'))

// 实现通用的柯里化函数：高阶函数
function curring(fn){
  // fn.length fn的参数个数
  //  curring(isType) -> isType(type, val) 参数个数为2
  //  curring(sum) ->  sum(a,b,c,d) 参数个数为2
  let args = [] // 用于保存传入的参数
  const inner = (args) => {
    if(args.length >= fn.length) {
      //如果保存的参数个数大于等于用户传入的个数，立即执行函数sum
      return fn(...args)
    } else {
      // 否则，拼接当前的args和用户继续传入的参数，继续调用inner
      return (...userArgs) => {
        return inner([...args, ...userArgs])
      }
    }
  }

  return inner(args)
}

console.log('----------用通用柯里化函数实现封装校验类型的库-----------')

let myIsString2 = curring(isType)('String')
console.log(myIsString2(''))

// 用通用柯里化函数实现封装校验类型的库
let util = {};
['Number', 'String', 'Boolean', 'Null', 'Undefined'].forEach((type) => {
  util['is'+type] = curring(isType)(type)
})
console.log(util)
console.log(util.isString('123'))
console.log(util.isNumber(123))
console.log(util.isBoolean(true))
console.log(util.isUndefined('1'))

console.log('----------用通用柯里化函数实现累加-----------')
// 用通用柯里化函数实现累加
function sum(a,b,c,d){
  //我要记录每次调用传入的参数，并且和函数参数个数比较，如果不满足总个数，就返回新函数，如果传入的个数和参数一致，执行原来的函数
  return a+b+c+d
}
let sum1 = curring(sum)
let sum2 = sum1(1)
let sum3 = sum2(2,3)
let result = sum3(4)
console.log(result)