/*
 * @Author: your name
 * @Date: 2020-11-06 10:10:25
 * @LastEditTime: 2020-11-06 13:43:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \我的前端知识库\数据结构与算法\栈\queue.js
 */
/*
队列结构常见操作
endQueue(element):向队列尾部添加一个新的项。
delQueue():移除队列的第一项，并返回被移除的元素。
front():返回队列中第一个元素（最先被添加的），不改变队列。
isEmpty():如果队列里没有任何元素就返回true。
size():返回队列里的元素个数。
toString():将队列内容以（栈底->栈顶）字符形式返回。
*/
class Queue {
  constructor(){
    this.queueList = []
  }
  endQueue(ele){
    this.queueList.push(ele)
  }
  delQueue(){
    return this.queueList.shift()
  }
  front(){
    if(this.queueList.length === 0) return null
    return this.queueList[0]
  }
  isEmpty(){
    return this.queueList.length === 0
  }
  size(){
    return this.queueList.length
  }
  toString(){
    return this.queueList.join('')
  }
}
