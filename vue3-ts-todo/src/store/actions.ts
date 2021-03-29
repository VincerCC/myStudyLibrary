/*
 * @Author: your name
 * @Date: 2021-03-16 17:36:26
 * @LastEditTime: 2021-03-17 14:05:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-todo\src\store\actions.ts
 */

import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { SET_TODO, SET_TODO_LIST, DEL_TODO, SET_STATUS, SET_DOING } from "./actionTypes";

interface ICtx {
  commit: Commit;
  state: IState;
}
// 调用mutations的方法
export default {
  [SET_TODO]( { commit, state}: ICtx, todo: ITodo): void {
    commit(SET_TODO, todo)
  },
  [SET_TODO_LIST]( { commit, state}: ICtx, todoList: ITodo[]): void {
    commit(SET_TODO_LIST, todoList)
  },
  [DEL_TODO]( { commit, state}: ICtx, id: number): void {
    commit(DEL_TODO, id)
  },
  [SET_STATUS]( { commit, state}: ICtx, id: number): void {
    commit(SET_STATUS, id)
  },
  [SET_DOING]( { commit, state}: ICtx, id: number): void {
    commit(SET_DOING, id)
  },
}
