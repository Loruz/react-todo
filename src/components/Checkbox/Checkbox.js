import React from 'react'
import './Checkbox.scss'

const Checkbox = (props) => (
  <label className="checkbox">
    <input
      type="checkbox"
      onClick={props.checked}
    />
    <span className="checkmark"></span>
  </label>
)

export default Checkbox