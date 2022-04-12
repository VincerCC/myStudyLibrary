import React from 'react'
import { Route } from 'react-router-dom'
import PersonDetailCenter from './personDetail'
import qs from 'querystring';
function PersonCenter(props){
  console.log(props)
  console.log(props.location.search) // ?firstName=jack
  console.log(qs.parse(props.location.search.replace(/^\?/g, ''))) // ?firstName=jack
  console.log(props.location.state) // {lastName: "lucy"}
  function toDetail() {
    props.history.push('/personCenter/personDetail')
  }
  return (
    <div>
      <h1>我是PersonCenter组件</h1>
      <button onClick={toDetail}>去 personCenter 下边的详情页</button>
      <Route path='/personCenter/personDetail' component={PersonDetailCenter}></Route>
    </div>
  )
}
export default PersonCenter