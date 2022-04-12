import React from 'react'

export default class IfDom extends React.Component{
  constructor(){
    super()
    this.state={
      loading: true
    }
    this.loadingRender = this.loadingRender.bind(this)
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 5000)
  }
  loadingRender(){
    if(this.state.loading) {
      return <h1>loading...</h1>
    }
    return <h1>我被渲染了</h1>
  }
  render(){
    return (<div>
      <h1>条件渲染</h1>
      {this.loadingRender()}
    </div>)
  }
}
