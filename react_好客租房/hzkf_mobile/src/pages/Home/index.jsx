
import React from 'react';
import './index.css'
import { Route } from 'react-router-dom';
import { TabBar } from 'antd-mobile';

import HomeIndex from './HomeIndex/index'
import FindHouse from './FindHouse/index'
import Info from './Info/index'
import MineCenter from './MineCenter/index'
class Home extends React.Component{
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      selectedTab: props.location.pathname, // 默认选中tab
      hidden: false, // 是否隐藏tabBar
    };
    this.handleClickBarItem = this.handleClickBarItem.bind(this)
  }
  componentDidUpdate(prevProps){
    // 路由地址切换时候，触发高亮方法
    // 通过props比较前后路由是否改变，改变才触发高亮
    if(prevProps.location.pathname !== this.props.location.pathname) {

      console.log(prevProps.location.pathname,'来源路由')
      console.log(this.props.location.pathname,'目标路由')
      this.setState({
        selectedTab: this.props.location.pathname // 默认选中tab
      })
    }
  }
  handleClickBarItem = (path) => {
    console.log(this)
    this.setState({
      selectedTab: path
    })
    this.props.history.push(path)
  }
  renderTabBarItem() {
    const ROUTER_LIST = [
      {
        title: '首页',
        key: 'home',
        path: '/home',
        iconClassName: 'icon-ind'
      },
      {
        title: '找房',
        key: 'findHouse',
        path: '/home/findHouse',
        iconClassName: 'icon-findHouse'},
      {
        title: '咨询',
        key: 'info',
        path: '/home/info',
        iconClassName: 'icon-infom'},
      {
        title: '我的',
        key: 'mineCenter',
        path: '/home/mineCenter',
        iconClassName: 'icon-my'}
    ]
    return (
      <TabBar
        tintColor="#21b97a"
        barTintColor="white"
        hidden={this.state.hidden}
        noRenderContent={true} // 不渲染内容区域
      >
        {
          ROUTER_LIST.map((routerItem) => {
            return (

                <TabBar.Item
                  title={routerItem.title}
                  key={routerItem.key}
                  icon={<i className={`iconfont ${routerItem.iconClassName}`}></i>}
                  selectedIcon={<i className={`iconfont ${routerItem.iconClassName}`}></i>}
                  selected={this.state.selectedTab === routerItem.path}
                  onPress={() => this.handleClickBarItem(routerItem.path)}
                  data-seed="logId"
                >
                </TabBar.Item>
            )
          })
        }
      </TabBar>
    )
  }
  render() {


    return (
      <div className="pageWrap">
        {/* 渲染子路由 */}


        <Route path="/home" component={ HomeIndex } exact></Route>
        <Route path="/home/findHouse" component={ FindHouse }></Route>
        <Route path="/home/info" component={ Info }></Route>
        <Route path="/home/mineCenter" component={ MineCenter }></Route>
        {this.renderTabBarItem()}
      </div>
    );
  }
}
export default Home