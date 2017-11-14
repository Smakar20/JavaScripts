import React, { Component } from 'react'
import './App.css'
import ToDoHeader from './todoHeader'
import ToDoBody from './todoBody'

export default class App extends Component {
  
  render() {
    return (
    <div className="App todo" style={{border: '3px solid red'}} width="75%">
      <ToDoHeader/>
      <ToDoBody/>
    </div>
    )
  }
}
