import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

export default createStore({
  state,//状态、数据
  mutations,//包含多个更新state数据的对象
  actions,//对应事件函数的对象
})