namespace a{

  interface Bird{
    name:string,
    fly():void
  }
  interface Dog{
    name:string,
    speak():void
  }
  // 交叉类型& 就是两个接口类型的属性的并集
  type BirdOrDog = Bird & Dog
  let p:BirdOrDog ={
    name:'张三',
    // 不写fly，报错 类型 "{ name: string; }" 中缺少属性 "fly"，但类型 "Bird" 中需要该属性。
    fly(){},
    // 不写speak，报错 类型 "{ name: string; fly(): void; }" 中缺少属性 "speak"，但类型 "Dog" 中需要该属性。
    speak(){}
  }

}

namespace b{

  let p = {
    name:'人类',
    age:18
  }
  // typeof可以获取一个变量的类型
  type Person = typeof p
  // 通过typeof获取到类型Person，去定义p1
  let p1:Person={
    // 类型“{}”缺少类型“{ name: string; age: number; }”中的以下属性: name, age
    name:'人',
    age:18
  }

}

namespace cc{

  // 索引访问 操作符 我们可以通过[]去获取一个类型的子类型
  interface Person{
    name:string,
    age:number,
    job:{
      jobName:string
    }
  }

  let myJob:Person['job']={
    // jobName:1 //所需类型来自属性 "jobName"，在此处的 "{ jobName: string; }" 类型上声明该属性,不能将类型“number”分配给类型“string”。
    jobName:'人类'
  }
  // let myName:Person['name']=1 //不能将类型“number”分配给类型“string”。
  let myName:Person['name']='name'


  // keyof 能返回一个接口的 key的集合   keyofPerson = 'name'|'age'|'job'
  type keyofPerson = keyof Person
  // let p:keyofPerson = 1//不能将类型“1”分配给类型“"job" | "name" | "age"”。
  // let p:keyofPerson = 'myName'//不能将类型“myName”分配给类型“"job" | "name" | "age"”。
  let p1:keyofPerson = 'name'
  let p2:keyofPerson = 'age'
  let p3:keyofPerson = 'job'

}