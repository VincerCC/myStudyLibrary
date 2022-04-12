import React from 'react'


// 创建Render Props组件, 方式一
class RenderPropComponent1 extends React.Component{
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
    // 执行props中传的的函数，并且传入state
    return this.props.render(this.state)
  }
}
// 方式二
class RenderPropComponent2 extends React.Component{
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
    // 执行props.children中传的的函数，并且传入state
    return this.props.children(this.state)
  }
}
// 用来测试高阶组件
const position = (props) => {
  return (
    <div>
      <h1>props: {JSON.stringify(props)}</h1>
      <p>鼠标当前位置：x: {props.x},y: { props.y }</p>
    </div>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <RenderPropComponent1 render={
          (state) => {
            return position(state)
          }
        }/>
        <RenderPropComponent2>
          {
            (state) => {
              return (
                position(state)
              )
            }
          }
        </RenderPropComponent2>
      </div>
    )
  }
}