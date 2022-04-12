import React from 'react'
import qs from 'querystring'
class Demo extends React.Component{
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      title: '参数title',
      params: props.match.params,
      search: props.location.search,
      formatSearch: qs.parse(props.location.search.replace(/^\?/g, '')),
      state: props.location.state,
    }
    console.log('params', props.match.params)
    console.log('search', props.location.search)
    console.log('search 格式化', qs.parse(props.location.search.replace(/^\?/g, '')))
    console.log('state', props.location.state)
  }

  render(){
    return (
      <div>
        <h3>params： {JSON.stringify(this.state.params)}</h3>
        <h3>search {JSON.stringify(this.state.search)}</h3>
        <h3>search 格式化 {JSON.stringify(this.state.formatSearch)}</h3>
        <h3>state {JSON.stringify(this.state.state)}</h3>
      </div>
    )
  }
}
export default Demo