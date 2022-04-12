import { createStore, applyMiddleware } from "redux";
import {reducer} from "./reduce/index";

// 引入 redux-thunk，用于支持异步 action
import thunk from 'redux-thunk';
console.log(thunk)
const store = createStore(
  reducer,
  applyMiddleware(thunk),
  )
export default store