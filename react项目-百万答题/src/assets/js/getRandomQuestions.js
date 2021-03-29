/*
 * @Author: your name
 * @Date: 2020-09-18 15:29:49
 * @LastEditTime: 2020-09-22 16:18:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactuiapp\src\assest\getRandomQuestions.js
 */
// 模拟ajax异步请求，获取随机十道题目
import questionsList from '../json/quizzesinseret.json'
function getRandomQuestions(){
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      let random = Math.floor(Math.random()*questionsList.length)
      let randomQuestionList = questionsList.slice(random,random+10)

      randomQuestionList.forEach((questionItem,questionIndex) => {
        // console.log(questionItem.options=1)
        questionItem.options = questionItem.options.map((optionsItem,optionsIndex) => {
          return {
            value:optionsIndex+1,
            label:optionsItem
          }
        })
      })
      console.table(randomQuestionList)
      resolve(randomQuestionList)
    },500)
  })
}
export default getRandomQuestions