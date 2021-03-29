// react路由标签设置跳转
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示



// 1.安装react-router-dom
// 2.导入
/* 3.使用
<Router>
  <Link to="/">Home</Link>
  <Route path="/" exact component={Home}></Route>
</Router>设置路由跳转
*/
// 4.link标签的to属性可以直接写字符串路径，也可以传入一个对象设置路由，
/*
  let mePath = {
    pathname:'/me',
    search:'?userName=admin'
  }
*/
// 5.动态路由：<Link  to="/setting/888">设置</Link> ,<Route path="/setting/:id" component={Setting}></Route>
//5.在目标路由组件的props中能够获取到一些路由传递的参数信息

// 6.获取路由参数 在 props.match.params 中获取,
// 7.往组件传数据使用state对象 state:{msg:'helloWord'}，组件在location.state中获取数据

// 8.重定向组件 导入 import {BrowserRouter as Router,Link,Route , Redirect} from 'react-router-dom'

// hash模式
// import {HashRouter as Router,Link,Route} from 'react-router-dom'
// History模式
import {BrowserRouter as Router,Link,Route , Redirect} from 'react-router-dom'

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h1>首页</h1>
      </div>
    )
  }
}
class Me extends React.Component{
  constructor(props){
    console.log(props)
    super(props)
  }
  render(){
    return (
      <div>
        <h1>个人中心</h1>
      </div>
    )
  }
}
class Setting extends React.Component{
  constructor(props){
    console.log(props.match.params)
    super(props)
  }
  render(){
    return (
      <div>
        <h1>设置：路由参数{this.props.match.params.id}</h1>
      </div>
    )
  }
}
class MyRedirect extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div>
          <h1>重定向组件</h1>
          <Redirect to="/home"></Redirect>
        </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    // 使用变量的link
    let mePath = {
      pathname:'/me',//跳转的路径
      search:'?userName=admin',
      state:{msg:'helloWord'}//传入组件的数据
    }
    return (
      <div id="app">
        <h1>主页</h1>
        <Router>
          <div>
            <Link to="/home">Home</Link>
            <Link  to={mePath}>个人中心</Link>
            <Link  to="/setting/888">设置</Link>
            <Link  to="/redirect">重定向到home</Link>
          </div>
          {/* exact精确匹配 */}
          <Route path="/home" exact component={Home}></Route>
          <Route path="/me" exact component={Me}></Route>
          <Route path="/setting/:id" exact component={Setting}></Route>
          <Route path="/redirect" exact component={MyRedirect}></Route>
        </Router>
      </div>
    )
  }
}
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(<App />,document.getElementById('app'))