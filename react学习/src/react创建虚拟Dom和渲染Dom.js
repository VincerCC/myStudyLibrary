// main.js
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示


// 开始创建虚拟dom
// <h1 id="myH1"><span style="color:red">*</span>我是大大的H1</h1>
// 参数一：创建的元素类型
// 参数二；对象，用来存放元素的属性
// 参数三：子节点(其他虚拟dom或者文本子节点)
// 参数n:可以放n个子节点
const mySpan=React.createElement('span',{style:{color:'red'}},'*')

const myH=React.createElement('h1',{id:'myH1'},mySpan,'我是大大的H1')
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myH,document.getElementById('app'))