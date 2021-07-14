/*vuex的核心管理模块*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
export default new Vuex.Store({
    state,//状态、数据
    mutations,//包含多个更新state数据的对象
    actions,//对应事件函数的对象
    getters//计算属性
})
