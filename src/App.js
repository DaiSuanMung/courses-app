import React, { Component } from 'react'
import logo from './logo.svg'
import Coursesale from './Coursesale'

class App extends Component {
  render() {
    var courses = [ {name:"Complete Ios10 Dev course", price: 199},
    {name:"Complete Ios10 Dev course", price: 199},
    {name:"HTML Dev course", price: 147},
    {name:"CSS Dev course", price: 694},
    {name:"Javascript Dev course", price: 476}]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-log" alt="logo"/>
    <h2>This is a CourseSale</h2>
        </div>
        <Coursesale items={courses}/>
      </div>
    )
  }
}
export default App;
