// react设置style和class样式.js
import React from 'react'
import ReactDom from 'react-dom'
import myStyle from './css/style.css'
// style 样式start
// 创建样式对象
let exampleStyle = {
  width:'100px',
  height:'100px',
  backgroundColor:'pink'
}
let exampleClass ='myClass'
let styleElement = (
    <div style={exampleStyle}>
    {/*
      <div style={exampleStyle} style={{'borderBottom':'1px'}}>
      后边的style会覆盖前边的style
    */}
      我是styleElement的div
    </div>)
// style 样式end

// class 样式start
let classElement = (
    <div className={myStyle.box}>
    {/*
      <div className={exampleClass} className={xxx}>
      后边的class会覆盖前边的class
      如果要使用多个class，应该改用下边的方式
      <div className={'xxx ' + exampleClass}>
    */}
      我是classElement的div
    </div>)
// class 样式end
// 挂载元素
// ReactDom.render(styleElement,document.getElementById('app'))
ReactDom.render(classElement,document.getElementById('app'))