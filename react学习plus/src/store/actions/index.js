// 生成 action 操作对象
import { ADD, SUB } from '../constant/index'
const actions = {
  addAction(data) {
    //  返回一般对象 action，就是同步 action
    return {
      type: ADD,
      data
    }
  },
  subAction(data) {
    // 同步 action
    return {
      type: SUB,
      data
    }
  },
  asyncSubAction(data, time) {
    // 返回函数，就是异步 action
    // 需要安装 redux-thunk，并在 createStore 中传入第二个参数，为 applyMiddleware(thunk)
    return (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: ADD,
          data
        })
      }, time)
    }
  }
}
export default actions