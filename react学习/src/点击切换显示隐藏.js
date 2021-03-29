// main.js
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示


import style from './css/style.css'
// 两种方式的区别
// 使用function创建的组件，只有props，没有自己的私有数据和生命周期函数
// 使用class创建的组件，有自己的私有数据和生命周期函数




class Active extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      clickIndex:'1'
    }
  }

  clickBtn(e){
    console.log('999',e.target.dataset.index)
    // this.refs.child.myAlert()
    this.setState({
      clickIndex:e.target.dataset.index
    })
  }
  render(){
    return <div>
              <button data-index='1' onClick = {(e)=>{ this.clickBtn(e) }}>内容一</button>
              <button data-index='2' onClick = {(e)=>{ this.clickBtn(e) }}>内容二</button>
              <div className={`content1 ${this.state.clickIndex === '1' ? 'active' : ''}`}>内容一</div>
              <div className={`content1 ${this.state.clickIndex === '2' ? 'active' : ''}`}>内容二</div>
          </div>
  }

}
const myActive = <div>
  <Active></Active>
</div>
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myActive,document.getElementById('app'))