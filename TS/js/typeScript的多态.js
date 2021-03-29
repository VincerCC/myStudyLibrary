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
// 多态，父类定义一个方法不去实现，让继承他的子类去实现，导致每一个子类有不用的表现
// 多态属于继承
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = '';
        this.name = name;
    }
    Person.prototype.eat = function () {
        // 具体实现由子类去实现
    };
    return Person;
}());
var Mans = /** @class */ (function (_super) {
    __extends(Mans, _super);
    function Mans(name) {
        return _super.call(this, name) || this;
    }
    Mans.prototype.eat = function () {
        alert(this.name + "\u5403\u8089");
    };
    return Mans;
}(Person));
var WoMans = /** @class */ (function (_super) {
    __extends(WoMans, _super);
    function WoMans(name) {
        return _super.call(this, name) || this;
    }
    WoMans.prototype.eat = function () {
        alert(this.name + "\u5403\u7D20");
    };
    return WoMans;
}(Person));
var man = new Mans('男人');
man.eat();
var woMan = new WoMans('女人');
woMan.eat();
