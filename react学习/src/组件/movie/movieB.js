import React from 'react'
import MovieList from './movieList'
import withFetchMovie from '../HOC/fetchMovie'
class MovieB extends React.Component{
  // 有了高阶组件后，不再需要在各自组件请求数据,统一在高阶组件内部请求数据
  // constructor(props){
  //   console.log(props)
  //   super()
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
export default withFetchMovie('movieB')(MovieB)