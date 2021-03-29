// react插槽
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示


// 1.react需要开发者自己开发插槽
// 2.原理：父组件写入的html可以传入到 props  的  children上，供子组件使用
// 3.当只有一个插槽时，children是对象，其他情况下是 数组
// 4.可以使用数组的filter属性，对插槽的

class Parent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:''
    }

  }
  render(){
    return (
    <div>
      <h3>组件插槽</h3>
      <Child>
        <div ref="header">我是头部插槽</div>
        <div ref="footer">我是底部插槽</div>
      </Child>
    </div>
    )
  }

}
class Child extends React.Component{
  constructor(props){
    super(props)
    console.log(props.children)
  }
  render(){
    let headerSlot = null
    let footerSlot = null

    if(this.props.children.length > 1){
      headerSlot = this.props.children.filter((item) => item.ref === 'header' )
      footerSlot = this.props.children.filter((item) => item.ref === 'footer' )
    }else{
      headerSlot = this.props.children.ref === 'header' &&  this.props.children
      footerSlot = this.props.children.ref === 'footer' &&  this.props.children
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
const myComponent = <div><Parent /></div>
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myComponent,document.getElementById('app'))