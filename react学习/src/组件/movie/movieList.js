import React from 'react'

export default class MovieList extends React.Component{
  constructor(props){
    console.log(props)
    super()
    this.state={
    }
  }
  render(){
    return (<div>
      <ul>
        {
          this.props.movies.map((item, index) => {
            return <li key={index}>{item.title}</li>
          })
        }
      </ul>
    </div>)
  }
}
