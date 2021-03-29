// react列表渲染
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示




class List extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list:[
        {name:'张三',age:18},
        {name:'李四',age:19},
        {name:'王五',age:20}
      ]
    }


  }
  render(){
    return (
    <div>
      {this.state.list.map((item,index)=>{
        return <h1 key={index}>name:{item.name}---age:{item.age}  </h1>
      })}
    </div>
    )
  }
}

const myComponent = <div><List /></div>
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myComponent,document.getElementById('app'))