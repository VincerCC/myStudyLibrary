// 装饰器 是一个函数
// 可以注入到《类，方法，属性》上，来扩展《类，方法，属性》的功能
// 常见装饰器： 类装饰器，属性装饰器，方法装饰器，参数装饰器

// 普通装饰器（不可传参）
// 类装饰器
interface HttpClient1{
  // 增强HttpClient1类，让 http.url 不会报错【类型“HttpClient1”上不存在属性“url”。】
  url:string
}
function logClass1(target:any){
  console.log(target) //target就是装饰的那个类
  // 装饰器 扩展类的属性
  target.prototype.url = 'xxxxx'
  // 装饰器 扩展类的方法
  target.prototype.run = function (){
    alert('我是run方法')
  }
}
@logClass1
class HttpClient1{
  constructor(){

  }
  getData(){

  }
}
// var http = new HttpClient1()
// console.log(http.url)
// http.run()

// 属性装饰器
function upperCase (target:any,propertyName:string){
  // 如果装饰器装饰的是属性，target将指向类的原型
  // 如果装饰器装饰的是类，target将指向类的定义
  // 所以target[propertyName]是name
  let value = target[propertyName]
  const getter = () => value
  const setter = (newVal:string) => {
    value = newVal.toUpperCase()
  }
  delete target[propertyName]
  Object.defineProperty(target,propertyName,{
    get:getter,
    set:setter,
    enumerable:true,
    configurable:true
  })
}
class theName{
  @upperCase
  name:string = 'lisa'
}
let p = new theName()
p.name = 'jack'
console.log(p.name)//经过装饰器upperCase，预期输出大写JACK

// 工厂装饰器（可传参）
function logClass2(params:string){
  // params就是@logClass2('helloWorld')的参数
  return function(target:any){
    console.log(target,'target')
    // target是被装饰的类 HttpClient2
    console.log(params,'params')
    target.prototype.url = params
  }
}
@logClass2('http://helloWorld')
class HttpClient2{
  constructor(){

  }
  getData(){

  }
}
var http = new HttpClient2()
console.log(http,'http')
