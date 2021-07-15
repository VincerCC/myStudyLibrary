import actions from '../actions/index'
const initState = {
  defaultState: '我是默认state',
  list: [
    '床前明月光',
    '疑是地上霜',
    '举头望明月'
  ],
  myValue: '默认填充'
};
// reduce函数，用来处理发送过来的action
const reducer = (state = initState, action) => {
  console.log(state,'state')
  console.log(action,'action')
  console.log(actions,'actions')
  // reduce 里 只负责接收 state，不负责改变 state
  // 在actions中进行改变state
  switch(action.type) {
    case '@@INIT':
      // 默认加载触发
      return state
    default:
      // 通知actions触发对应type的方法，并返回一个新的（修改后）state对象
      return actions[action.type](state, action)
  }
};
export {
  reducer
}