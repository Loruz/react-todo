import React, { Component } from 'react'
import './App.scss'
import TodoList from './components/TodoList/TodoList'

class App extends Component {
  render () {
    return (
      <div id='app'>
        <TodoList/>
      </div>

    )
  }
}

export default App
