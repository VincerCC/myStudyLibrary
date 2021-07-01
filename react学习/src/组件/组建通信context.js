import React, { Component } from 'react'
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示
const ThemeContext = React.createContext()
/**
 * context react中的provider和consumer 跟 vue的provide和inject类似
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
    console.log(this.context)
  }
  static contextType = ThemeContext // context上下午挂载到当前实例的静态属性中
  // this.context拿到上级传递过来的数据
  render(){
    return <div>type:{this.state.msg}</div>
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
