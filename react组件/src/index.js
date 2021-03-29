import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示




import CmtList from './components/content-list'

const myApp = <div>
  <CmtList />
  </div>

ReactDOM.render(myApp,document.getElementById('root'))