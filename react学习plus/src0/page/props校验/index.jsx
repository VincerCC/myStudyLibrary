import React from 'react'
// props 校验，允许在创建组件的时候，就指定props的类型、格式等
// 作用，捕捉使用组件时因为props导致的错误，给出明确的错误提示

// 第一步：安装 prop-types （yarn add prop-types / cnpm install prop-types）
// 导入prop-types
import PropTypes from 'prop-types';
class Child extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidUpdate(prevProps){
    console.log(prevProps,'prevProps')
  }
  render(){
    let list = this.props.list
    return (
      <div>
        <h1>props</h1>
        {
          list.map((item, index) => {


            return <h3 key={index}>{item}</h3>
          })
        }
      </div>
    )
  }
}
// 使用 组件名.propTypes = {}给组件的props添加校验
Child.propTypes = {
  // 常见类型：array,boo,func,number,object,string
  // react元素类型：element
  // 必填：isRequired
  // 特定结构的对象：shape({})
  // 更多请看 https://react.docschina.org/docs/typechecking-with-proptypes.html
  list: PropTypes.array,
  name: PropTypes.string.isRequired,
  detail: PropTypes.shape({
    height: PropTypes.number,
    isOnly: PropTypes.bool
  })
}
export default class PropsParent extends React.Component{
  constructor(){
    super()
    this.state = {
      // list: '[1,2]'//Failed prop type: Invalid prop `list` of type `string` supplied to `Child`, expected `array`.
      list: ['gaoGao', 'duoLa'],
      detail: {
        height: 170,
        isOnly: false
      }
    }
  }

  render(){
    return (
      <Child list={this.state.list} name="myName" detail={this.state.detail}/>
    )
  }
}

