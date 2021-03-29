/*
 * @Author: your name
 * @Date: 2020-09-18 18:01:39
 * @LastEditTime: 2020-09-21 18:44:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactuiapp\src\store\store.js
 */
// 存放数据
// 1.引入creatStore
import {createStore} from 'redux'
// 模拟异步请求
import getRandomQuestions from '../assets/js/getRandomQuestions'
// 2.初始化异步函数
let asyncMethods = {
  async getRandomQuestions(){
    let result = await getRandomQuestions()
    console.log(result)
    return result
  }
}

// 3.初始化state状态
let stateObj = {
  num:0,
  questionsList:[]
}


// 4.初始化动作函数
let actionObj = {
  add:function(state,action){
    state.num++
    return state
  },
  subtract:function(state,action){
    state.num--
    return state
  },
  setQuestionList:function(state,action){
    // action 中会有dispatch中的所有数据dispatch({type:'setQuestionList',result})
    state.questionsList = action.result
    return {...state}
  }
}

// 5.自定义一个reducer函数，第一个参数是初始值，第二个参数是动作，返回新的state
function myReducer(state = stateObj,action) {
  // console.log(action,state.questionsList)
  if(action.type.indexOf('redux')===-1){
    state = actionObj[action.type](state,action)
    return {...state}
  }else{
    return state;
  }
}
// 6.创建仓库
const myStore = createStore(myReducer)
// 7.导出store仓库
export default {myStore, asyncMethods}