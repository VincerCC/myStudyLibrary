// 高阶函数，一个函数返回另一个函数 、一个函数接受一个函数参数
function code(...args){
  console.log('code', ...args)
}
Function.prototype.before = function (cb) {
  let codeFn = this;// 谁调用this就是谁，此时this为code函数
  return ((...args)=>{
    cb()
    codeFn(...args)
  })
}
let newCode = code.before(() => {
  console.log('before')
})
newCode('a', 'b')