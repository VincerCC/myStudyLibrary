// react插槽
import React from 'react'//创建组件，虚拟Dom元素，生命周期


// 1.react需要开发者自己开发插槽
// 2.原理：父组件写入的html可以传入到 props  的  children上，供子组件使用
// 3.当只有一个插槽时，children是对象，其他情况下是 数组
// 4.可以使用数组的filter属性，对插槽的选用进行控制
import Child from './Child.jsx'
export default class SlotParent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:''
    }
    this.header = React.createRef();
    this.footer = React.createRef();

  }
  render(){
    return (
    <div>
      <h3>组件插槽</h3>
      <Child>
        <div slot="header">我是头部插槽</div>
        <div slot="footer">我是底部插槽</div>
      </Child>
    </div>
    )
  }

}

