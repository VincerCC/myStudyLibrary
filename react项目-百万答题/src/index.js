import React from 'react';

import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示
// 导入路由
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
// 引入store
import store from './store/store'
// 引入app
import Counter from './views/counter.jsx'
import Home from './views/home.jsx'
import AnswerList from './views/answerList.jsx'
import Result from './views/result.jsx'
import {Provider,connect} from 'react-redux'

// Provider用于在state被修改及时更新页面
const myDom = (
  <Provider store={store.myStore}>
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/answerList" component={AnswerList}></Route>
      <Route path="/counter" component={Counter}></Route>
      <Route path="/result" component={Result}></Route>
    </Router>
  </Provider>
  )
ReactDOM.render(myDom,document.getElementById('root'))
