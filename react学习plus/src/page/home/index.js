import React from 'react';
// 导入action
import store from '../../store/index'
import actions from '../../store/actions/index';
export default class Home extends React.Component{
  constructor(props){
    super(props)
    console.log(store.getState())
    this.state = {
      ...store.getState(),
      msg: 'myStore'
    }
    this.myInput = null
  }
  componentDidMount(){
    // 订阅 state 改变
    store.subscribe(()=>{
      // state改变后，重新设置 state的值
      this.setState(store.getState())
    })
  }
  add = () => {
    store.dispatch(actions.addAction(Number(this.myInput.value)))
  }
  sub = () => {
    store.dispatch(actions.subAction(Number(this.myInput.value)))
  }
  asyncSub = () => {
    store.dispatch(actions.asyncSubAction(Number(this.myInput.value), 5000))
  }
  render(){
    return (
      <div>
        <input defaultValue={1} placeholder='输入步长' ref={(e) => this.myInput=e}/>
        <hr />
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.asyncSub}>异步 5s 后+</button>
        <h1> 当前值为：{this.state.count}</h1>
      </div>
    )
  }
};