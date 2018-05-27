import React, { Component } from 'react'
import './TodoList.scss'
import TodoItem from '../TodoItem/TodoItem'

class TodoList extends Component {
  state = {
    todoList: []
  }
  addTodo = (event) => {
    if (event.target.value.length && event.key === 'Enter') {
      let todoItem = {
        id: Math.floor(Math.random() * 1000),
        text: event.target.value,
        completed: false
      }
      let list = [
        ...this.state.todoList
      ]
      list.push(todoItem)
      this.setState({todoList: list})
      event.target.value = ''
    }
  }

  deleteTodo = (id) => {
    let list = [
      ...this.state.todoList
    ]
    let itemToDelete = list.find(item => item.id === id)
    list.splice(list.indexOf(itemToDelete), 1)
    this.setState({todoList: list})
  }

  handleCheckboxCheck = (id) => {
    let list = [
      ...this.state.todoList
    ]
    let item = list.find(item => item.id === id)
    item.completed = !item.completed
    list[list.indexOf(item)] = item
    this.setState({todoList: list})
  }

  render () {
    let todoItems = this.state.todoList.map(item => {
      return (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          checked={() => this.handleCheckboxCheck(item.id)}
          deleted={() => this.deleteTodo(item.id)}
          completed={item.completed}
        />
      )
    })
    return (
      <div className='todo-list'>
        <div className='todo-list__title'>
          Todo list
        </div>
        <input type='text' className='todo-list__input' onKeyPress={this.addTodo}/>
        {todoItems}
      </div>
    )
  }
}

export default TodoList
