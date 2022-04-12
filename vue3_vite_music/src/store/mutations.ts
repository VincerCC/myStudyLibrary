import { IState } from "../typings";
import { SET_CURRENT_ROUTE_NAME } from "./actionTypes";
export default {
  [SET_CURRENT_ROUTE_NAME](state: IState, currentRouteName: string): void{
    state.currentRouteName = currentRouteName
  }
}