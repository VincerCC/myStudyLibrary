import React from 'react';
import {Button} from 'antd-mobile'
class Result extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  goHome(){
    this.props.history.push('/')
  }
  render(){
    return (
      <div>
        <h1>当前得分为{this.props.location.state.score}分</h1>
        <Button type="primary"  onClick={()=>this.goHome()}>返回首页</Button>
      </div>
    )
  }
}
export default Result