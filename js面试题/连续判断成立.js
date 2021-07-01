// /**
//  * 题目：
//  *  使 a == 1 && a == 2 && a == 3成立
//  */

// // 方法一，利用 对象隐式类型 转换 调用 toString 实现
// /**
//  * 如果原始类型和对象比较，对象会转为原始类型的值在进行比较
//  * 对象转换为原始类型的值，先调用对象的 valueOf 方法，如果valueOf返回的还是对象，再接着调用 toString 方法
//  */
// var a1 = {
//   value: 0,
//   valueOf: function(){
//     return ++this.value
//   },
//   // valueOf 和 toString都可
//   // toString: function(){
//   //   return ++this.value
//   // }
// }

// if( a1 == 1 && a1 == 2 && a1 == 3){
//   console.log('a1 Win！')
// }

// console.log('++++++++++++++++++++++++++++')



// // 方法二，利用数组的隐式转换
// /**
//  * array也是对象  [1,2,3].toString() => [1,2,3].join(',')  => 1,2,3
//  * 对于数组对象，toString 方法返回一个字符串，该字符串由数组中的每个元素的 toString() 方法返回值，再经过调用 join() 方法连接（由逗号隔开）组成。
//  * 数组 toString 方法会调用本身的 join() 方法，这里把自己的 join() 方法改写为 shift() 方法，每次返回第一个元素，而且每次数组删除第一个值，正好可以使判断成立。
//  */
// var a2 = [1,2,3];
// a2.join = a2.shift;
// if( a2 == 1 && a2 == 2 && a2 == 3){
//   console.log('a2 Win！')
// }

// console.log('++++++++++++++++++++++++++++')

// // 方法三，利用监听，在getter中自加，能实现全等也成立

// let bValue = 0
// Object.defineProperty(window, 'b', {
//   get(){
//     return ++bValue
//   }
// })


// if( b === 1 && b === 2 && b === 3){
//   console.log('b Win！')
// }

// console.log('++++++++++++++++++++++++++++')

// var cValue = 0
// let c = new Proxy(window,{
//   get(){
//     return ++cValue
//   }
// })
// if( c.cValue == 1 && c.cValue == 2 && c.cValue == 3){
//   console.log('c Win！')
// }
"use strict"
var a = 0;
console.log(a)
if (true) {
    console.log(a)
    a = 1;
    console.log(a)
    function a() {};
    console.log(a)
    a = 21;
    console.log(a)

};
console.log(a)
