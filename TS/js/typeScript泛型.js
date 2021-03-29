// 泛型就是解决 类 接口方法的复用性，能够让类、方法支持自定义类型，实现一个组件能支持多种数据类型
// 只能返回string类型
function getData(value) {
    return value;
}
console.log(getData('字符串'));
// 【泛型】
// 如果我们想getData这个方法也能返回 数字类型，可以使用泛型
function getNewData(value) {
    // 这个方法接受的参数类型，决定了他函数返回的类型
    return value;
}
// getNewData<string>(999)//类型“number”的参数不能赋给类型“string”的参数。
console.log(getNewData('字符串a '));
console.log(getNewData(9999));
// 【类的泛型】
// 求最小值的类，只能传入数字
var minClass = /** @class */ (function () {
    function minClass() {
        this.list = [];
    }
    minClass.prototype.add = function (num) {
        this.list.push(num);
    };
    minClass.prototype.getMin = function () {
        // 求数组最小值
        var list = this.list;
        list.sort(function (a, b) { return a - b; });
        return list[0];
    };
    return minClass;
}());
var m = new minClass();
// m.add('2')//类型“string”的参数不能赋给类型“number”的参数
m.add(13);
m.add(30);
m.add(0);
m.add(19);
m.add(2);
console.log('最小值', m.getMin());
// 泛型类，求最小值的类，能传入a-z或者传入数字
var minNewClass = /** @class */ (function () {
    function minNewClass() {
        this.list = [];
    }
    minNewClass.prototype.add = function (num) {
        this.list.push(num);
    };
    minNewClass.prototype.getMin = function () {
        // 求数组最小值
        var list = this.list;
        list.sort();
        return list[0];
    };
    return minNewClass;
}());
var m1 = new minNewClass(); //指定了类的类型是number
// m.add('2')//类型“string”的参数不能赋给类型“number”的参数
m1.add(13);
m1.add(30);
m1.add(0);
m1.add(19);
m1.add(2);
console.log('数字最小值', m1.getMin());
var m2 = new minNewClass(); //指定了类的类型是string
// m.add(2)//类型“number”的参数不能赋给类型“string”的参数
m2.add('b');
m2.add('p');
m2.add('a');
m2.add('o');
m2.add('q');
console.log('字母最小值', m2.getMin());
