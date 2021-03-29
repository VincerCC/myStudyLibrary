import { IState, ITodo, TODO_STATUS } from "./../typings/index";
import { SET_TODO, SET_TODO_LIST, DEL_TODO, SET_STATUS, SET_DOING } from "./actionTypes";
import { useLocalStorage } from '../hooks/index'

/*
 * @Author: your name
 * @Date: 2021-03-16 17:36:19
 * @LastEditTime: 2021-03-17 14:45:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-todo\src\store\mutations.ts
 */
export default {

  [SET_TODO](state: IState, todo: ITodo): void{
    state.list = [todo, ...state.list]
  },
  [SET_TODO_LIST](state: IState, todoList: ITodo[]): void{
    state.list = todoList
  },
  [DEL_TODO](state: IState, id: number): void{
    state.list = state.list.filter((item) => item.id !== id)
  },
  [SET_STATUS](state: IState, id: number): void{
    state.list = state.list.map((item) => {
      if(item.id === id){
        switch (item.status){
          case TODO_STATUS.FINISH:
            item.status = TODO_STATUS.TODO
            break;

          case TODO_STATUS.TODO:
            item.status = TODO_STATUS.FINISH
            break;

          case TODO_STATUS.DOING:
            // 状态是正在做，不做处理
            item.status = TODO_STATUS.FINISH
            break;

          default:
            break;
        }
      }
      return item
    })
  },
  [SET_DOING](state: IState, id: number): void{
    state.list = state.list.map((item) => {
      if(item.status === TODO_STATUS.FINISH) return item
      if(item.id === id){
        item.status = item.status === TODO_STATUS.TODO ? TODO_STATUS.DOING : TODO_STATUS.TODO
      } else {
        if(item.status = TODO_STATUS.DOING){
          item.status = TODO_STATUS.TODO
        }
      }
      return item
    })
  }
}