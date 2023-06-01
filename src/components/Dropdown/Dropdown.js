import clsx from 'clsx';
import { useState } from 'react';

import './Dropdown.css';

const Dropdown = ({options, title, onFieldsChange}) => {

  const [state, setState] = useState({
    open: false,
    selected: 0
  })
  const dropdownOptions = Object.keys(options)

  const toggleDropdown = () => {
    setState({ ...state, active: !state.active })
  }

  const handleClick = (i) => {
    setState({
      ...state,
      active: !state.active,
      selected: i
    })
    onFieldsChange(options[dropdownOptions[i]])
  }

  return (
    <div className="dropdown">
      <div
        onClick={() => toggleDropdown()}
        className="dropdown__toggle dropdown__list-item"
      >
        {dropdownOptions[state.selected]}
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </div>

      <ul className={clsx("dropdown__list", state.active && 'dropdown__list--active')}>
        {dropdownOptions.map((option, i) => (
          <li
            key={`dropdow-${title}-${i}`}
            onClick={evt => handleClick(i)}
            className={clsx("dropdown__list-item", i === state.selected && 'dropdown__list-item--active')}
          >
            {option}
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Dropdown
