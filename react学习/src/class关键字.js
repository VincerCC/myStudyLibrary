// main.js
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示


function  Person(name,age) {
    this.name=name
    this.age=age
}
Person.info='aaa'//这是Person的静态属性,需要 类名.属性名访问
Person.prototype.fun=function (){
    console.log("这是Person上的实例方法")
}
const p=new Person('王多多',18)
console.log(p)
console.log(Person.info)
p.fun()//这是实例方法
Person.show=function (){
    //Person的静态方法，,需要 类名.方法名访问
    console.log("这是Person的静态方法")
}
Person.show()




// 在class的{ }区间内，只能写 构造器，静态方法，静态属性，实例方法，不能var，let,const
class Animal{
    // 类中的构造器，每个类都会有构造器
    // 构造器作用，每当new这个类的时候，必然会先执行构造器的diamante
    constructor(name,age){
        // 接受参数
        //实例属性
        this.name=name
        this.age=age
    }
    // class内部通过static修饰的属性，是静态属性,只能通过 类名.属性名 访问
    static info = 'eee'
    // 这是Animal的静态方法,只能通过 类名.方法名 访问
    static show (){
        console.log("这是Animal的静态方法")
    }
    //这是挂载到Animal的原型上的实例方法，很常用
    fun(){
        console.log("这是Animal的实例方法")
    }
}

const a=new Animal('王多111多',18)
console.log(a)
console.log(Animal.info)//info是Animal的静态属性
a.fun()
Animal.show()