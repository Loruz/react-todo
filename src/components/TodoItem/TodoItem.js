import React from 'react'
import './TodoItem.scss'
import Checkbox from '../Checkbox/Checkbox'

const TodoItem = ({checked, completed, deleted, text}) => {
  return (
    <div className='todo-item'>
      <Checkbox
        checked={checked}
        isChecked={completed}
      />
      <div
        className={`todo-item__text ${completed ? 'completed': null}`}>
        {text}
        </div>
      <button className="todo-item__delete" onClick={deleted}>X</button>
    </div>
  )
}


export default TodoItem