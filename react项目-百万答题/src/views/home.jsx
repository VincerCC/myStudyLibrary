import React from 'react';
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示
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
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  goRandomQuestionPage(){
    // 去到随机答题页面
    console.log(this.props.history)
    this.props.history.push('/answerList')

  }
  onSubtractClick(){
    this.props.history.push('/counter')
  }
  render(){
    return (
      <div>
        <Button type="primary" size="small" className="myButton" onClick={()=>this.goRandomQuestionPage()}>随机答题</Button>
        <Button type="primary" size="small" className="myButton" onClick={()=>this.onSubtractClick()}>计数器</Button>
      </div>
    )
  }
}


export default Home

