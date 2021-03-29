// main.js
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示


const user={
    name:'liu',
    age:24
}
// 创建组件
// 第一种方式
function Hello(props){
    // 无论是vue还是react，组件的props都是只读的
    console.log(props)
    // return null//表示这个组件是空的，什么到不显示
    // 组件必须返回合法的虚拟DOM元素
    return <h1>你好，{props.name},我是Hello组件,我{props.age}岁了</h1>
}
const myH1=<div>
{/*直接以组件标签形式使用 */}
{/* <Hello name={user.name} age={user.age}></Hello> */}
{/* 使用扩展运算符传值 */}
<Hello {...user}></Hello>
</div>
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myH1,document.getElementById('app'))