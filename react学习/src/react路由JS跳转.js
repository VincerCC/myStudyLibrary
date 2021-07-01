// react路由JS跳转
import React from 'react'//创建组件，虚拟Dom元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示



// 1.安装react-router-dom
// 2.导入
// 3.使用 this.props.history.push('/home')
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
  toHome(){
    console.log(this.props)
    this.props.history.push('/home')
  }
  render(){
    return (
      <div>
        <h1>个人中心</h1>
        <button onClick={()=>this.toHome()}>跳转去Home</button>
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
            <Link  to={mePath}>个人中心</Link>
            <Link to="/home">Home</Link>
          </div>
          {/* exact精确匹配 */}
          <Route path="/home" exact component={Home}></Route>
          <Route path="/me" exact component={Me}></Route>
        </Router>
      </div>
    )
  }
}
// 渲染到页面
// 参数一：要渲染的虚拟dom元素
// 参数二:指定要渲染到的容器
ReactDOM.render(<App />,document.getElementById('app'))