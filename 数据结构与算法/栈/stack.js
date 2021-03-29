/*
 * @Author: your name
 * @Date: 2020-11-06 10:10:25
 * @LastEditTime: 2020-11-06 14:02:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \我的前端知识库\数据结构与算法\栈\stack.js
 */
/*
栈结构常见操作
push(element):添加一个新元素到栈顶位置。
pop():添加栈顶元素。
peek():返回栈顶元素，不对栈做修改。
isEmpty():如果栈里没有任何元素就返回true。
size():返回栈里的元素个数。
toString():将栈结构内容以（栈底->栈顶）字符形式返回。
reverseToString():将栈结构内容以（栈顶->栈底）字符形式返回。
*/
class Stack {
  constructor(){
    this.stackList = []
  }
  push(ele){
    this.stackList.push(ele)
  }
  pop(){
    return this.stackList.pop()
  }
  peek(){
    if(this.stackList.length === 0) return null
    return this.stackList[this.stackList.length - 1]
  }
  isEmpty(){
    return this.stackList.length === 0
  }
  size(){
    return this.stackList.length
  }
  toString(){
    return this.stackList.join('')
  }
  reverseToString(){
    return this.stackList.reverse().join('')
  }
}
