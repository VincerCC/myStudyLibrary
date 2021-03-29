// 命名空间
// 使用namespace包裹代码
// 目的是为了变量命名的冲突
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
var vince;
(function (vince) {
    //创建类
    var Animal = /** @class */ (function () {
        function Animal(firstName) {
            this.fullName = '';
            this.fullName = "\u6211\u662F" + firstName;
        }
        // 实例方法
        Animal.prototype.say = function () {
            console.log(this.fullName, '命名空间被访问了');
        };
        return Animal;
    }());
    vince.Animal = Animal;
    // 继承类
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(firstName) {
            var _this = 
            // 调用父类构造函数
            _super.call(this, firstName) || this;
            _this.dogName = '狗类';
            return _this;
        }
        Dog.prototype.say = function () {
            //能获取到父类的public属性fullName
            console.log(this.fullName, 'dog类中读取父类的fullName');
        };
        return Dog;
    }(Animal));
    vince.Dog = Dog;
})(vince || (vince = {}));
var v = new vince.Animal('命名空间');
v.say();
