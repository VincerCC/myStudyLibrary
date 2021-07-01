// 存取器：让我们可以有效地控制，对象中成员的访问，通过getters和setters进行操作
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        // 读取器 --- 负责读取数据的
        get: function () {
            return this.firstName + "_" + this.lastName;
        },
        // 设置器 --- 负责设置数据
        set: function (newVal) {
            console.log("set");
            this.firstName = newVal.split("_")[0];
            this.lastName = newVal.split("_")[1];
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var myP = new Person("独孤", "不败");
console.log(myP);
console.log(myP.fullName);
myP.fullName = "令狐_冲";
console.log(myP.firstName);
console.log(myP.lastName);
