/*
 * @Author: your name
 * @Date: 2020-05-30 16:47:24
 * @LastEditTime: 2020-10-15 11:35:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \TS\typeScript.ts
 */
//【字符串类型】
let str:string = '字符串'

//【数字类型】
let num:number = 999

//【布尔值类型】
let boo:boolean = true

//【数组类型】，数组的内容类型必须是一样的
let num1:number[] = [1,2]
let num2:Array<boolean> = [true,false]

//【any类型】，不限制数据类型，建议少用
let any:any = 1
any = 'str'

//【undefined】
let unFin:undefined = undefined
let numOrUdf1 : number | undefined = 1
let numOrUdf2 : number | undefined = undefined

//【null】
let nul:null = null

//【元组】，是特殊的 数组，数组的元素长度、类型需要保持一致
let tulp : [string, number] =['字符串',1]

//【枚举】，特定值表示
enum Color {Red = 1, Green = 2, Blue = 4}
enum Color1 {Red, Green, Blue}//默认是0,1,2
let c: Color = Color.Green;
console.log(Color[2]) //输出Green，因为Green值为 2
console.log(c)//输出 2


//【void】 ，表示函数无返回值
function fn1(p:number):number{
  return p
}
function fn2(str:string):string{
  return '字符串'+str
}
function fn3():void{
  console.log('我没有返回值')
}
function fn4():void{
  // 设置了函数无返回值，但是实际有返回值，并不会报错
  return console.log('我没有返回值')
}
fn1(999)
fn2('string')
fn3()
fn4()

//【never类型】，表示不可能出现的值，死循环或者是 throw new Error();
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 没有声明返回值类型，但是类型推断判断他返回值为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}
// 【类型推断】 由ts猜你的类型
let typeName = 1
typeName = 2
// typeName = '2'//不能将类型“string”分配给类型“number”。

//【类型断言】，类似于类型转换，两种方式
let duanyan:any = '我是字符串'
// 方式一 使用<>
let strr= (<string>duanyan)
console.log(typeof strr ,strr)//string '我是字符串'

// 方式二，使用as
let strrr= duanyan as string
console.log(typeof strrr ,strrr)//string ''我是字符串'


//【接口】 为一组对象内容进行校验
interface  data  {
  name:string,
  age:number,
  sex?:string,// ?可选属性
  readonly read?:string//只读属性
}
/*
let obj:data = {
  name:1,//不能将类型“number”分配给类型“string”。
  age:'1'//不能将类型“number”分配给类型“string”。
}
*/
let obj1:data = {
  name:'string',
  age:1
}
let obj2:data = {
  name:'string',
  age:1,
  sex:'男'
}

// 【泛型】  可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据
function show<T>(data:T):T{
  // 规定，这个函数的返回值，需要根据 调用者 传的参数的类型 去  返回一样的类型
  return data
}
let output:string = show<string>("myString");//这里我们明确的指定了T是string类型，并做为一个参数传给函数，函数返回类型也是string类型
// let output:number = show<string>("myString");//错误，无法将string赋值给number
// let output:string = show<string>(99);//错误，类型“number”的参数不能赋给类型“string”的参数








