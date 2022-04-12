import React from 'react'
import { Link } from 'react-router-dom';
class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '参数title'
    }
  }
  setParams = () => {
    this.props.history.push(`/demoParams/${this.state.title}`)
  }
  setSearch = () => {
    this.props.history.push(`/demo/?title=${this.state.title}`)
    // this.props.history.replace(`/demo/?title=${this.state.title}`)
  }
  setState = () => {
    this.props.history.push(`/demo`, {
      title: this.state.title
    })
  }


  render(){
    return (
      <div>
        <Link to={`/demoParams/${this.state.title}`}>Link组件 - 传递 params</Link>

        <hr />
        <Link to={`/demo/?title=${this.state.title}`}>Link组件 - 传递 search</Link>

        <hr />
        <Link to={
          {
            pathname: '/demo',
            state: {
              title: this.state.title
            }
          }
        }>Link组件 - 传递 state</Link>
        <hr />
        <button onClick={this.setParams}>编程式导航 - 传递 params</button>

        <hr />
        <button onClick={this.setSearch}>编程式导航 - 传递 search</button>

        <hr />
        <button onClick={this.setState}>编程式导航 - 传递 state</button>

      </div>
    )
  }
}
export default Home