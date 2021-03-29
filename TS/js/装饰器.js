// 装饰器 是一个函数
// 可以注入到《类，方法，属性》上，来扩展《类，方法，属性》的功能
// 常见装饰器： 类装饰器，属性装饰器，方法装饰器，参数装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClass1(target) {
    console.log(target); //target就是装饰的那个类
    // 装饰器 扩展类的属性
    target.prototype.url = 'xxxxx';
    // 装饰器 扩展类的方法
    target.prototype.run = function () {
        alert('我是run方法');
    };
}
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
    }
    HttpClient1.prototype.getData = function () {
    };
    HttpClient1 = __decorate([
        logClass1
    ], HttpClient1);
    return HttpClient1;
}());
// var http = new HttpClient1()
// console.log(http.url)
// http.run()
// 属性装饰器
function upperCase(target, propertyName) {
    // 如果装饰器装饰的是属性，target将指向类的原型
    // 如果装饰器装饰的是类，target将指向类的定义
    // 所以target[propertyName]是name
    var value = target[propertyName];
    var getter = function () { return value; };
    var setter = function (newVal) {
        value = newVal.toUpperCase();
    };
    delete target[propertyName];
    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
var theName = /** @class */ (function () {
    function theName() {
        this.name = 'lisa';
    }
    __decorate([
        upperCase
    ], theName.prototype, "name");
    return theName;
}());
var p = new theName();
p.name = 'jack';
console.log(p.name); //经过装饰器upperCase，预期输出大写JACK
// 工厂装饰器（可传参）
function logClass2(params) {
    // params就是@logClass2('helloWorld')的参数
    return function (target) {
        console.log(target, 'target');
        // target是被装饰的类 HttpClient2
        console.log(params, 'params');
        target.prototype.url = params;
    };
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
    }
    HttpClient2.prototype.getData = function () {
    };
    HttpClient2 = __decorate([
        logClass2('http://helloWorld')
    ], HttpClient2);
    return HttpClient2;
}());
var http = new HttpClient2();
console.log(http, 'http');
