import React from 'react'

import { Consumer } from './parent' // 引入顶级组件创建的Consumer

export default class Grandson extends React.Component{
  constructor(props){
    super(props)
    console.log(Consumer)
    console.log(this.context)
  }
  render(){
    return (<div>
      <Consumer>
        {
          (data) => {

            let fontColor = {
              'color': data.grandSonColor
            }
            return <span style={{'color': data.grandSonColor}}>grandSon-{ JSON.stringify(fontColor) }</span>
          }
        }
      </Consumer>
    </div>)
  }
}
