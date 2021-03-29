/**
 * 数据类型检测：
 *  typeof
 *    - 直接在计算机底层基于数据类型的值（二进制）进行检测
 *    - typeof 1 | typeof NaN                                     <-------->  'number'
 *    - typeof 'a'                                                <-------->  'string'
 *    - typeof undefined                                          <-------->  'undefined'
 *    - typeof {} | typeof [] | typeof /^$/ | typeof new Date()   <-------->  'object'
 *    - typeof function(){}                                       <-------->  'function'
 *    - typeof null                                               <-------->  'object'
 *      - 因为object存储在计算机中都是以000开头的二进制存储，而刚好null就是000，所以会检测出来object
 *
 *  instanceof
 *    - 检测当前实例是否属于某个类的, 底层机制：只要当前类出现在当前实例的原型链上，结果都是true
 *    - 由于我们可以修改原型的指向，所以检测的结果是不准确的
 *    - 不能检测基本类型 number、string、boolean
 *
 *  constructor
 *    - 支持基本类型
 *    - 但是可以修改constructor，所以也不准确
 *
 *  Object.prototype.toString.call(value)
 *    - 标准检测数据类型的方法：Object.prototype.toString不是转换为字符串，是返回当前实例所属类的信息。
 *    - 标准检测结果："[object Object]"
*/

function myTypeof(){
  console.log('***********typeof************')
  console.log(typeof 1)            // number
  console.log(typeof NaN)          // number
  console.log(typeof 'a')          // string
  console.log(typeof undefined)    // undefined
  console.log(typeof {})           // object
  console.log(typeof [])           // object
  console.log(typeof /^$/)         // object
  console.log(typeof new Date())   // object
  console.log(typeof function(){}) // function
  console.log(typeof null)         // object
}
myTypeof()

function myInstanceof(){

  console.log('***********instanceof************')

  let arr = []
  console.log(arr) //打开控制台，发现，arr的原型链是先看到 Array,再往下找能找到Object，
  console.log(arr instanceof Array)     // Array出现在了当前实例arr的原型链上，返回true
  console.log(arr instanceof RegExp)    // RegExp没有出现在当前实例arr的原型链上，返回false
  console.log(arr instanceof Object)    // Object出现在了当前实例arr的原型链上，返回true
  function fn(){
    x = 100
  }
  fn.prototype = Array.prototype // 修改了fn的原型指向Array的原型
  let f = new fn
  console.log(f, f instanceof Array)  // true，导致instanceof判断为 Array，实际上他没有索引没有length，并不是Array,而是Object

  console.log(1 instanceof Number)  // false
  console.log('a' instanceof String)  // false
  console.log(true instanceof Boolean)  // false
}
myInstanceof()

// 手写instanceof
function white_instance_of(){
  function instance_of(example, classFn){
    // 一直找到Object的原型为null，代表找到最后一层了，Object.prototype.__proto__ = null
    let classFnPrototype = classFn.prototype;
    let proto = Object.getPrototypeOf(example) // <===>等价于 example.__proto__ (ie不支持)
    while(true){
      if(proto === classFnPrototype){
        return true
      }
      if(proto === null) return false //Object.prototype.__proto__ === null
      proto = Object.getPrototypeOf(proto);
    }
  }

  console.log('========手写instanceof========')
  console.log(instance_of([], Array));
  console.log(instance_of([], RegExp));
  console.log(instance_of([], Object));
  function fn(){
    x = 100
  }
  fn.prototype = Array.prototype // 修改了fn的原型指向Array的原型
  let f = new fn
  console.log(instance_of(f, Array))  // true，导致instance_of(断为 Array，实际上他没有索引没有length，并不是Array,而是Object

  console.log(instance_of(1, Number))  // true
  console.log(instance_of('a', String))  // true
  console.log(instance_of(true, Boolean))  // true
}
white_instance_of()

function myConstructor(){
  console.log('***********myConstructor************')
  let arr = [];
  console.log(arr.constructor === Array);   // true
  console.log(arr.constructor === RegExp);  // false
  console.log(arr.constructor === Object);  // false
  let n = 1;
  console.log(n.constructor === Number);   // true
  Number.prototype.constructor = 'aaa'; //修改了 constructor
  console.log(n.constructor === Number);   // false
}
myConstructor()


// 封装万能方法 JQ源码
function getType(){

  console.log('***********封装万能方法************')
  // 设定数据类型的映射表
  let str = "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ")
  let typeObj = {}
  str.forEach((item) => {
    typeObj[`[object ${item}]`] = item.toLowerCase()
  })
  function typeCheckFn(target){
    if(target == null){
      // 如果是null或者undefined，返回'null'或'undefined'
      return target + ''
    }
    let typeofTarget = typeof target
    if(typeofTarget === 'object' || typeofTarget === 'function'){
      // 如果是对象类型，使用Object.prototype.toString判断类型,找不到默认返回object
      return typeObj[Object.prototype.toString.call(target)] || "object"
    } else {
      // 基本数据类型，直接返回类型
      return typeofTarget
    }
  }
  console.log(typeCheckFn(1))
  console.log(typeCheckFn('a'))
  console.log(typeCheckFn(true))
  console.log(typeCheckFn([]))
  console.log(typeCheckFn({}))
  console.log(typeCheckFn(new Date()))
  console.log(typeCheckFn(/^$/g))
  console.log(typeCheckFn(null))
  console.log(typeCheckFn(undefined))
}
getType()