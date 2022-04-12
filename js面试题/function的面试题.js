// 构造函数
function Foo(){
  // 变量赋值
  // 如果Foo没执行，getName赋值是不进行的
  getName = function (){
    console.log(1)
  }
  return this
}
// 函数Foo上的静态方法
Foo.getName = function (){
  // console.log(this)
  console.log(2)
}
// 扩展函数原型上的方法
// new Foo().getName()
Foo.prototype.getName = function (){
  console.log(3)
}
// 给全局变量赋值一个匿名函数
var getName = function (){
  console.log(4)
}

// 函数声明
function getName(){
  console.log(5)
}


Foo.getName() // 2  执行Foo函数上的静态方法

getName() // 4
// 预编译阶段
/**
 * 全局 GO {
 *    @先找var声明
 *      getName： undefined
 *    @找函数声明
 *      getName：function getName(){
 *        console.log(5)
 *      }
 *    @执行代码
 *      getName: function (){
 *        console.log(4)
 *      }
 * }
 */


Foo().getName() // 1
getName() // 1
/**
 *  Foo()执行里面函数时会将getName重新赋值，它先找var变量声明getName，
    Foo作用域内没有，此时会向外找，此时是getName()即为this.getName()也就是window.getName()
    为4,然后将它重新赋值为1，所以执行1
 *
 */


new Foo.getName() // 2  实际就是调用Foo的静态方法, 但是getName里边的this指向新的实例化对象{}


new Foo().getName() // 3
/**
 * new Foo().getName() ，因为 Foo 上没有 getName()方法，所以往原型找 ===> Foo.prototype.getName()
 * 先执行Foo函数，而Foo此时作为构造函数却有返回值。在原题中，返回的是this，而this在构造函数中本来就代表当前实例化对象，遂最终Foo函数返回实例化对象。
 * 之后调用实例化对象的getName函数，因为在Foo构造函数中没有为实例化对象添加任何属性(this.a=1类似操作)，遂到当前对象的原型对象（prototype）中寻找getName，找到后输出3。

 */
new new Foo().getName() // 3 这个new没意义