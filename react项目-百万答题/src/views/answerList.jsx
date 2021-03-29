import React from 'react';
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示
import style from '../assets/style/style.css'
import store from '../store/store'
// .引入react-redux的方法
import {Provider,connect} from 'react-redux'
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
import { Button,Checkbox } from 'antd-mobile'

const CheckboxItem = Checkbox.CheckboxItem;

// 计数器
class AnswerList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      optionIndex:['a','b','c','d'],
      optionStatus:['optionItem','optionItem','optionItem','optionItem'],
      currentIndex:0,//当前答题下标
      isChoose:false,
      score:0,
      list:[]
    }
  }
  componentWillMount(){
    // 获取题目列表，并且将它放到react-redux中存储
    this.props.getQuestionList().then((res) => {
      console.log(res)
    })
  }

  selectAnswer(e){
    if(this.state.isChoose) return//防重复点击
    let { id, value, index } = e.target.dataset
    // index当前点击选项下标 value点击项的value值，用于与答案比较
    let {optionStatus,currentIndex,score} = this.state
    console.log(id,value)
    let answer = this.props.questionsList[currentIndex].answer
    console.log(answer)
    if( answer === Number(value)){
      // 答对了
      optionStatus[index] = 'optionItem success'
      score+=10
      this.setState({
        optionStatus,
        isChoose:true,
        score
      })
    }else{
      // 答错了，点击项红色，正确答案绿色
      optionStatus[index] = 'optionItem error'
      optionStatus[answer-1] = 'optionItem success'
      this.setState({
        optionStatus,
        isChoose:true
      })
    }
    setTimeout(()=>{
      if( this.state.currentIndex === this.props.questionsList.length -1 ) {
        console.log(this.props.history)
        this.props.history.push('/result',{score:this.state.score})
        return
      }
      this.setState({
        currentIndex:this.state.currentIndex+1,
        isChoose:false,
        optionStatus:['optionItem','optionItem','optionItem','optionItem']
      })
    },1000)
  }
  render(){
    console.log(this.props)
    let questionsList = this.props.questionsList
    let optionStatus = this.state.optionStatus
    return (
      <div className="box">
        {
          questionsList.map((item,index) => {
            return (
              <div key={item._id} className={`box ${this.state.currentIndex === index ? '' : 'hidden'}`}>
                <h1 className="question">题目{index+1}：{item.quiz}</h1>
                <div className="optionList">
                  {
                    item.options.map((optionItem,index) => {
                      return (
                        <div
                          className={optionStatus[index]}
                          key={index}
                          data-index={index}
                          data-value={optionItem.value}
                          data-id={item._id}
                          onClick={(e)=>this.selectAnswer(e)
                        }>
                            {this.state.optionIndex[index]}：{optionItem.label}
                        </div>
                      )
                    })
                  }
                </div>

              </div>
            )
          })
        }
      </div>
    )
  }
}

// 将state的数据映射到props函数中
function mapStateToProps(state){
  return {...state}
}
// 将修改state的方法映射到props中
function mapDispatchToProps(dispatch){
  return {
    onAddClick:()=>{dispatch({type:'add'})},
    getQuestionList:async ()=>{
      let result = await store.asyncMethods.getRandomQuestions()
      dispatch({
        type:'setQuestionList',
        result
      })
      return result
    },
    setQuestionList:(result)=>{
      console.log(result)
      dispatch({
        type:'setQuestionList',
        result
      })
    }
  }
}
// 将上边两个方法，将数据仓库的state和修改state的方法映射到组件上，对App进行调用，传入组件，形成新组件形成新的组件
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerList)

export default App


