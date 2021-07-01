import React from 'react'
import MovieA from './组件/movie/movieA'
import MovieB from './组件/movie/movieB'
import ReactDOM from 'react-dom'//把创建好的组件和虚拟Dom放到页面上展示
/**
 * react高阶组件能够让代码复用性更强
 *      本质上是一个函数，这个函数接收一个组件或者多个组件，返回一个加工后的新组件
 */
export default class MyApp extends React.Component{

  render(){
    return (<div>
      666
      <MovieA msg="这是A组件"></MovieA>
      <MovieB msg="这是B组件"></MovieB>
    </div>)
  }
}

// state被修改及时更新页面
let myDom = <MyApp></MyApp>
ReactDOM.render(myDom,document.getElementById('app'))

