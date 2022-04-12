import React from 'react'

class Child extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidUpdate(prevProps){
    console.log('更新前的props->prevProps',prevProps,'更新后的props',this.props)
    if(prevProps.count !== this.props.count) {
      // 注意：这里不能直接调用setState()，需要结合if使用，否则会出现无限更新组件的问题
      this.setState({})
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps === this.props) {
      return false
    } else {
      return true
    }
  }
  render(){
    return (
      <div>
        点击次数{this.props.count}
      </div>
    )
  }
}
export default class LifeCycleParent extends React.Component{
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }
  addCount=() => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render(){
    return (
      <div>
        <Child count={this.state.count}/>
        <button onClick={this.addCount}>+</button>
      </div>
    )
  }
}

