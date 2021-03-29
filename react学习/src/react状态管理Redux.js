// react状态管理 React.redux
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示



// 1.安装 cnpm install redux --save
// 2.引入
import Redux from 'redux'

// 3.自定义一个reducer函数，第一个参数是初始值，第二个参数是动作，返回新的state
const myReducer = function (
  state={
    num:0
  },
  action
  ) {
  console.log(action)
  switch( action.type ){
    case 'add':
      // 步长为dispatch传递进来
      state.num+=action.step;
      break;
    case 'subtract':
      state.num--;
      break;
  }
  return {...state}
}
// 4.创建仓库 creatStore
import {createStore} from 'redux'
const store = createStore(myReducer)
// Store 数据仓库，用于保存仓库
// State 数据对象，Store中所有的数据都存储在State中
// Action 动作，用于触发State数据改变
// Store.dispatch 用于触发action动作
// reducer 是一个函数，用于触发动作后，去改变数据生成新state

// 5.获取数据store.getState().xxx
// 6.修改数据store.dispatch({type:'add',step:2,'我可以随便传':'真的耶'})，去触发myReducer中的动作
// 7.回显数据 ，监听state的改变，重新渲染页面
//  store.subscribe(()=>{
//   ReactDOM.render(<Counter />,document.getElementById('app'))
//  })


// 计数器
class Counter extends React.Component{
  constructor(props){
    super(props)
    console.log(store)
    this.state={
      count:0
    }
  }

  add(){
    // 通过store仓库dispatch进行修改数据
    // 可以传递参数进去，例如下边我传递步长进去，在myReducer的add就会+2
    store.dispatch({type:'add',step:2,'我可以随便传':'真的耶'})
    // 这里数据变化了，但是页面没变化，此时需要使用subscribe监听
    console.log(store.getState())
  }
  subtract(){
    store.dispatch({type:'subtract'})
  }
  render(){
    return (
      <div>
        <div>计数器，总计
          <h1>{store.getState().num}</h1>
        </div>
        <button onClick={()=>this.add()}>+1</button>
        <button onClick={()=>this.subtract()}>-1</button>
      </div>
    )
  }
}

// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(<Counter />,document.getElementById('app'))
store.subscribe(()=>{
  // 监听state的改变，重新渲染页面
  ReactDOM.render(<Counter />,document.getElementById('app'))
})