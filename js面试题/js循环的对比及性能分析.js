/**
 * JS中三类循环对比及性能分析？
 *  @ for 循环及 forEach 底层原理
 *     + for循环是自己控制循环的过程
 *        - Q1：基于var声明的时候，for和while性能差不多。【不确定循环次数使用while】
 *        - Q1：基于let声明的时候，for循环的性能更好。【原理：没有创造全局不释放的变量】
 *        - Q1：forEach性能比for、while都差
 *        - Q1：重写forEach
 *
 *  @ for in 循环的bug及解决方案
 *         - Q1：for in 性能特别特别差！！！
 *         - Q1：迭代所有可枚举属性（私有&公有【所属类上的原型上的属性】），按照原型一级一级查找很耗费性能。
 *           let obj = {
 *               name: '张三',
 *               [Symbol('a')]: 100,
 *               0: '666'
 *           }
 *           遍历结果：0, name
 *         - Q1：不能迭代Symbol属性
 *         - Q1：迭代顺序会以数字key优先，公有可枚举的（一般是自定义属性）也会被迭代
 *
 *  @ for of循环的底层机制
 *         - 数组、部分类数组、Set、Map有迭代器规范，对象没有迭代器规范
 *         - Q1：遵循 迭代器iterator规范【具备next方法，每次执行返回一个对象，具备value/done属性】
 *         - Q1：让对象具备可迭代性并且使用for of 循环
 */

let arr = new Array(999999).fill(0)
// console.log(arr)

console.time('for')
for(let i = 0; i < arr.length; i++){}
console.timeEnd('for')


console.time('while')
let num = 0
while(num < arr.length){
  num ++
}
console.timeEnd('while')

console.time('forEach')
arr.forEach((item) => {})
console.timeEnd('forEach')

console.time('for in')
for(let key in arr){}
console.timeEnd('for in')

console.time('for of')
for(let key of arr){}
console.timeEnd('for of')


// 自己手写forEach
Array.prototype.myForEach = function (cb, context){
  let self = this,
      i = 0,
      len = self.length,
      ctx = context || window
  for(; i < len; i ++){
    typeof cb === 'function' ? cb.call(ctx, self[i], i) : null
  }
}
// arr.myForEach((item)=>{})