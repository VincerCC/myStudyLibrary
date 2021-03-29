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
//创建类
var Animal = /** @class */ (function () {
    function Animal(firstName, lastName) {
        this.lastName = lastName;
        // 修饰符
        // public 公有，在类里面、子类、类外面都可访问 【默认】
        // private 私有，在类里面可以方法，在子类、类外面都不可访问
        // protected 保护类型，在类里面、子类里面可以访问、类外面无法访问
        // readonly 只读属性，不允许修改
        this.fullName = '所有动物';
        this.name = '私有属性'; //当成员被标记成 private时，它就不能在声明它的类的外部访问，派生类也无法访问
        this.gname = '受保护属性'; //当成员被标记成 protected时，它就不能在声明它的类的外部访问,但是能在派生类中使用
        //参数里边使用public,readonly,private,protected,其实是把声明和赋值合并至一处
        //
        // constructor(public lastName:string){
        // }
        // 等价于外边声明public lastName，参数也传lastName
        // public lastName:string
        // constructor(lastName){
        //   this.lastName=lastName
        // }
        this.fullName = "\u6211\u662F" + firstName + "[" + lastName + "]";
        this.readName = "\u6211\u662F" + firstName + "[" + lastName + "]";
    }
    // 实例方法
    Animal.prototype.say = function () {
        console.log(this.name, 'Animal的私有属性name');
        // alert(this.fullName)
    };
    Animal.prototype.run = function () {
        alert('run只在父类有');
    };
    Animal.work = function () {
        // 静态方法里面不能直接获取类里边非静态的属性，只能获取到类里边的static修饰的静态属性
        alert("\u6211\u662FAnimal\u7684\u9759\u6001\u65B9\u6CD5" + this.age);
        // alert(`我是Animal的静态方法${this.fullName}-${this.age}`)//类型“typeof Animal”上不存在属性“fullName”。
    };
    Animal.age = 9999;
    return Animal;
}());
// 调用类的静态方法
Animal.work();
var myName = new Animal('vincer', 'tom');
console.log(myName);
// 调用类的实例方法
myName.say();
myName.fullName = '我改了fullName';
// myName.name//属性“name”为私有属性，只能在类“Animal”中访问
// myName.gname//属性“gname”受保护，只能在类“Animal”及其子类中访问。
// myName.readName = '我改了吗' //无法分配到 "readName" ，因为它是只读属性
// 继承类
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(firstName, lastName) {
        var _this = 
        // 调用父类构造函数
        _super.call(this, firstName, lastName) || this;
        _this.dogName = '狗类';
        return _this;
    }
    Dog.prototype.say = function () {
        //能获取到父类的public属性fullName
        console.log(this.fullName, 'dog类中读取父类的fullName');
        //获取不到父类的private属性name
        // console.log(this.name)
        //能获取到父类的protected属性gname
        console.log(this.gname, 'dog类中读取父类的保护属性gname');
    };
    return Dog;
}(Animal));
var dog = new Dog('哈士奇', '二哈');
console.log(dog);
// 子类和父类有相同的方法，子类优先调用自身方法
dog.say();
// 当子类自身没有的方法，会去调用父类方法
dog.run();
// namespace a {
var Person = /** @class */ (function () {
    function Person(name) {
        alert('进来了');
        this.oldName = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            console.log('存取器getter');
            return this.oldName;
        },
        set: function (newName) {
            console.log('存取器setter');
            this.oldName = newName.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person('zhufeng');
console.log(p.oldName);
p.oldName = 'jiagou';
console.log(p.oldName);
// }
