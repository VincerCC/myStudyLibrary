// react输入框获取值的方法
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示


// 1.在input中使用ref，然后在点击事件中，使用this.refs.xxx.value获取输入框的值
// 2.在onChange中，传入元素对象，方法中使用e.target.value获取

class Input extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:''
    }

  }
  render(){
    return (
    <div>
      <input ref="myInput" value={this.state.value} onChange={(e)=>this.valueChange(e)} onKeyDown={(e) => this.keyDown(e)}></input>
      <h1>{this.state.value}</h1>
      <button onClick={()=>{this.showValue()}}>显示输入框的值</button>
    </div>
    )
  }
  showValue(){
    this.setState({
      value:this.refs.myInput.value
    })
    console.log(this.refs.myInput.value)

  }
  valueChange(e){
    this.setState({
      value:e.target.value
    })
    console.log(e.target.value)
  }
  keyDown(e){
    if(e.keyCode === 13){
      alert('我敲了回车')
    }
    console.log(e.keyCode)
  }
}
const myComponent = <div><Input /></div>
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myComponent,document.getElementById('app'))