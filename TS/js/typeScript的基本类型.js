/*
 * @Author: your name
 * @Date: 2020-05-30 16:47:24
 * @LastEditTime: 2020-09-29 16:00:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \TS\typeScript.ts
 */
//【字符串类型】
var str = '字符串';
//【数字类型】
var num = 999;
//【布尔值类型】
var boo = true;
//【数组类型】，数组的内容类型必须是一样的
var num1 = [1, 2];
var num2 = [true, false];
//【any类型】，不限制数据类型，建议少用
var any = 1;
any = 'str';
//【undefined】
var unFin = undefined;
var numOrUdf1 = 1;
var numOrUdf2 = undefined;
//【null】
var nul = null;
//【元组】，是特殊的 数组，数组的元素长度、类型需要保持一致
var tulp = ['字符串', 1];
//【枚举】，特定值表示
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(Color[2]); //输出Green，因为Green值为 2
console.log(c); //输出 2
//【void】 ，表示函数无返回值
function fn1(p) {
    return p;
}
function fn2(str) {
    return '字符串' + str;
}
function fn3() {
    console.log('我没有返回值');
}
function fn4() {
    // 设置了函数无返回值，但是实际有返回值，并不会报错
    return console.log('我没有返回值');
}
fn1(999);
fn2('string');
fn3();
fn4();
//【never类型】，表示不可能出现的值，死循环或者是 throw new Error();
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 没有声明返回值类型，但是类型推断判断他返回值为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
//【类型断言】，类似于类型转换，两种方式
var duanyan = '我是字符串';
// 方式一 使用<>
var strr = duanyan;
console.log(typeof strr, strr); //string '我是字符串'
// 方式二，使用as
var strrr = duanyan;
console.log(typeof strrr, strrr); //string ''我是字符串'
/*
let obj:data = {
  name:1,//不能将类型“number”分配给类型“string”。
  age:'1'//不能将类型“number”分配给类型“string”。
}
*/
var obj1 = {
    name: 'string',
    age: 1
};
var obj2 = {
    name: 'string',
    age: 1,
    sex: '男'
};
// 【泛型】  可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据
function show(data) {
    // 规定，这个函数的返回值，需要根据 调用者 传的参数的类型 去  返回一样的类型
    return data;
}
var output = show("myString"); //这里我们明确的指定了T是string类型，并做为一个参数传给函数，函数返回类型也是string类型
// let output:number = show<string>("myString");//错误，无法将string赋值给number
// let output:string = show<string>(99);//错误，类型“number”的参数不能赋给类型“string”的参数
