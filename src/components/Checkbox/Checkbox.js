import React from 'react'
import './Checkbox.scss'

const Checkbox = ({checked, isChecked}) => (
  <label className="checkbox">
    <input
      checked={isChecked}
      type="checkbox"
      onClick={checked}
    />
    <span className="checkmark"></span>
  </label>
)

export default Checkbox