// main.js
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示

//使用外部组件
// 导入
import Hello1 from '@/component/hello'

const user={
    name:'liu',
    age:24
}
const myH1=
<div>
{/*直接以组件标签形式使用 */}
{/* <Hello name={user.name} age={user.age}></Hello> */}
{/* 使用扩展运算符传值 */}
<Hello1 {...user}></Hello1>
</div>


// 在class的{ }区间内，只能写 构造器，静态方法，静态属性，实例方法，不能var，let,const

// 父类 【可以把父类理解为原型对象，将不同子类中共同的部分，放到父类】
class Person{
    // 类中的构造器，每个类都会有构造器
    // 构造器作用，每当new这个类的时候，必然会先执行构造器的diamantege
    constructor(name,age){
        // 接受参数
        //实例属性
        this.name=name
        this.age=age
    }
    show(){
        console.log("父类的实例方法")
    }
}

//extends实现子类继承父类，从而子类将会有父类的属性，方法
// 语法 class 子类 extends 父类 { }，
//如果父类有构造器，子类继承父类后，如果需要给子类定义构造器，只能在内部使用使用super函数
//子类
class USA extends Person{
    constructor(name,age){
        //super是什么？
        //super是一个函数，其实就是父类的构造器constructor的一个引用
        super(name,age)
    }
}
const a=new USA('TOM',18)
console.log(a)
// 子类访问父类的方法
a.show()

//子类
class China extends Person{
    //id是这个类的独有属性
    constructor(name,age,id){
        //super是什么？
        //super是一个函数，其实就是父类的构造器constructor的一个引用，可以看做就是父类的构造器
        super(name,age)
        // 接受子类独有的属性id，只能放在super后边
        this.id=id
    }
    showOnly(){
        console.log("子类特有的方法");
    }
}
const b = new China('张三',18,'4414******************')
console.log(b)
// 子类访问父类的方法
b.show()
b.showOnly()



// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myH1,document.getElementById('app'))