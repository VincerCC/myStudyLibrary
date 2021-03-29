// 父子组件传值
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示





class Parent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isActive:true,
      msg:'父组件默认值'
    }
  }
  render(){
    return <div>
              <button onClick={()=>{this.showChild()}}>控制子元素显示数据</button>
              <h1>{this.state.msg}</h1>
              {/* 父组件向子组件传值（任意类型，包括函数），子组件在props中获取值 */}
              {/* 子组件传递数据到父组件，可以通过父组件传递函数给子组件，子组件去触发这个函数从而传值 */}
              <Child isActive={this.state.isActive} parentFn={this.parentFn}/>
          </div>

  }
  showChild(){
    this.setState({
      isActive:!this.state.isActive
    })
  }
  parentFn = (val) => {
    // 使用箭头函数，修复this指向问题
    console.log(val)
    this.setState({
      msg:val
    })
    console.log('我是父组件')
  }
}

class Child extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    if(this.props.isActive){
      return <div>
        子元素
        <button onClick={()=>{this.changeParent()}}>改变父组件的msg</button>
        </div>
    }else{
      return null
    }

  }
  changeParent(){

    this.props.parentFn('我传递数据给父组件')
  }
}
const myComponent = <div><Parent /></div>
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myComponent,document.getElementById('app'))