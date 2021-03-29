function hello(data) {
    // data参数 必须包含  name属性且类型为string  ，age属性类型为number ，sex属性可选
    console.log('HELLO' + data.name + data.age);
}
var p1 = { name: 'name', age: 20, read: '只读' };
console.log(p1, '+p1+');
// p1.read = '可修改'; // error! 无法分配到 "read" ，因为它是只读属性。
hello({ name: 'tom', age: 66 });
hello({ name: 'jack', age: 15, sex: '1' });
//【函数】，ts中实参和形参必须数量一致，类型一致，形参使用?可不传实参
function fnn(num, str) { } //参数必须为两个，且第一个为number，第二个为string
fnn(1, '1');
//【可选参数】 使用 ?
function fnn1(num, str) { } //参数最多为两个，且第一个为number，第二个可选不传或者传string
// function fnn4(num?:number,str:string){}//可选参数后边不能有必选参数，【必选参数不能位于可选参数后。】
fnn1(1, '1');
fnn1(1);
// 【默认参数】 使用 =
function fnn2(num, str) {
    if (num === void 0) { num = 1; }
    if (str === void 0) { str = 'str'; }
} //参数为两个，且第一个为number默认为1，第二个传string默认为str
fnn2(); //使用默认参数可以代替可选参数，不传参数不报错
fnn2(undefined, '字符串'); //如果不想传第一个，但是想传第二个，可以将第一个传入undefined
// 【剩余参数】 使用...参数名:类型[]
function fnn3(num) {
    var otherNum = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherNum[_i - 1] = arguments[_i];
    }
    console.log(otherNum, typeof otherNum); //otherNum:[1,2,3,4,5]
    return otherNum.reduce(function (sum, item) {
        return sum + item;
    }, num);
}
console.log(fnn3(0, 1, 2, 3, 4, 5));
