
import React from 'react';
import '../CityList/index.css'
import { NavBar, Icon } from 'antd-mobile';
class CityList extends React.Component{
  constructor(props) {
    super(props)
    this.onLeftClick = this.onLeftClick.bind(this)
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
      >城市列表</NavBar>
    )
  }
  renderList(){
    let list = Array(1000).fill(Date.now())
    list.unshift(9)
    console.log(list)
    return (
      <ul>
        {
          list.map((item,index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    )
  }
  render() {
    return (
      <div className="listWrap">
        { this.renderNavBar() }
        { this.renderList() }
      </div>
    )
  }
}
export default CityList