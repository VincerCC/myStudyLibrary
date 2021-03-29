// 抽象类，提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 抽象类和抽象方法用来定义一个标准，规定abAnimal这个类要求它的子类必须包含eat方法
var abAnimal = /** @class */ (function () {
    function abAnimal(name) {
        this.name = '';
        this.name = name;
    }
    abAnimal.prototype.drink = function () {
        // 其他方法可以不实现
    };
    return abAnimal;
}());
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name) {
        return _super.call(this, name) || this;
    }
    Fish.prototype.eat = function () {
        alert(this.name + "\u5B9E\u73B0\u4E86\u62BD\u8C61\u7C7B\u7684\u62BD\u8C61\u65B9\u6CD5");
    };
    return Fish;
}(abAnimal));
var F = new Fish('鱼儿');
F.eat();
