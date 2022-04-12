// 接口 ，可以用来描述对象有哪些属性，属性又是什么类型
// 【对象约束接口】
interface Point {
  x: number;
  y: number;
}
let point: Point = {
  x: 0,
  y: 0,
};
// let point1:Point = { //类型 "{ x: number; }" 中缺少属性 "y"，但类型 "Point" 中需要该属性。
//   x:0
// }

// 【任意属性 约束接口】
interface PointObject {
  // 代表这个接口约束了无数个对象属性，但是他们都是number类型
  [name: string]: number;
}
let pointObject: PointObject = {
  x: 0,
  y: 0,
  z: 0,
  // h:'1'//不能将类型“string”分配给类型“number”。
};
interface PointArr {
  // 代表这个接口约束了无数个数组元素，但是他们都是number类型
  [index: number]: number;
}
let pointArr: PointArr = [1, 2, 3]; //[1,2,3,'5']不能将类型“string”分配给类型“number”。
interface anyObj {
  // 代表这个接口约束了任意个key，但对应的值为number类型
  [propname: string]: number;
}
let obj: anyObj = {
  name: 1,
  // age: '18' // 不能将类型“string”分配给类型“number”。
}
// 【参数 约束接口】
interface name {
  firstName: string;
  lastName: string;
  age?: number; //可选属性  ?
}

function FullName(nameObj: name): void {
  // 规定参数必须传入对象，对象必须包括firstName和lastName，且类型为string
  let { firstName, lastName, age = "" } = nameObj;
  alert(`${firstName}-${lastName}，${age}`);
}
FullName({
  firstName: "张",
  lastName: "无忌",
});
// FullName({
//   firstName:'张' //类型 "{ firstName: string; }" 中缺少属性 "lastName"，但类型 "name" 中需要该属性。
// })
FullName({
  firstName: "小",
  lastName: "龙女",
  age: 18,
});

// 【函数类型 约束接口】，对 方法传入的参数以及返回值进行约束
interface encrypt {
  // 规定方法参数传入 key和value，且类型为string，方法的返回值必须为string类型
  (key: string, value: string): string;
}
// var myFn:encrypt = function(key:number,value:string):string // 参数“key”和“key” 的类型不兼容。不能将类型“string”分配给类型“number”。
// var myFn:encrypt = function(key:string,value:string):number // 不能将类型“(key: string, value: string) => number”分配给类型“encrypt”。不能将类型“number”分配给类型“string”。ts(2322)
var myFn: encrypt = function (key: string, value: string) {
  return `${key}-${value}`;
};
// myFn(9,'王五')//类型“number”的参数不能赋给类型“string”的参数。
// myFn('张三')//应有 2 个参数，但获得 1 个。
myFn("张三", "王五");

// 【类 类型接口】，对 类进行约束
// 规定了类必须要有name属性且为string，和 eat方法无返回值
interface personInterFace {
  name: string;
  eat(str: string): void;
}

// 类Persons实现（implements）了接口 personInterFace
class Persons implements personInterFace {
  // 如果没有name和eat方法，将会报错
  //类型 "Persons" 中缺少属性 "eat"，但类型 "personInterFace" 中需要该属性。, eat
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(): void {
    alert("eat");
  }
}

// 【接口继承】
interface oneInterFace {
  name: string;
  eat(str: string): void;
}

// 接口twoInterFace 继承（extends）了 接口oneInterFace
interface twoInterFace extends oneInterFace {
  work(str: string): void;
}
let dog: twoInterFace = {
    // 如果没有name属性，eat方法，work方法，将会报错
    name: 'string', // 如果没有name方法，报错类型 "{ eat(): void; work(): void; }" 中缺少属性 "name"，但类型 "twoInterFace" 中需要该属性
    // 如果没有eat方法，报错类型 "{ eat(): void; work(): void; }" 中缺少属性 "eat"，但类型 "twoInterFace" 中需要该属性
    eat(): void {
      alert("eat");
    },
    // 如果没有work方法，报错类型 "{ eat(): void; work(): void; }" 中缺少属性 "work"，但类型 "twoInterFace" 中需要该属性
    work(): void {}
}
class Dogs implements twoInterFace {
  // 如果没有name属性，eat方法，work方法，将会报错
  name: string; // 如果没有name方法，报错类型 "Dogs" 中缺少属性 "name"，但类型 "twoInterFace" 中需要该
  constructor(name: string) {
    this.name = name;
  }
  // 如果没有eat方法，报错类型 "Dogs" 中缺少属性 "eat"，但类型 "twoInterFace" 中需要该
  eat(): void {
    alert("eat");
  }
  // 如果没有work方法，报错类型 "Dogs" 中缺少属性 "work"，但类型 "twoInterFace" 中需要该属性
  work(): void {}
}
