// 定义函数、接口、类的时候不能预先确定要使用的数据的类型，在使用的时候才确定类型

// 泛型就是解决 类 接口方法的复用性，能够让类、方法支持自定义类型，实现一个组件能支持多种数据类型

// 只能返回string类型
function getData(value: string): string {
  return value;
}
console.log(getData("字符串"));

// 【泛型】
// 如果我们想getData这个方法也能返回 数字类型，可以使用泛型
function getNewData<T>(value: T): T {
  // 这个方法接受的参数类型，决定了他函数返回的类型
  return value;
}
// getNewData<string>(999)//类型“number”的参数不能赋给类型“string”的参数。
console.log(getNewData<string>("字符串a "));
console.log(getNewData<number>(9999));

// 【类的泛型】
// 求最小值的类，只能传入数字
class minClass {
  public list: number[] = [];
  add(num: number): void {
    this.list.push(num);
  }
  getMin(): number {
    // 求数组最小值
    let list = this.list;
    list.sort((a, b) => a - b);
    return list[0];
  }
}

var m = new minClass();
// m.add('2')//类型“string”的参数不能赋给类型“number”的参数
m.add(13);
m.add(30);
m.add(0);
m.add(19);
m.add(2);
console.log("最小值", m.getMin());

// 泛型类，求最小值的类，能传入a-z或者传入数字
class minNewClass<T> {
  public list: T[] = [];
  add(num: T): void {
    this.list.push(num);
  }
  getMin(): T {
    // 求数组最小值
    let list = this.list;
    list.sort();
    return list[0];
  }
}

var m1 = new minNewClass<number>(); //指定了类的类型是number
// m.add('2')//类型“string”的参数不能赋给类型“number”的参数
m1.add(13);
m1.add(30);
m1.add(0);
m1.add(19);
m1.add(2);
console.log("数字最小值", m1.getMin());

var m2 = new minNewClass<string>(); //指定了类的类型是string
// m.add(2)//类型“number”的参数不能赋给类型“string”的参数
m2.add("b");
m2.add("p");
m2.add("a");
m2.add("o");
m2.add("q");
console.log("字母最小值", m2.getMin());

// 多个泛型
// 定义swap，用于交换 元组的元素
// 规定函数需要传入泛型，元组的类型使用泛型的类型，函数返回元组元素的交换后的元组（类型也为传入泛型类型 交换后的 泛型类型）
function swap<A, B>(tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]];
}
// 函数传入string,number，规定了元组的第一个元素为string，第二个元素为number
let swap1 = swap<string, number>(["字符", 1]);
// 函数传入number,string，规定了元组的第一个元素为number，第二个元素为string
let swap2 = swap<number, string>([2, "字符2"]);
console.log(swap1, swap2);

// 默认泛型 ，<T = number>
function defaultT<T = number>(name: T): T {
  return name;
}
console.log(defaultT<string>("string"));
console.log(defaultT(99999));
console.log(defaultT("string")); //这里不报错是因为，当我不传泛型，ts会根据入参类型帮我去猜我的泛型类型


// 泛型数组
function forEach<A> (arr: A[]) : A[]{
  return arr
}
forEach<string>(['1', '2'])//类型“number”的参数不能赋给类型“string[]”的参数。
