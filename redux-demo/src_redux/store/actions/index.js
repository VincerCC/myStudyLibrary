// action 由reducer通知触发，负责改变state数据
const actions = {
  changeValue(state, action){
    console.log(state, 'actions_state', action, 'actions_action')
    state.myValue = action.myValue
    return state //  返回一个修改后的state
  },
  addList(state, action){
    console.log(state, 'actions_state', action, 'actions_action')
    state.list.push(state.myValue)
    state.myValue = ''
    return state
  },
}
export default actions