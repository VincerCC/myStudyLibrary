import React, { useState, useEffect } from 'react'
// useState 定义一个 “state 变量”,返回值为：当前 state 以及更新 state 的函数
// useEffect
//          看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
//          第一个参数胡传入函数
//          第二个参数表示仅在 这个属性 发生变化时，重新执行
// 文档 https://zh-hans.reactjs.org/docs/hooks-state.html
console.log(useState)
function ReactDemo () {
  // 声明一个叫 "count" 的 state 变量,
  let [count, setCount] = useState(0);
  let [msg, setMsg] = useState('msg');
  function plus(){
    setCount(() => {
      return count++
    })
  }
  function cut(){
    setCount(() => {
      return count--
    })
  }
  useEffect(()=>{
    // componentDidMount，componentDidUpdate
    console.log('component is mounted!')
    return () => {
      // componentWillUnmount
      console.log('component is unmounted!')
    }
  }, [count])
  return (
    <div>
      <h1>Hook初体验</h1>
      <div>{count}</div>
      <button onClick={plus}>+</button>
      <button onClick={cut}>-</button>
      <div>{msg}</div>
      <button onClick={ () => setMsg(Date.now()) }>修改msg</button>
    </div>
  )
}
export default ReactDemo