import React from 'react'
import './index.css'

import './index.css'
import { NavBar, Icon } from 'antd-mobile';
export default class Map extends React.Component{
  constructor(){
    super()
    this.state={
    }
  }
  onLeftClick(){
    this.props.history.goBack()
  }
  renderNavBar(){
    return (
      <NavBar
        className="cityNavBar"
        mode="light"
        icon={<Icon type="left" color="black"/>}
        onLeftClick={ this.onLeftClick }
      >地图</NavBar>
    )
  }
  componentDidMount(){
    // 创建地图实例
    // 注意：在react脚手架中全局对象需要使用window来访问，否则会造成eslint校验报错
    const Map = new window.BMap.Map("container")

    // 设置中心点坐标
    const centerPoint = new window.BMap.Point(116.404, 39.915)

    // 初始化地图
    Map.centerAndZoom(centerPoint, 15)
  }
  render(){
    return (
      <div className="map">

        { this.renderNavBar() }
        <div id="container"></div>
      </div>
    )
  }
}
