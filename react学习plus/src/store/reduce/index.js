import { ADD, SUB } from '../constant/index'

const initState = {
  count: 0
};

// reduce函数，用来处理发送过来的action
const reducer = (state = initState, action) => {
  console.log(state,'state')
  console.log(action,'action')
  switch(action.type) {
    case ADD:
      state.count += action.data
      return state //  返回一个修改后的state
    case SUB:
      state.count -= action.data
      return state
    default:
      return state
  }
};
export {
  reducer
}