import React from 'react';
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示
// .引入react-redux的方法
import {Provider,connect} from 'react-redux'

import getRandomQuestions from '../assets/js/getRandomQuestions'
import style from '../assets/style/style.css'
//非按需加载css
// 引入ant的js文件
// import { Button } from 'antd-mobile';
// 引入ant样式
// import 'antd-mobile/dist/antd-mobile.css'

// 按需引入方法一
// import DatePicker from 'antd-mobile/lib/date-picker';  // 加载 JS
// import 'antd-mobile/lib/date-picker/style/css';        // 加载 CSS

// 按需引入方法二
// 1.安装插件 cnpm install babel-plugin-import --save
/* 2.运行 git add . -> git commit -am "Save before ejecting" -> npm run eject获取所有配置
在package.json中配置插件，"babel": {
                            "plugins": [
                              ["import", { "libraryName": "antd-mobile", "style": "css" }]
                            ]
                          }
*/
// 3.按需导入组件，import { Button } from 'antd-mobile';
import { Button } from 'antd-mobile'



// 计数器
class Counter extends React.Component{
  constructor(props){
    console.log(props,'props')
    super(props)
    this.state = {
      questionList:[]
    }
  }
  async componentDidMount(){
    let questionList = await getRandomQuestions()
    this.setState({
      questionList
    })
  }
  render(){
    // 通过store的state传给props，直接通过props就可以将state的数据获取
    const value = this.props.value
    // 将修改数据的事件或者方法传递到props
    const onAddClick = this.props.onAddClick
    const onSubtractClick = this.props.onSubtractClick
    return (
      <div>
        <div>计数器，总计
          <h1>{value}</h1>
        </div>
        <Button type="primary" size="small" className="myButton" onClick={()=>onAddClick()}>+1</Button>
        <Button type="primary" size="small" className="myButton" onClick={()=>onSubtractClick()}>-1</Button>
      </div>
    )
  }
}
// 将state的数据映射到props函数中
function mapStateToProps(state, ownProps){
  console.log(state,'state')
  console.log(ownProps,'ownProps')
  return {
    value:state.num
  }
}
// 将修改state的方法映射到props中
function mapDispatchToProps(dispatch){
  return {
    onAddClick:()=>{dispatch({type:'add'})},
    onSubtractClick:()=>{dispatch({type:'subtract'})}
  }
}
// 将上边两个方法，将数据仓库的state和修改state的方法映射到组件上，对App进行调用，传入组件，形成新组件形成新的组件
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App

