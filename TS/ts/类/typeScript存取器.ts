// 存取器：让我们可以有效地控制，对象中成员的访问，通过getters和setters进行操作
class Person {
  firstName: string; //姓氏
  lastName: string; //名字
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // 读取器 --- 负责读取数据的
  get fullName() {
    return this.firstName + "_" + this.lastName;
  }
  // 设置器 --- 负责设置数据
  set fullName(newVal) {
    console.log("set");
    this.firstName = newVal.split("_")[0];
    this.lastName = newVal.split("_")[1];
  }
}
const myP = new Person("独孤", "不败");
console.log(myP);
console.log(myP.fullName);
myP.fullName = "令狐_冲";
console.log(myP.firstName);
console.log(myP.lastName);
