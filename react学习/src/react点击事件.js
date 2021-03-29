// react点击事件
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示



// 1.点击事件使用驼峰命名法，onClick
// 2.在点击事件中传递事件对象，直接在点击事件中传递
// 3.组织事件默认行为，使用e.preventDefault()

class Event extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }

    this.event2 = this.event2.bind(this)
    this.event5 = this.event5.bind(this)
  }
  render(){
    return <div>
              <button onClick={()=>this.event1()}>直接箭头函数绑定默认绑定this</button>
              <button onClick={this.event2}>在constructor中绑定this</button>
              <button onClick={this.event3}>在具体函数中使用箭头函数绑定this</button>
              <button data-type='传递点击对象1' onClick={(e)=>this.event4(e,'参数一')}>传递点击对象1</button>
              <button data-type='传递点击对象2' onClick={this.event5}>传递点击对象2</button>
              <button data-type='传递点击对象3' onClick={this.event6}>传递点击对象3</button>
              <form action="http://www.baidu.com">
                <button  onClick={(e)=>this.formBtn(e)}>组织表单默认行为</button>
              </form>
          </div>

  }
  event1(){
    console.log('我是event1')
  }
  event2(){
    console.log('我是event2')
  }
  event3 = () => {
    console.log('我是event3')
  }
  event4(e,msg){
    console.log(e,e.target.dataset.type,msg)
  }
  event5(e){
    console.log(e,e.target.dataset.type)
  }
  event6=(e)=>{
    console.log(e,e.target.dataset.type)
  }
  formBtn(e){
    console.log('我不会跳转到百度')
    e.preventDefault()
  }
}

const myComponent = <div><Event /></div>
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(myComponent,document.getElementById('app'))