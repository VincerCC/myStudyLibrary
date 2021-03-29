/*
 * @Author: your name
 * @Date: 2020-11-06 16:18:24
 * @LastEditTime: 2020-11-06 18:52:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \我的前端知识库\数据结构与算法\链表\linkList.js
 */

/*
append(element),向链表后边追加项
insert(element,position),插入到链表中
getPosition(position),获取对应位置的元素

 */
class Node {
  constructor(element){
    this.element = element
    this.next = null
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(element){
    //根据element创建Node
    let node = new Node(element)
    // 追加
    if( !this.head ){
      this.head = node
    }else {
      // 设置一个指针，指向第一个节点
      let current = this.head
      // 当指针的next有值时，指针往后移
      while(current.next){
        current = current.next

      }
      // 直到指针所指的next没有值，连接到节点
      current.next = node
    }

    this.length++
  }
  insert(element,position){
    //根据element创建Node
    let node = new Node(element)
    if(position < 0 || position > this.length) return false

    if( position === 0 ){
      // 如果插入位置是第0个位置
      // 只需要将node.next指向当前head指向的项
      // 然后将head指向node
      node.next = this.head
      this.head = node
    }else {
      // 如果插入的位置为其他
      // 设置循环下标
      let index = 0

      // 当前位置指针
      let current = this.head

      // 获取当前元素的前一个元素
      let pre = null

      // 当前下标 小于 position，下标自加，将current项赋值给pre标记为上一个，将current项的next赋值给 current
      // 这一步相当于移动指针
      while(index < position){
        index++
        pre = current
        current = current.next
      }
      //代表current指针已经指向我的position位置了
      // 将上一个节点的next指向node节点
      pre.next = node
      // 将node节点的next指向我当前指向的节点
      node.next = current
    }
    this.length++
  }
  getPosition(position){
    if(position < 0 || position > this.length -1) return false
    // 设置循环下标
    let index = 0

    // 当前位置指针
    let current = this.head


    // 当前下标 小于 position，下标自加，将current项赋值给pre标记为上一个，将current项的next赋值给 current
    // 这一步相当于移动指针
    while(index < position){
      index++
      current = current.next
    }
    // 进来这里说明while走完了，此时index = position,current就指向position的元素
    return current.element
  }
  getIndexOf(element){
    let current = this.head
    console.log(current)
    let index = 0
    while(current){
      if(current.element === element){
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
}
