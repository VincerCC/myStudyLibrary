// react生命周期
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示



// 生命周期的三个状态
// 1.挂载，mounting
// 2.更新，updating
// 3.卸载，Unmount
// componentWillMount组件将要渲染
// componentDidMount组件完成渲染
class Parent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      msg:'默认',
      isDel:false//child是否被删除，true被删除
    }

  }
  render(){
    let ele = null
    if(!this.state.isDel){
      ele = <Children msg={this.state.msg}/>
    }else{
      ele = <h3>移除了</h3>
    }
    return (
    <div>
      <h1>{this.state.msg}</h1>
      <button onClick={()=>{this.update()}}>更新页面</button>
      <button onClick={()=>{this.del()}}>移除child组件</button>
      {ele}
    </div>
    )
  }
  update(){
    this.setState({
      msg:"更新"
    })
  }
  del(){
    this.setState({
      isDel:true
    })
  }
  componentWillMount(){
    // 组件将要渲染
    console.log('componentWillMount组件将要渲染')
  }
  componentDidMount(){
    // 组件渲染完毕
    console.log('componentDidMount组件渲染完毕')
  }
  componentDidUpdate(){
    // 组件更新完毕
    console.log('componentDidUpdate组件更新完毕')
  }
  componentWillUpdate(){
    // 组件将要更新
    console.log('componentWillUpdate组件将要更新')
  }
  componentWillReceiveProps(){
    // 组件将要接收props
    console.log('componentWillReceiveProps组件将要接收props')
  }
  shouldComponentUpdate(){
    // 能够阻止组件更新，return true(允许更新)false(不允许更新)
    // 当我的child组件被删除后，不允许组件更新
    return !this.state.isDel
  }

}
class Children extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <h2>{this.props.msg}</h2>
  }
  componentWillReceiveProps(){
    // 组件将要接收props
    console.log('componentWillReceiveProps组件将要接收props')
  }
  componentWillUnmount(){
    // 组件将要移除
    console.log('componentWillUnmount组件将要移除')
  }
}
const myComponent = <div><Parent /></div>
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myComponent,document.getElementById('app'))