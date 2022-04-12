import React from 'react'
class Home extends React.Component{
  constructor(props) {
    super(props)
    console.log(this.props.match.params)
  }

  toCenter = () => {
    this.props.history.push('/personCenter?firstName=jack',{
      lastName: 'lucy'
    })
  }
  goBack = () => {
    this.props.history.go(-1)
  }
  render(){
    return (
      <div>
        <h1>我是Home组件</h1>
        <button onClick={ this.toCenter }> 编程式导航 -》 去个人中心</button>
        <button onClick={ this.goBack }> 返回</button>

      </div>
    )
  }
}
export default Home