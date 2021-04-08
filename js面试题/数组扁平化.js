let arr = [
  [1, 2],
  [3, [4, 5, [6, [7, 8, [9]]]]]
]
// 方法一，es6方法
console.log(arr.flat(Infinity))

// 方法二，利用 toString()
let newArr1 = arr.toString().split(',').map(item => {
  return Number(item)
})
console.log(newArr1)
// 方法三，利用 toString()
let newArr2 = JSON.stringify(arr).replace(/(\[|\])/g, '').split(',').map(item => {
  return Number(item)
})
console.log(newArr2)

// 方法四，循环验证是否为数组
// while(arr.some(item => Array.isArray(item))) {
//   arr = [].concat(...arr)
// }
// console.log(arr)

// 方法四，递归
function flatArr(arr){
  let result = []

  let fn = (arr) => {
    for(let i=0; i<arr.length; i++){
      let item = arr[i]
      let type = Object.prototype.toString.call(item).slice(8, -1)
      if(type === 'Array'){
        // console.log(item)
        fn(item)
        continue
      } else {

        result.push(item)
      }
    }
  }
  fn(arr)

  return result
}
console.log(flatArr(arr))