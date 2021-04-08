// 斐波那契数列
// 1,1,2,3,5,8,13,21,34.......
// 前两项都是1，后一项等于前两项的和
// fibonacci(0) -> 1
// fibonacci(1) -> 1
// fibonacci(2) -> 2
// fibonacci(3) -> 3
// fibonacci(4) -> 5
// fibonacci(5) -> 8
// fibonacci(6) -> 13
// fibonacci(7) -> 21
// 传入下标，能拿到对应下标的值

function fibonacci(index){
  if(index <= 1) return 1
  let arr = [1, 1]
  // 要创建多少个
  let num = index+1 - arr.length
  while(num > 0){
    let a = arr[arr.length - 2]
    let b = arr[arr.length - 1]
    arr.push(a+b)
    num--
  }
  return arr[arr.length - 1]
}

function fibonacci_middle(index){
  if(index - 2 >= 0 ){
    return fibonacci_middle(index - 2) + fibonacci_middle(index - 1)
  } else {
    return 1
  }
}
// fibonacci_middle(5)
// return fibonacci_middle(3) + fibonacci_middle(4)
// return fibonacci_middle(1) + fibonacci_middle(2) + fibonacci_middle(2) + fibonacci_middle(3)
// return 1 + fibonacci_middle(0) + fibonacci_middle(1) + fibonacci_middle(0) + fibonacci_middle(1) + fibonacci_middle(1)+ fibonacci_middle(2)
// return 1 + 1 + 1 + 1 + 1 + 1 + fibonacci_middle(0) + fibonacci_middle(1)
// return 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1

function fibonacci_plus(index){
  function fn(index, curr=1, step=1){
    if(index === 0){
      return curr
    } else {
      // console.log(index,'index', curr, 'curr', step, 'step')
      let sum = curr + step
      let nowIndex = index -1
      return fn(nowIndex, step, sum)
    }
  }
  return fn(index)
}
// fibonacci(2)
// index, curr, next
//  2,     1,    1
// sum 1+1=2
// nowIndex 2-1=1
// fn(1, 1, 2)

// index, curr, next
//   1,    1,    2
// sum 1+2=3
// nowIndex 1-1 = 0
// fn(0, 2, 3)

// index, curr, next
//   0,    2,    3
// return 2


console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(4))
console.log(fibonacci(7))
console.log('---------------')
console.log(fibonacci_middle(0))
console.log(fibonacci_middle(1))
console.log(fibonacci_middle(2))
console.log(fibonacci_middle(4))
console.log(fibonacci_middle(7))
console.log('---------------')
console.log(fibonacci_plus(0))
console.log(fibonacci_plus(1))
console.log(fibonacci_plus(2))
console.log(fibonacci_plus(4))
console.log(fibonacci_plus(7))