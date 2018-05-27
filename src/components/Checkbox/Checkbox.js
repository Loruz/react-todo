import React from 'react'
import './Checkbox.scss'

const Checkbox = ({checked}) => (
  <label className="checkbox">
    <input
      type="checkbox"
      onClick={checked}
    />
    <span className="checkmark"></span>
  </label>
)

export default Checkbox