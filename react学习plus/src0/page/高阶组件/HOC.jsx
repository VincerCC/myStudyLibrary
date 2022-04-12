import React from 'react'


// 创建高阶组件
function withMouse(WrappedComponent) {
  // 提供复用的state
  class Mouse extends React.Component{
    constructor(props) {
      super(props);

      // 鼠标状态
      this.state = {
        x: 0,
        y: 0

      }

    }
    handleMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    componentDidMount() {
      window.addEventListener('mousemove', this.handleMove)

    }
    componentWillUnmount(){
      window.removeEventListener('mousemove', this.handleMove)
    }
    render() {
      // 将state和props传递给需要包装的组件
      return <WrappedComponent {...this.state} {...this.props}/>
    }
  }
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`

  return Mouse
}
function getDisplayName (WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'component'
}
// 用来测试高阶组件
const Position = (props) => {
  return (
    <div>
      <h1>props: {JSON.stringify(props)}</h1>
      <p>鼠标当前位置：x: {props.x},y: { props.y }</p>
    </div>
  )
}
const WrappedComponent = withMouse(Position)
console.log(WrappedComponent)
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件(HOC)</h1>
        <WrappedComponent msg="WrappedComponent"/>
      </div>
    )
  }
}