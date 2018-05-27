import React, { Component } from 'react'
import './TodoList.scss'
import TodoItem from '../TodoItem/TodoItem'
import TodoListFooter from '../TodoListFooter/TodoListFooter'

class TodoList extends Component {
  state = {
    todoList: [],
    filterTag: 'all'
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

  handleFilter = (filterTag) => {
    this.setState({filterTag: filterTag})
  }

  clearCompletedTodo = () => {
    let updatedList = this.state.todoList.filter(todo => !todo.completed)
    this.setState({todoList: updatedList})
  }

  render () {
    let filteredList = null
    switch (this.state.filterTag) {
      case 'all':
        filteredList = [...this.state.todoList]
        break
      case 'active':
        filteredList = this.state.todoList.filter(item => !item.completed)
        break
      case 'completed':
        filteredList = this.state.todoList.filter(item => item.completed)
        break
      default:
    }

    let todoItems = filteredList.map(item => {
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
    let itemsLeft = this.state.todoList.filter(todo => !todo.completed).length
    let completedTodoLength = this.state.todoList.filter(todo => todo.completed).length
    let showFooter = null
    if (this.state.todoList.length) {
      showFooter =
        <TodoListFooter
          itemsLeft={itemsLeft}
          completedTodoLength={completedTodoLength}
          filterTag={this.state.filterTag}
          filter={this.handleFilter}
          clearCompletedTodo={this.clearCompletedTodo}
        />
    }
    return (
      <div className='todo-list'>
        <div className='todo-list__title'>
          Todo list
        </div>
        <input type='text' className='todo-list__input' onKeyPress={this.addTodo}/>
        {todoItems}
        {showFooter}
      </div>
    )
  }
}

export default TodoList
