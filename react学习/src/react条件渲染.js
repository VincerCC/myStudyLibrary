// react条件渲染
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示



function IsLogin (){
  return (<div>已经登录</div>)
}
function UnLogin (){
  return (<div>请登录</div>)
}
class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLogin:true
    }


  }
  render(){
    let element = null
    if(this.state.isLogin){
      element = <IsLogin></IsLogin>
    }else{
      element = <UnLogin></UnLogin>
    }
    return (
    <div>
      <h1>我是头部</h1>
      {element}
    </div>
    )
  }
}

const myComponent = <div><Login /></div>
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myComponent,document.getElementById('app'))