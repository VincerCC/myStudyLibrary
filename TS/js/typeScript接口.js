function FullName(nameObj) {
    // 规定参数必须传入对象，对象必须包括firstName和lastName，且类型为string
    var firstName = nameObj.firstName, lastName = nameObj.lastName, _a = nameObj.age, age = _a === void 0 ? '' : _a;
    alert(firstName + "-" + lastName + "\uFF0C" + age);
}
FullName({
    firstName: '张',
    lastName: '无忌'
});
FullName({
    firstName: '小',
    lastName: '龙女',
    age: 18
});
// var myFn:encrypt = function(key:number,value:string):string // 参数“key”和“key” 的类型不兼容。不能将类型“string”分配给类型“number”。
// var myFn:encrypt = function(key:string,value:string):number // 不能将类型“(key: string, value: string) => number”分配给类型“encrypt”。不能将类型“number”分配给类型“string”。ts(2322)
var myFn = function (key, value) {
    alert(key + "-" + value);
    return key + "-" + value;
};
// myFn(9,'王五')//类型“number”的参数不能赋给类型“string”的参数。
// myFn('张三')//应有 2 个参数，但获得 1 个。
myFn('张三', '王五');
var Persons = /** @class */ (function () {
    function Persons(name) {
        this.name = name;
    }
    Persons.prototype.eat = function () {
        alert('eat');
    };
    return Persons;
}());
var Dogs = /** @class */ (function () {
    function Dogs(name) {
        this.name = name;
    }
    // 如果没有eat方法，报错类型 "Dogs" 中缺少属性 "eat"，但类型 "twoInterFace" 中需要该
    Dogs.prototype.eat = function () {
        alert('eat');
    };
    // 如果没有work方法，报错类型 "Dogs" 中缺少属性 "work"，但类型 "twoInterFace" 中需要该属性
    Dogs.prototype.work = function () {
    };
    return Dogs;
}());
