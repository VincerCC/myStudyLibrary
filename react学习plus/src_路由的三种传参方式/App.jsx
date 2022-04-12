import React from 'react'
import { Route } from 'react-router-dom';
import Home from './page/home/index.jsx'
import Demo from './page/demo/index'
export default class App extends React.Component{

  render(){
    return (
      <div>
          <div>
            <Route path="/" component={Home} exact></Route>
            <Route path="/demo" component={Demo}></Route>
            <Route path="/demoParams/:title" component={Demo}></Route>

          </div>
      </div>
    )
  }
}
