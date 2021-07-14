// 更改Vuex的store中的状态的唯一方法时提交mutation
import { REDUCE, ADD } from './mutation-types'
export default {
    [ADD](state){
      //增加1
        state.count++
    },
    [REDUCE](state){
      //减少1
        state.count--
    }
}