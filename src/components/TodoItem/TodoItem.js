import React from 'react'
import './TodoItem.scss'
import Checkbox from '../Checkbox/Checkbox'

const TodoItem = (props) => {
  return (
    <div className='todo-item'>
      <Checkbox
        checked={props.checked}
      />
      <div
        className={`todo-item__text ${props.completed ? 'completed': null}`}>
        {props.text}
        </div>
      <button className="todo-item__delete" onClick={props.deleted}>X</button>
    </div>
  )
}


export default TodoItem