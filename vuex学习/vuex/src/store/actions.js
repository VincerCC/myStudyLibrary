// Action提交的是mutation，而不是直接变更状态。Action可以包含任何的异步操作, 但mutation必须是同步操作。
import { REDUCE, ADD } from './mutation-types'
export default {
  //增加
  increment({commit}){
    //提交add的mutations
    commit(ADD)
  },
  //减少
  decrement({commit}){
      //提交reduce的mutations
      commit(REDUCE)
  },
  //如果是奇数才加1
  incrementIfOdd({commit,state}){
      //提交add的mutations
      if(state.count%2==1){
          commit(ADD)
      }
  },
  //异步增加，过一秒才增加
  incrementAsync({commit}){
      //提交add的mutations
      setTimeout(()=>{
          commit(ADD)
      },1000)
  }
}