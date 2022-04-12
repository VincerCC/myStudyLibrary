import React from 'react'

export default class Ref extends React.Component{
  constructor(){
    super()
    this.inputRef = React.createRef() // 推荐
  }
  showValue(){
    console.log('l')
    console.log(this.refs.myInput,'this.refs.myInput')//“refs”已被弃用
    console.log(this.inputRef.current,'this.inputRef.current')
  }
  render(){
    return (<div>
      <input type="text" ref="myInput"/>
      <input type="text" ref={this.inputRef}/>
      <button onClick={()=>this.showValue()}>showRef</button>
    </div>)
  }
}
