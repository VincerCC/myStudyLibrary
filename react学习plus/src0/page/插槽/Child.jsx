
import React from 'react'//创建组件，虚拟Dom元素，生命周期

export default class Child extends React.Component{
  constructor(props){
    super(props)
    console.log(props.children,'props.children')
    // 拿到父组件传递的子节点
  }
  render(){
    const { children } = this.props

    let headerSlot = null
    let footerSlot = null

    // 通过 children 中props传递的 slot属性，去决定渲染什么
    if(children.length > 1){
      headerSlot = children.filter((item) => item.props.slot === 'header' )
      footerSlot = children.filter((item) => item.props.slot === 'footer' )
    }else{
      // 当只传了一个子节点，看slot属性决定渲染到哪里
      headerSlot = children.props.slot === 'header' &&  children
      footerSlot = children.props.slot === 'footer' &&  children
    }


    return (
    <div>
      <h1 className="header">
        {headerSlot}
      </h1>
      <h3>child</h3>
      <h1 className="footer">
        {footerSlot}
      </h1>
    </div>)
  }
}