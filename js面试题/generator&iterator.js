var arr = [1,2,3,4]

function * generator (arr) {
  for (const v of arr) {
    yield v //执行会暂停在这里，需要手动调用next()
  }
}
const iterator = generator(arr)
console.log(iterator)
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: 4, done: false}
console.log(iterator.next()) // {value: undefined, done: true} 代表循环遍历结束了



// 手写 generator
function myGenerator(arr) {
  // 返回一个iterator
  let index = 0;
  let item = null;
  let iterator = {
    next(){
      if(index < arr.length) {
        item = {
          value: arr[index],
          done: false
        }
        index++
      } else {
        item = {
          value:undefined,
          done: true
        }
      }
      return item
    }
  }
  return iterator
}
const myIterator = myGenerator(arr)
console.log(myIterator)
console.log(myIterator.next()) // {value: 1, done: false}
console.log(myIterator.next()) // {value: 2, done: false}
console.log(myIterator.next()) // {value: 3, done: false}
console.log(myIterator.next()) // {value: 4, done: false}
console.log(myIterator.next()) // {value: undefined, done: true} 代表循环遍历结束了



// for of 不能遍历对象Object，因为他没有Symbol.iterator迭代器，需要手动加上Symbol.iterator迭代器
const o = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
}
// for (const v of o) {
//   console.log(v)// o is not iterable
// }
function newIterator() {
  // 返回一个iterator
  let index = 0;
  let item = null;
  let _this = this // 遍历谁 this就是谁
  let iterator = {
    next(){
      if(index < _this.length) {
        item = {
          value: _this[index],
          done: false
        }
        index++
      } else {
        item = {
          value:undefined,
          done: true
        }
      }
      return item
    }
  }
  return iterator
}
Object.prototype[Symbol.iterator] = newIterator

for (const v of o) {
  console.log(v)// 可以正常遍历对象了
}