import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';
// 导入字体图标库
import './assets/fonts/iconfont.css'
/**
 * 1、 安装antd-mobile，npm install antd-mobile --save
 * 2、 使用组件，import { Button } from 'antd-mobile';
 * 3、 导入样式 import 'antd-mobile/dist/antd-mobile.css';
 */
// import { Button } from 'antd-mobile';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Map from './pages/Map/index.jsx';
import CityList from './pages/CityList/index.jsx';
ReactDOM.render(
  <Router>
    <React.StrictMode>

      {/* 访问根路径 / 重定向到 /home */}
      <Route
          path="/"
          exact
          render={() => <Redirect to="/home" />}
      ></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/map" component={Map}></Route>
      <Route path="/cityList" component={CityList}></Route>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

