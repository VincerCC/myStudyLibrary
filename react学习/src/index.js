import React, { Component } from 'react'
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示
const ThemeContext = React.createContext()
/**
 * context react中的provider和consumer 跟 vue的provide和inject类似
 * 组件不管嵌套多深，我都能拿到共享数据
 */
function Comp1 () {
  return <Comp2></Comp2>
}
class Comp2 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      msg: 66
    }
    console.log(this)
  }
  // 第一种渲染方式
  // 首先定制当前创建的上下文对象为当前实例的静态属性
  // 在渲染的方法中使用this.context获取共享数据
  // static contextType = ThemeContext // context上下文挂载到当前实例的静态属性中,必须这么做，否则this中的context拿不到任何值
  // render(){
  //   return (
  //     <div>
  //       type:{this.context.type}
  //       <div>name:{this.context.name}</div>
  //     </div>
  //   )
  // }

  // 第二种渲染方式（推荐）
  render(){
    return (
      <ThemeContext.Consumer>
        {
          (value) => {
            return (
              <div>
                type:{value.type}
                <div>name:{value.name}</div>
              </div>
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }
}
export default class MyContext extends React.Component{
  constructor(props){
    super(props)
    this.state={
      theme: {
        type: 'primary',
        name: '按钮'
      }
    }
  }
  render(){
    return (
      // 向后代传递theme数据
    <ThemeContext.Provider value={this.state.theme}>
      <Comp1></Comp1>
    </ThemeContext.Provider>
    )
  }
}

// state被修改及时更新页面
let myDom = <MyContext></MyContext>
ReactDOM.render(myDom,document.getElementById('app'))
