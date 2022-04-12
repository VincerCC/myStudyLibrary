export default {
  evenORodd(state){
    //计算属性不需要亲自调用，不需要加()
    //使用$store.getters.evenORodd调用这个方法，在js中要加上this
    return state.count%2==0?'偶数':'奇数'
  }
}