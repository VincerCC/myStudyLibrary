// 抽象类，提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现

//抽象类和抽象方法用来定义一个标准，规定继承abAnimal这个类的类 必须实现eat方法

// 定义一个抽象类
abstract class abAnimal {
  public name: string = "";
  constructor(name: string) {
    this.name = name;
  }
  // abstract eat():void{}//方法“eat”不能具有实现，因为它标记为抽象。
  // 抽象方法
  abstract eat(): void;
  // 实例方法
  drink() {
    console.log("喝水，真好喝");
  }
}
// new abAnimal() // 无法创建抽象类的实例。
class Fish extends abAnimal {
  constructor(name: string) {
    super(name);
  }
  eat(): void {
    alert(`${this.name}实现了抽象类的抽象方法`);
  }
  // 如果不实现eat,会报错，【非抽象类“Fish”不会实现继承自“abAnimal”类的抽象成员“eat”。】
}
let F = new Fish("鱼儿");
F.eat(); //鱼儿实现了抽象类的抽象方法
F.drink();
