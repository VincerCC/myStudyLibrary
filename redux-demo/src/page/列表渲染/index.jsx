import React from 'react'

export default class ListDom extends React.Component{
  constructor(){
    super()
    this.state={
      list: [
        '窗前明月光',
        '疑是地上霜'
      ]
    }
  }

  render(){
    return (<div>
      <h1>条件渲染</h1>
      <ul>
        {
          this.state.list.map((item,index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>)
  }
}
