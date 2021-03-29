// main.js
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示


// 开始创建虚拟dom

let a = 10
let b = '数字'
let flag = false
let title="666"
let style={color:'red'}
const h3=<h3>我是H3</h3>
// 循环的数组需要使用key,需要添加给被循环直接控制的元素
// {strrs.map((item,index)=><h2 key={index}>{item}</h2>)}
// {strrs.map((item,index)=><div key={index}><h2>{item}</h2></div>)}
let arr = [
    <h1>H1</h1>,
    <h2>H2</h2>
]
let strrs=['liu','ying','cong']
// 跟vue的{{}}类似，react使用{}包括JS变量，只要是JS变量就要使用{}
const myH1=
<div>
    布尔值:{flag?a:b}
    <hr/>
    字符串:{b}
    <hr/>
    数字：{a+2}
    <hr/>
    <p title={title}>P标签</p>
    {/* <hr/> */}
    {/* {h3} */}
    {/* <hr/> */}
    {/* {arr} */}
    <hr/>
    {strrs.map((item,index)=><h2 key={index}>{item}</h2>)}
    <hr/>
    <p style={style}>#</p>
</div>
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myH1,document.getElementById('app'))