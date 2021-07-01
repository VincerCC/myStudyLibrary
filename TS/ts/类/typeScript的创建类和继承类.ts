//创建类
class Animal {
  // 修饰符
  // public 公有，在类里面、子类、类外面都可访问 【默认】
  // private 私有，在类里面可以访问，在子类、类外面都不可访问
  // protected 保护类型，在类里面、子类里面可以访问、类外面无法访问
  // readonly 只读属性，不允许修改
  public fullName: string = "所有动物";
  private name: string = "私有属性"; //当成员被标记成 private时，它就不能在声明它的类的外部访问，派生类也无法访问
  protected gname: string = "受保护属性"; //当成员被标记成 protected时，它就不能在声明它的类的外部访问,但是能在派生类中使用
  readonly readName: string; //只读属性，不允许修改
  static age: number = 9999;
  constructor(firstName: string, public lastName: string) {
    //参数里边使用public,readonly,private,protected,其实是把声明和赋值合并至一处
    //
    // constructor(public lastName:string){
    // }
    // 等价于外边声明public lastName，参数也传lastName
    // public lastName:string
    // constructor(lastName){
    //   this.lastName=lastName
    // }
    this.fullName = `我是${firstName}[${lastName}]`;
    this.readName = `我是${firstName}[${lastName}]`;
  }
  // 实例方法
  say(): void {
    console.log(this.name, "Animal的私有属性name");
    // alert(this.fullName)
  }
  run(): void {
    alert("run只在父类有");
  }
  static work(): void {
    // 静态方法里面不能直接获取类里边非静态的属性，只能获取到类里边的static修饰的静态属性
    alert(`我是Animal的静态方法${this.age}`);
    // alert(`我是Animal的静态方法${this.fullName}-${this.age}`)//类型“typeof Animal”上不存在属性“fullName”。
  }
}
// 调用类的静态方法
Animal.work();
let myName = new Animal("vincer", "tom");
console.log(myName);
// 调用类的实例方法
myName.say();
myName.fullName = "我改了fullName";
// myName.name//属性“name”为私有属性，只能在类“Animal”中访问
// myName.gname//属性“gname”受保护，只能在类“Animal”及其子类中访问。
// myName.readName = '我改了吗' //无法分配到 "readName" ，因为它是只读属性

// 子类继承父类后，子类的实例上就拥有了父类中的属性和方法
// 继承类
class Dog extends Animal {
  dogName: string = "狗类";
  constructor(firstName: string, lastName: string) {
    // 调用父类构造函数
    super(firstName, lastName);
  }
  // 【重写】子类重写实现并覆盖父类方法，子类和父类有相同的方法，子类优先调用自身方法
  say(): void {
    //能获取到父类的public属性fullName
    console.log(this.fullName, "dog类中读取父类的fullName");

    //获取不到父类的private属性name
    // console.log(this.name)

    //能获取到父类的protected属性gname
    console.log(this.gname, "dog类中读取父类的保护属性gname");
  }
}

let dog = new Dog("哈士奇", "二哈");
console.log(dog);

// 【重写】子类重写实现并覆盖父类方法，子类和父类有相同的方法，子类优先调用自身方法
dog.say();
// 当子类自身没有的方法，会去调用父类方法
dog.run();

// 类存取器getter setter
class Person {
  oldName: string;
  age: number;
  constructor(name: string) {
    alert("进来了");
    this.oldName = name;
  }
  get name() {
    console.log("存取器getter");
    return this.oldName;
  }
  set name(newName: string) {
    console.log("存取器setter");
    this.oldName = newName;
  }
}
let p = new Person("珠峰");
console.log(p.oldName);
p.oldName = "架构";
console.log(p.oldName);
