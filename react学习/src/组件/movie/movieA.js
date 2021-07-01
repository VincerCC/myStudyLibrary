import React from 'react'
import withFetchMovie from '../HOC/fetchMovie'
import MovieList from './movieList'
class MovieA extends React.Component{
  // 有了高阶组件后，不再需要在各自组件请求数据,统一在高阶组件内部请求数据
  // constructor(props){
  //   super(props)
  //   this.state={
  //     movies: []
  //   }
  // }
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({
  //       movies: []
  //     })
  //   }, 3000)
  // }
  render(){
    return (
      <div>
        <h1>{this.props.msg}</h1>
        <MovieList movies={this.props.data}>{this.props.msg}</MovieList>
      </div>
    )
  }
}
// withFetchMovie('movieA')通过各自模块的标识去请求数据，然后传入组件(MovieA)到高阶组件中进行渲染
export default withFetchMovie('movieA')(MovieA)