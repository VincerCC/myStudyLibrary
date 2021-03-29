// 定义了一个接口，接口类型不确定，由调用者传入
interface resultInterFace<T>{
  name:T
}
// 定义一个函数，接收一个类型，函数返回 result接口的 类型
function result<T>(name:T):resultInterFace<T>{
  return {name:name}
  // return {name1:name} //错误，需要包含接口result定义的name，且类型为<T>
}
let myRes:resultInterFace<number> = result<number>(1)
console.log(myRes)
// let myRes:resultInterFace<number> = result<string>(1)//报错，不能将类型“result<string>”分配给类型“resultInterFace<number>”。不能将类型“string”分配给类型“number”。ts(2322)
// let myRes:resultInterFace<number> = result('1')//报错，result传入string类型，函数返回{name:'1'}，不符合接口的类型{name:number}
//
/*
解析：
let myRes:resultInterFace<number> = result<number>(1)
确定了resultInterFace接口的类型是number
所以接口相当于
interface resultInterFace{
  name:number
}
然后函数传入  result<number>(1)，其泛型类型也为number,要求返回值为对象，其中的name属性为number类型
所以函数相当于
function result(res:number):resultInterFace{
  return {name:res}
}
*/





// 方法接口使用泛型
interface school{
  <T>(book:T,student:T):T
}
let schoolFn:school=function<T>(a:T,b:T):T{
  return a
}
console.log(schoolFn<string>('生物','学生'))
console.log(schoolFn<number>(1,2))

// 【泛型继承接口】
// 使用 extends 实现 自定义传入泛型的类型，此示例规定了泛型类型必须有‘length’属性
interface Lengthwise {
  length: number;
}
// 定义一个接口来描述约束条件，使用 extends 继承接口即可
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
// 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：

// loggingIdentity<number>(3);  // 错误, number 没有length属性，不符合接口Lengthwise
loggingIdentity<string>('3')