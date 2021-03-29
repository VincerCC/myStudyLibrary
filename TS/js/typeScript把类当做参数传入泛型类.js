//把类 当做参数 传入泛型类
var myClass = /** @class */ (function () {
    function myClass() {
    }
    return myClass;
}());
var HbData = /** @class */ (function () {
    function HbData() {
    }
    HbData.prototype.add = function (user) {
        console.log(user);
    };
    return HbData;
}());
var mc = new myClass();
mc.name = 'tom';
mc.age = 18;
console.log(mc);
var hb = new HbData();
// hb.add({name:'1',age:17}) 可以
// hb.add({name:'1'}) //类型 "{ name: string; }" 中缺少属性 "age"，但类型 "myClass" 中需要该属性。ts(2345)
// hb.add(1) //类型“number”的参数不能赋给类型“myClass”的参数。
hb.add(mc);
