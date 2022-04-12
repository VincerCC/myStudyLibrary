import { IState } from "../typings";
import { Commit } from "vuex";
import { SET_CURRENT_ROUTE_NAME } from "./actionTypes";

interface ICtx {
  commit: Commit;
  state: IState;
}
// 调用mutations的方法
export default {
  [SET_CURRENT_ROUTE_NAME]( { commit, state}: ICtx, currentRouteName: string): void {
    commit(SET_CURRENT_ROUTE_NAME, currentRouteName)
  }
}