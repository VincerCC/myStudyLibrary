/**
 * 发布订阅模式 publish & subscribe
 * 应用场景:凡是某个阶段到达的时候，需要执行很多方法，我们都可以基于这个模式管理代码；
 * 创建事件池->发布计划
 */

// 调度中心（邮局）
let events = {
  // 支持指定调用某个事件池事件
  /**
   * pond:{
   *    e1: [()=>{},()=>{}],
   *    e2: [()=>{}]
   * }
   */
  pond: {},
  // 向事件池追加指定自定义事件类型的方法
  on(type, fn){
    // 每一次增加的时候，验证当前类型在事件池中是否已经存在
    if(!Array.isArray(this.pond[type])){
      this.pond[type] = []
    }
    let arr = this.pond[type]
    if(!arr.includes(fn)){
      arr.push(fn)
    }
  },

  // 向事件池移除指定自定义事件类型的方法
  remove(){

  },

  // 通知事件池中  指定自定义事件类型的方法 执行
  emit(type){
    let arr = this.pond[type]
    if(Array.isArray(arr)){
      arr.forEach(item => {
        if(typeof item === 'function'){
          item()
        }
      })
    }
  }
}

// （人）订阅者 订阅 名为 el的事件
events.on('e1',()=>{
  console.log('第一个事件池事件1')
})
events.on('e1',()=>{
  console.log('第一个事件池事件2')
})
events.on('e1',()=>{
  console.log('第一个事件池事件3')
})
events.on('e2',()=>{
  console.log('第二个事件池事件1')
})
events.on('e2',()=>{
  console.log('第二个事件池事件2')
})

// （邮局）派发通知订阅者
events.emit('e1')
events.emit('e2')