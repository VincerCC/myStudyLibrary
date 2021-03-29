// react状态管理 React.redux
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示



// 1.安装 cnpm install react-redux --save
// 2.引入
import Redux from 'redux'
// 3.引入creatStore
import {createStore} from 'redux'
// 4.引入react-redux的方法
import {Provider,connect} from 'react-redux'

// 4.自定义一个reducer函数，第一个参数是初始值，第二个参数是动作，犯规新的state
const myReducer = function (state={num:0},action) {
  console.log(action)
  let num = !action.num ? action.num = 1 : action.num
  switch( action.type ){
    case 'add':
      state.num+=num;
      break;
    case 'subtract':
      state.num--;
      break;
  }
  return {...state}
}
// 5.创建仓库
const store = createStore(myReducer)



// 计数器
class Counter extends React.Component{
  constructor(props){
    super(props)
    console.log(store)


  }

  render(){
    // 通过store的state传给props，直接通过props就可以将state的数据获取
    const value = this.props.value
    // 将修改数据的事件或者方法传递到props
    const onAddClick = this.props.onAddClick
    const onSubtractClick = this.props.onSubtractClick
    const onAddClick5 = this.props.onAddClick5
    return (
      <div>
        <div>计数器，总计
          <h1>{value}</h1>
        </div>
        <button onClick={()=>onAddClick()}>+1</button>
        <button onClick={()=>onAddClick5()}>+5</button>
        <button onClick={()=>onSubtractClick()}>-1</button>
      </div>
    )
  }
}
// 将state的数据映射到props函数中
function mapStateToProps(state){
  return {
    value:state.num
  }
}
// 将修改state的方法映射到props中
function mapDispatchToProps(dispatch){
  return {
    onAddClick:()=>{dispatch({type:'add'})},
    onAddClick5:()=>{dispatch({type:'add',num:5})},
    onSubtractClick:()=>{dispatch({type:'subtract'})}
  }
}
// 将上边两个方法，将数据仓库的state和修改state的方法映射到组件上，对App进行调用，传入组件，形成新组件形成新的组件
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


// state被修改及时更新页面
let myDom = <Provider store={store}><App /></Provider>
ReactDOM.render(myDom,document.getElementById('app'))
