// 多态，父类定义一个方法不去实现，让继承他的子类去实现，导致每一个子类有不用的表现
// 多态属于继承
class Person {
  public name: string = "";
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    // 具体实现由子类去实现
  }
}
class Mans extends Person {
  constructor(name: string) {
    super(name);
  }
  eat(): void {
    alert(`${this.name}吃肉`);
  }
}

class WoMans extends Person {
  constructor(name: string) {
    super(name);
  }
  eat(): void {
    alert(`${this.name}吃素`);
  }
}
let man: Mans = new Mans("男人");
man.eat();
let woMan: WoMans = new WoMans("女人");
woMan.eat();
