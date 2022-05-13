/**
 * 观察者模式：vue2.0响应式原理
 *    观察者模式(Observer pattern)是一种软件设计模式，在这种模式中，
 *    一个称为subject的对象，维护一个存放多个 observer 的列表，
 *    在状态发生变化时自动通知它们，通常是调用它们的一个方法。
 */
class Observer1 {
  update(msg){
    // 消息触达，通知update执行
    console.log('Observer1消息接收到了-' + msg)
  }
}
class Observer2 {
  update(msg){
    // 消息触达，通知update执行
    console.log('Observer2消息接收到了-' + msg)
  }
}
class Subject{
  // 目标：具备通知观察者的功能
  constructor(){
    // 所有的观察者列表
    this.observerList = []
  }
  add(observer){
    this.observerList.push(observer)
  }
  remove(observer){
    this.observerList = this.observerList.filter(ob => ob !== observer)
  }
  // 通知所有观察者
  notify(msg){
    this.observerList.forEach(item => item.update(msg))
  }
}
// 创建观察者
let sub = new Subject()
sub.add(new Observer1())
sub.add(new Observer2())
setTimeout(()=>{
  sub.notify('@通知内容@')
}, 10000)