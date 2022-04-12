import React from 'react'
import Home from './page/home/index.jsx'
import defaultRoute from './page/defaultRoute/index.jsx'
import PersonCenter from './page/personCenter/index.jsx'
import { Route, Link, Redirect } from 'react-router-dom';
export default class App extends React.Component{

  render(){
    return (
      <div>
          {/* 指定路由入口 */}
          <Link to="/home">路由基础</Link>
          <Link to="/personCenter">个人中心</Link>
          <div>
            <Route path="/" component={defaultRoute} exact></Route>
            <Route path="/home" component={Home} exact></Route>
            <Route path="/personCenter" component={PersonCenter}></Route>
            <Redirect to="/"></Redirect>
          </div>
      </div>
    )
  }
}
