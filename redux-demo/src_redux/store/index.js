import { createStore } from "redux";
import {reducer} from "./reduce/index";
const store = createStore(
  reducer,
  // 为了打开浏览器调试插件 redux devtool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store