import React from 'react'
import Child from '../component/child'
class Parent extends React.Component{

  constructor(props){
    super(props)
    this.state={
        inputValue:'lucy',
        clickIndex:'1',
        obj:{
          name:'zoro',
          age:28
        }
    }
  }
  render(){
    return (
      <div>
        <div>我是parent组件，传递给子组件的值是lucy
        </div>
        <Child ref='child' {...this.state.obj} inputValue={this.state.inputValue} parentFn = { this.parentFn }> </Child>
        <button onClick = { () => { this.clickChild() }}>点我触发子组件的alert方法</button>
      </div>
    )
  }
  parentFn(val){
    alert('我是父组件parent的alert,子组件的传值为`'+val+'`')
  }
  clickChild(){
    this.refs.child.myAlert()
  }
}
export default Parent