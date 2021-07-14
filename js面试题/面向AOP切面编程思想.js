/**
 * AOP
 * 1.Aspect Oriented Programming
 *    层面    面向       编程
 * 2.面向切面编程
 * 3.在程序中时长用到的某些程序步骤、阶段、片段抽离出来，与本身的程序逻辑隔离
*/
function test1() {
  console.log('----------------') // 期望是before
  console.log('1')
  console.log('++++++++++++++++')// 期望是after
}
function test2() {
  console.log('----------------')
  console.log('2')
  console.log('++++++++++++++++')
}
function test3() {
  console.log('----------------')
  console.log('3')
  console.log('++++++++++++++++')
}
test1()
test2()
test3()
/**
 * 结果：
 *  ----------------
    1
    ++++++++++++++++
    ----------------
    2
    ++++++++++++++++
    ----------------
    3
    ++++++++++++++++
  期望是 有个程序能够专门执行 console.log('----------------') 和 console.log('++++++++++++++++')，变化的只有console.log('1、2、3')
  test1.before(() => {
    console.log('----------------')
  }).after(() => {
    console.log('++++++++++++++++')
  })()
 */
Function.prototype.before = function(cb){
  var self = this // 谁调用 this就是谁。此时this是test4

  if(typeof cb !== 'function') throw new TypeError('cb must be function')

  return () => {
    cb.apply(self, arguments)
    // 相当于执行
    // () => {
    //   console.log('----------------')
    // })

    let res = self.apply(self, arguments)
    // 相当于执行
    // function test4(){
    //   console.log('4')
    //   return 'AOP'
    // }
    // 所以需要保存返回值

    return res // 如果fn有返回值，需要返回
  }
}
Function.prototype.after = function(cb){
  var self = this // 此时的 this 是before返回的函数

  if(typeof cb !== 'function') throw new TypeError('cb must be function')

  return () => {
    let res = self.apply(self, arguments)
    // 相当于执行
    // () => {
    //   cb.apply(self, arguments)
    //   return self.apply(self, arguments)
    // }
    // 所以需要保存返回值

    cb.apply(self, arguments)
    // 相当于执行
    // () => {
    //   console.log('----------------')
    // })

    return res
  }
}
function test4(){
  console.log('4')
  return 'AOP'
}
let r = test4.before(() => {
  console.log('----------------')
}).after(() => {
  console.log('++++++++++++++++')
})()
console.log(r)

