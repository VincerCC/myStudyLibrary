import React from 'react'
import Son from './son'
// 创建context得到两个组件
export const { Provider, Consumer } = React.createContext()
// Provider 用来 提供数据
// Consumer 用来 消费数据
export default class ContextParent extends React.Component{
  constructor(){
    super()
    this.state = {
      sonColor: 'blue',
      grandSonColor: 'red'
    }
  }
  render(){
    return (
      // 步骤1：先使用Provider包裹根组件
      // 步骤2：设置value，表示要传递的数据
    <Provider value={this.state}>

      <h1>Context组件通信</h1>
      <div>
        parent-{JSON.stringify(this.state)}
        <Son></Son>
      </div>
    </Provider>)
    // 在需要使用数据的地方使用 Consumer标签包裹，里边写个回调渲染内容
  }
}
