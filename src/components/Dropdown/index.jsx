import { useState, useRef, useEffect  } from 'react';
import { StyledDropdown, StyledDropdownItem, StyledDropdownToggle, StyledDropdownList} from './Dropdown.styled'

const Dropdown = ({ options, title, onFieldsChange}) => {

  const [state, setState] = useState({
    open: false,
    selected: 0,
  })
  const dropdownOptions = Object.keys(options)
  const dropdownRef = useRef(null);

  // closing dropdown when the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setState({ ...state, active: false });
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
    <StyledDropdown ref={dropdownRef} onClick={() => toggleDropdown()} $active={state.active}>
      <StyledDropdownToggle>
        <span className='dropdown__toggle-text'>{dropdownOptions[state.selected]}</span>
      </StyledDropdownToggle>
      <StyledDropdownList $active={state.active}>
        <ul>
          {dropdownOptions.map((option, i) => (
            <StyledDropdownItem
              $active={state.active}
              $selected={i === state.selected}
              key={`dropdow-${title}-${i}`}
              onClick={evt => handleClick(i)}
            >
              <span className='dropdown__list-text'>{option}</span>
            </StyledDropdownItem>
          ))}
        </ul>
      </StyledDropdownList>

    </StyledDropdown >
  )
}

export default Dropdown
