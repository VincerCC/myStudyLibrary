
import React from 'react';
import { Carousel, Flex, Grid } from 'antd-mobile';
import pc1 from '../../../image/1.jpg'
import pc2 from '../../../image/2.jpg'
import pc3 from '../../../image/3.jpg'

import './index.css'
class HomeIndex extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 212,
      menu: [
        {
          name: '整租',
          icon: 'icon-coll',
          path: '/home/findHouse'
        },
        {
          name: '合租',
          icon: 'icon-sofa',
          path: '/home/findHouse'
        },        {
          name: '地图找房',
          icon: 'icon-air',
          path: '/map'
        },        {
          name: '城市列表',
          icon: 'icon-vid',
          path: '/cityList'
        }
      ]
    }
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [pc1, pc2, pc3],
      });
    }, 100);
    navigator.geolocation.getCurrentPosition((position) => {

      console.log(position)
    })
    const city = new window.BMap.LocalCity()
    console.log(city)
  }
  renderImage(){
    return this.state.data.map(item => (
      <img
        key={item}
        src={item}
        alt=""
        style={{ width: '100%', height: this.state.imgHeight, verticalAlign: 'top' }}
      />
    ))
  }
  goMenuItem(path){
    console.log(this)
    console.log(path)
    this.props.history.push(path)
  }
  renderMenu(){
    return this.state.menu.map((item) => {
      return (
        <Flex.Item key={item.name} onClick={() => this.goMenuItem(item.path)}>
          <div className="menuItem">
            <i className={`iconfont ${item.icon}`}></i>
            <div className="menuName">{item.name}</div>
          </div>
        </Flex.Item>
      )
    })
  }
  render() {
    const data = Array.from(new Array(4)).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`,
    }));

    return (
      <div>
        {/* 轮播图 */}
        <Carousel autoplay={true} infinite>
          {this.renderImage()}
        </Carousel>
        {/* 菜单 */}
        <Flex justify="center" align="center" className="flex_wrap">
          {this.renderMenu()}
        </Flex>
        {/* 租房小组 */}
        <div className="group">
          <div className="title">
            租房小组
            <span className="more">更多</span>
          </div>
          <Grid data={data} activeStyle={true} hasLine={false} columnNum={2}/>
        </div>


      </div>
    );
  }
}
export default HomeIndex