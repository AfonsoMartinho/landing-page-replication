import { useState, useRef, useEffect  } from 'react';
import { StyledDropdown, StyledDropdownItem, StyledDropdownToggle, StyledDropdownList} from './Dropdown.styled'

const Dropdown = ({ options, title, onFieldsChange}) => {

  const [isActive, setIsActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0)
  const dropdownOptions = Object.keys(options)
  const dropdownRef = useRef(null);

  // closing dropdown when the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsActive(!isActive);
    console.log(isActive);
  }

  const handleClick = (i) => {
    setIsActive(!isActive);
    setSelectedIndex(i)
    onFieldsChange(options[dropdownOptions[i]])
  }

  return (
    <StyledDropdown ref={dropdownRef} onClick={() => toggleDropdown()} $active={isActive}>
      <StyledDropdownToggle>
        <span className='dropdown__toggle-text'>{dropdownOptions[selectedIndex]}</span>
      </StyledDropdownToggle>
      <StyledDropdownList $active={isActive}>
        <ul>
          {dropdownOptions.map((option, i) => (
            <StyledDropdownItem
              $active={isActive}
              $selected={i === selectedIndex}
              key={`dropdow-${title}-${i}`}
              onClick={() => handleClick(i)}
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
