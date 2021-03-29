// 定义一个函数，接收一个类型，函数返回 result接口的 类型
function result(name) {
    return { name: name };
    // return {name1:res} 错误，需要包含接口result定义的name，且类型为<T>
}
var myRes = result(1);
console.log(myRes);
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
// 多个泛型
// 定义swap，用于交换 元组的元素
// 规定函数需要传入泛型，元组的类型使用泛型的类型，函数返回元组元素的交换后的元组（类型也为传入泛型类型 交换后的 泛型类型）
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
// 函数传入string,number，规定了元组的第一个元素为string，第二个元素为number
var swap1 = swap(['字符', 1]);
// 函数传入number,string，规定了元组的第一个元素为number，第二个元素为string
var swap2 = swap([2, '字符2']);
console.log(swap1, swap2);
// 默认泛型 ，<T = number>
function defaultT(name) {
    return name;
}
console.log(defaultT('string'));
var schoolFn = function (a, b) {
    return a;
};
console.log(schoolFn('生物', '学生'));
console.log(schoolFn(1, 2));
// 定义一个接口来描述约束条件，使用 extends 继承接口即可
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
// 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：
// loggingIdentity(3);  // 错误, number 没有length属性，不符合接口Lengthwise
loggingIdentity('3');
