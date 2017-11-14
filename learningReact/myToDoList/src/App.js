import React, { Component } from 'react'
import './App.css'
import ToDoHeader from './todoHeader'
import ToDoBody from './todoBody'

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <ToDoHeader/>
        <ToDoBody/>
      </div>
    )
  }
}
