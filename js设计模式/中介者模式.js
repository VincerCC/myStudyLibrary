let mediator = (function (){
  let topics = {

  }
  // 订阅 A组件中 某个方法
  let subscribe = function subscribe (topic, callback) {
    !topics[topic] ? topics[topic] = [] : null;
    topics[topic].push({
      context: this,
      callback: callback
    })
  }
  // 发布  B组件中到某个阶段，可以通知之前订阅的方法执行
  let publish = function publish(topic, ...params){
    if(!topics[topic]) return
    topics[topic].forEach(item => item.callback.call(item.context, ...params))
  }
  return {
    subscribe,
    publish
  }
})()