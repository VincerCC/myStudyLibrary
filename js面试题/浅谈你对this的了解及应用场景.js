/**
 * 谈谈你对this的了解和应用场景
 * + this的五种情况分析
 *    this 函数的执行主体，谁把它执行的【和在哪创建 & 在哪执行 都没有必然的联系】
 *    -  Q1：函数执行，看方法前面是否有“点”，没有“点”，this就是window【严格模式下是undefined】，有“点”，“点”前面是谁this就是谁
 *    -  Q2：给当前元素的某个事件行为绑定方法，当事件行为触发，方法中的this就是当前元素本身
 *    -  Q3：构造函数体中的this是当前类的实例
 *    -  Q4：箭头函数中没有执行主体，所用到的this都是其所处上下文中的this
 *    -  Q2：可以基于function.prototype上的call、apply、bind改变this指向
 * + 手撕call、bind源码
 * + 掌握this的好玩应用：鸭子类型
 *                      像鸭子，我们就说他是鸭子  -> 类数组，长得像数组，我们让其用数组上面的方法
 *
 */
let a = '44'
var b = '44'
// 用let  const创建的变量 不会存在window，用var才会
function Q1(){
  console.log('========Q1=========')
  let fn = function (){
    console.log(this)
  }
  let obj = {
    name: 'I’m obj',
    fn: fn
  }
  fn() // 非严格模式下，this->window，严格模式，this->undefined
  obj.fn()//被obj使用，this->obj
}
Q1()

function Q2(){
  console.log('========Q2=========')
  let myDiv = document.createElement('div')
  myDiv.style = 'width: 50px;height: 50px;background-color: pink;'
  document.body.appendChild(myDiv)
  myDiv.addEventListener('click',function(){
    console.log(this)
  })
}
Q2()

function Q3(){
  console.log('========Q3=========')
  function fn(){
    this.name = 'I’m name'
    this.age = 18
    console.log(this) //是当前类fn的实例 fn {name: "I’m name", age: 18}
  }
  let f = new fn()
}
Q3()
function Q4(){
  console.log('========Q4=========')
  let demo = {
    name: 'demo',
    fn(){
      console.log(this)// 指向demo
      setTimeout(function () {
        console.log(this)// 指向window
      }, 100);
      setTimeout(() => {
        console.log(this)// 指向demo
      }, 200);
    }
  }
  demo.fn()
}
Q4()

function Q5(){
  console.log('========Q5=========')
  function func(x,y){
    console.log(this, x, y)
  }
  let obj = {
    name: 'OBJ'
  }
  func(10, 20)
  func.call(obj, 10, 20)
  // func 函数基于 __proto__找到Function.prototype.call, 把call方法执行
  // 在call执行的时候， 方法内部
  //   + 把func的this改为obj
  //   + 并且把params接收的值当做实参传递给func函数
  //   + 并且让func函数立即执行
  // call(context, ...params)

  func.apply(obj, [10, 20])
  // func 函数基于 __proto__找到Function.prototype.apply, 把apply方法执行
  // 在apply执行的时候， 方法内部
  //   + 把func的this改为obj
  //   + 并且把params接收的值当做实参传递给func函数
  //   + 并且让func函数立即执行
  // apply(context, [params])


  let myDiv = document.createElement('div')
  myDiv.style = 'width: 50px;height: 50px;background-color: orange;'
  document.body.appendChild(myDiv)
  myDiv.addEventListener('click', func.bind(obj, 10, 20))
  // func 函数基于 __proto__找到Function.prototype.bind, 把bind方法执行
  // 在bind执行的时候， 方法内部
  //   + 把func的this改为obj
  //   + 并且把params接收的值当做实参传递给func函数
  //   + 但是不会 让func函数立即执行
  // bind(context, ...params)
}
Q5()


function Q6(){
  console.log('===============Q6================')
  function func(x, y, type){
    console.log(this, x, y, type)
  }
  let obj = {
    name: 'Obj'
  }
  // 手撕 call
  Function.prototype.myCall = function myCall(ctx, ...params){
    // this -> func
    // ctx -> obj
    // params -> [10,20]


    let self = this
    ctx == null ? ctx = window : null
    // 将func方法放到ctx中
    ctx.fn = self
    // 执行，this就是ctx了
    ctx.fn(...params)//执行func方法
    delete ctx.fn
  }
  func.myCall(obj, 10, 20, 'myCall')

  // 手撕 apply
  Function.prototype.myApply = function myApply(ctx, params){
    // this -> func
    // ctx -> obj
    // params -> [10,20]


    let self = this
    ctx == null ? ctx = window : null
    // 将func方法放到ctx中
    ctx.fn = self
    // 执行，this就是ctx了
    ctx.fn(...params)//执行func方法
    delete ctx.fn
  }
  func.myApply(obj, [10, 20, 'myApply'])

  // 手撕 bind
  Function.prototype.myBind = function myBind(ctx, ...params){
    // this -> func
    // ctx -> obj
    // params -> [10,20]

    let self = this

    return function proxy(...ev){
      //...ev 最终事件触发可能传的值
      ctx == null ? ctx = window : null
      // 将func方法放到ctx中
      ctx.fn = self
      // 执行，this就是ctx了
      ctx.fn(...params, ...ev)//执行func方法
      delete ctx.fn
    }
  }
  let myDiv = document.createElement('div')
  myDiv.style = 'width: 50px;height: 50px;background-color: skyblue;'
  document.body.appendChild(myDiv)
  myDiv.addEventListener('click', func.bind(obj, 10, 20))
}
Q6()

// 鸭子类型：像鸭子，我们就说他是鸭子  -> 类数组，长得像数组，我们让其用数组上面的方法,(其本身不能直接用数组的方法)
function dark(){
  console.log(arguments)//这是类数组
  // arguments.forEach(()=>{})//不能直接forEach  arguments.forEach is not a function
  // 如果我要让他能直接使用数组方法怎么办呢？
  // 1.将其转换为数组 Array.from()
  Array.from(arguments).forEach((item)=>console.log(item))
  // 2.通过改变slice方法的this指向
  /**
   * slice
   * Array.prototype.slice = function slice(){
   *   let result = []
   *   for(let i = 0; i < this.length; i++){
   *     result.push(this[i])
   *   }
   * }
   */
  let result = Array.prototype.slice.call(arguments)//将slice方法的this改变为arguments，拷贝出来一份数组
  result.forEach((item)=>console.log(item))
  // 改变forEach的this为arguments
  Array.prototype.forEach.call(arguments, (item)=>{
    console.log(item)
  })
}
dark(1,2,3)