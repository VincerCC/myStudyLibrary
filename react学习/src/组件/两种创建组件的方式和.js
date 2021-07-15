// 两种创建组件的方式和.js
import React, { Component } from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示
// 组件名称开头必须为大写
//使用外部组件
// 导入
import Hello1 from '@/component/hello'

const user={
    name:'liu',
    age:24
}
//创建组件方式一，通过function创建
function Tv(props){
    return <h1>{props.name}{props.age}我是Tv组件</h1>
}

//创建组件方式二，使用class创建组件
// class 组件名称 extends React.Component{
    // render(){
    //     return <h1>我是Hello组件</h1>
    // }
// }
class Movie extends React.Component{

    constructor(props){
        // 由于movie组件继承了 React.Component，所以自定义构造器必须使用super，才能使用this
        super(props)

        this.state={
            msg:'我是movie的私有数据',
            sal:'454'
            // 这个this.state相当于Vue中的data(){return {}}
        }
    }
    // 在class创建的组件中，如果要使用外界传过来的数据，可以直接this.props.xxx来访问，不需要单独接收
    // this表示当前组件的实例对象，props都是只读的不能被重新赋值
    // render函数的作用是 渲染当前组件所对应的虚拟Dom元素
    show(){
        // 组件内的一个方法
        console.log('我是组件内方法')
    }
    render(){
        console.log(this.state)
        return <h1 onClick={ () => { this.show() }}>{this.props.name}{this.props.age}我是movie组件{this.state.msg}</h1>
    }
}
// 两种方式的区别
// 使用function创建的组件，只有props，没有自己的私有数据和生命周期函数
// 使用class创建的组件，有自己的私有数据和生命周期函数

// 高阶组件
const heightComponent = (comp) => {
    return class extends Component{
        constructor(props){
            super(props)
        }
        componentDidMount(){

        }
        render(){
            return <comp></comp>
        }
    }
}
heightComponent(Tv)


const myH1=
<div>
{/*直接以组件标签形式使用 */}
{/* <Hello name={user.name} age={user.age}></Hello> */}
{/* 使用扩展运算符传值 */}
<Hello1 {...user}></Hello1>
<Movie {...user}></Movie>
<Tv {...user}></Tv>
</div>


// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myH1,document.getElementById('app'))