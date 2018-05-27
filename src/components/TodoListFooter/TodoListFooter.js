import React from 'react'
import './TodoListFooter.scss'

const TodoListFooter = ({itemsLeft, filter, filterTag, clearCompletedTodo, completedTodoLength}) => {
  let clearCompletedButton = null
  if (completedTodoLength) {
    clearCompletedButton =
      (<a href="#" className="todo-list__clear-completed" onClick={clearCompletedTodo}>Clear completed</a>)
  }

  return (
    <div className='todo-list__footer'>
      <div className="todo-list__left-todos">
        {itemsLeft} {itemsLeft > 1 ? 'items' : 'item'} left
      </div>
      <div className='todo-list__filter'>
        <button onClick={() => filter('all')} className={filterTag === 'all' ? 'active': null}>All</button>
        <button onClick={() => filter('active')} className={filterTag === 'active' ? 'active': null}>Active</button>
        <button onClick={() => filter('completed')} className={filterTag === 'completed' ? 'active': null}>Completed</button>
      </div>
      {clearCompletedButton}
    </div>
  )
}

export default TodoListFooter