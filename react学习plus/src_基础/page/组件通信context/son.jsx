import React from 'react'

import Grandson from './grandson'
import { Consumer } from './parent' // 引入顶级组件创建的Consumer
export default class Son extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (<div>

      <Consumer>
        {
          (data) => {
            let fontColor = {
              'color': data.sonColor
            }
            console.log(fontColor)
            return <span style={fontColor}>son-{JSON.stringify(fontColor)}</span>
          }
        }

      </Consumer>
      <Grandson></Grandson>
    </div>)
  }
}
