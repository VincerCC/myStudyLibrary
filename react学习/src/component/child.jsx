import React from 'react'
// 创建样式对象
let exampleStyle = {
  backgroundColor:'pink'
}
class Child extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state={
        parentValue:props.inputValue
    }
  }
  render(){
    return (
    <div style={exampleStyle}>
      我是Child组件,父组件给我的值是`{this.state.parentValue}`
      <button onClick={()=>{this.parentFn()}}>点我触发父组件的alert</button>
    </div>
    )
  }
  setValue(){
    console.log(this.props.inputValue,'this.props.inputValue')
    this.setState({
      parentValue:this.props.inputValue
    })
  }
  myAlert(){
    alert('我是子组件child的alert')
  }
  parentFn(){
    this.props.parentFn('我是子组件传递给父组件的值')
  }
}
export default Child