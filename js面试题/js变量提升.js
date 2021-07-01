/*变量提升	(预处理)
			 * js在代码执行之前会做一个预处理工作
			 * 		1、通过var收集变量，但是不赋值
			 * 		2、通过function(){}收集函数，并且定义该函数
			 */
console.log(username);//预处理定义但不赋值，输出undefined
var username='abc'
console.log(username);//赋值，输出abc


fun();//预处理定义了该函数，将会正常执行代码，输出fun()
function fun(){
  console.log("fun()");
}

console.log('======================')
// 预编译过程
// 1.寻找形参和变量声明，赋值undefined
// 2.实参值赋值给形参
// 3.找函数声明，赋值
// 4.执行函数体

function test(a){
  console.log(a);
  var a = 1;
  console.log(a);
  function a(){};
  console.log(a);
  var b = function(){};
  console.log(b);
  function d(){};
}
test(2)
// 输出
// ƒ a(){}
// 1
// 1
// ƒ (){}
// AO activation object 活跃对象，函数上下文
// 1.寻找函数形参，和变量声明，赋值undefined
// 2.寻找函数实参，赋值给形参
// 3.寻找函数体声明
// 4.执行函数
// AO = {
//    a: undefined -> 1.，寻找函数形参，和变量声明，找到形参a，赋值undefined
//       2 -> 2.找到函数实参2，赋值给形参a
//       function a(){}; -> 3.寻找函数体声明，赋值给a
//       1 -> 4.执行函数,将1赋值给a
//    b: undefined -> 1.寻找变量声明，找到变量b，赋值undefined
//       function(){}; -> 4.执行函数，，b赋值function(){};
//    d: function d(){}; -> 3.寻找函数体声明，赋值给d
// }


console.log('======================')
function test2(a,b){
  console.log(a);
  c = 0;
  var c;
  a = 5;
  b = 6;
  console.log(a);
  console.log(b);
  function b(){};
  function d(){};
  console.log(b)
}
test2(1)

/*
* AO = {
* 1.找形参，变量声明,赋值undefined
* 	a: undefined
* 	b: undefined
* 2.实参赋值给形参
* 	a: 1
* 3.寻找函数体，赋值
*   b: function b(){};
*   d: function d(){};
* 4.执行函数
*   输出a => 1
*   c: 0
*   a: 5
*   b: 6
*   输出a => 5
*   输出b => 6
*   输出b => 6
* }
*/

console.log('======================')
// GO global object 全局上下文
// 1.寻找变量声明，赋值undefined
// 2.寻找函数体声明
// 3.执行函数

console.log(a); //function a(){};
var a = 1;
function a(){};
console.log(a); // 1
/** GO
 * 1.寻找变量声明
 * 		a: undefined
 * 2.寻找函数体
 *   a: function a(){};
 * 3.执行函数
 *   console.log(a); => function a(){};
 *   赋值 a: 1
 *   console.log(a); => 1
*/

console.log(c,d);// function c(){}; undefined
function c(){};
var d = function(){};
/** GO
 * 1.寻找变量声明
 *   d: undefined
 * 2.寻找函数声明
 *   c: function c(){};
 * 3.执行函数
 *   先 console.log(c) ->输出 function c(){};
 *	 然后 赋值，d = function(){};
*/


console.log('======================')
var bb = 3;
console.log(aa);
function aa(a){
  console.log(a);
  var a = 2;
  console.log(a);
  function a(){};
  var b = 5;
  console.log(b);
};
aa(1);

// 2.寻找函数实参，赋值给形参
// 3.寻找函数体声明
// 4.执行函数
/**
 * GO{
 *  1.寻找变量声明
 *    bb: undefined
 *  2.寻找函数声明
 *    aa: function aa(a){}
 * }
 *
 * AO{
 *   1.寻找函数形参，和变量声明，赋值undefined
 *    a: undefined
 *    b: undefined
 *   2.寻找函数实参，赋值给形参
 *    a: 1
 *   3.寻找函数体
 *    a: function()a{}
 *   4.开始执行
  *     console.log(aa)   => function aa(a){}
  *     console.log(a)    => function()a{}
 *     a = 2
 *     	console.log(a)    => 2
 *     b = 5
 *     	console.log(b)    => 5
 * }
 *
 *
*/