// 高阶组件，用来获取数据，对状态赋值，属性传递
import React from 'react'
const withFetchMovie = (fetchApi) => {
  // 用来标识请求数据
  console.log('fetchApi',fetchApi)
  return (Comp) => {
    return class extends React.Component{
      constructor(props){
        super(props)
        this.state = {
          data: []
        }
      }
      componentDidMount(){
        let data = []
        if(fetchApi === 'movieA'){
          // 请求A数据
          data = [
            {id: 1, title: 'vue'},
            {id: 2, title: 'vuex'}
          ]
        } else {
          // 请求B数据
          data = [
            {id: 1, title: 'react'},
            {id: 2, title: 'redux'}
          ]
        }
        this.setState({
          data
        })
      }
      render(){
        // 将请求到的数据，通过props.data传递给传入的组件
        // 并且保留原来传入的props
        return <Comp {...this.props} data={this.state.data}></Comp>
      }
    }
  }
}
export default withFetchMovie
