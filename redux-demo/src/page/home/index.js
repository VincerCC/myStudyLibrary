import React from 'react';
// 导入store
import store from '../../store/index';
// 导入action
// import {sendAction} from '../../store/actions/index';
export default class Home extends React.Component{
  constructor(props){
    super(props)
    console.log(store.getState())
    this.state = {
      ...store.getState(),
      msg: 'myStore'
    }



  }
  componentDidMount(){
    // 订阅 state 改变
    store.subscribe(()=>{
      // state改变后，重新设置 state的值
      this.setState(store.getState())
    })
  }
  handleClick = () => {
    console.log('handleClick')
    // 通知reducer去新增数据，reducer内部会继续通知actions执行addList方法
    store.dispatch({
      type: 'addList'
    })
  }
  handleChange = (e) => {
    // 通知reducer去改变数据，reducer内部会继续通知actions执行changeValue方法去改变state
    store.dispatch({
      type: 'changeValue',
      myValue: e.target.value
    })
    console.log(e.target.value,'e')

  }
  render(){
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <input placeholder="请输入后提交" value={this.state.myValue} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>点我提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }

        </ul>
      </div>
    )
  }
};