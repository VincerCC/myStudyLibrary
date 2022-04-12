import React from 'react'
class DefaultRoute extends React.Component{
  constructor(props){
    super(props)
  }
  toCenter = () => {
    this.props.history.push('/personCenter?firstName=jack',{
      lastName: 'lucy'
    })
  }
  render(){
    return (
      <div>
        <h1>我是DefaultRoute组件</h1>

      </div>
    )
  }
}
export default DefaultRoute