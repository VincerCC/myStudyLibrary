// 静态成员：在类中通过static修饰的属性或者方法,就是静态成员
// 静态成员在使用的时候通过类名.的语法调用
(() => {
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHi() {
      console.log("你好");
    }
  }
  const p: Person = new Person("索隆");
  // 通过实例对象调用的实例属性
  console.log(p.name);
  // 通过实例对象调用的实例方法
  p.sayHi();
})();

(() => {
  class Person {
    // 静态属性
    static myName: string = "我是静态属性myName";
    constructor() {
      // 此时this是实例对象，myName是静态属性，不能通过实例对象直接调用静态属性
      // this.myName = myName; // 属性“myName”在类型“Person”上不存在。你的意思是改为访问静态成员“Person.myName”吗?
    }
    static sayHi() {
      console.log("静态方法，你好啊");
    }
  }
  const p: Person = new Person();
  // 通过实例对象调用的静态属性报错
  // console.log(p.name); // 类型“Person”上不存在属性“name”。

  // 通过实例对象调用的静态方法报错
  // p.sayHi(); // 属性“sayHi”在类型“Person”上不存在。你的意思是改为访问静态成员“Person.sayHi”吗?

  // 访问静态属性
  console.log(Person.myName);
  // 修改静态属性
  Person.myName = "罗罗亚_索隆";

  console.log(Person.myName);

  // 调用静态方法
  Person.sayHi();
})();
