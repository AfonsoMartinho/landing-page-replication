import { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

export const StyledDropdown = styled.div`
  position: relative;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 1px;
  border-radius: 0.5rem;
  border: 0.125rem solid #5405bd;

  color: #5405bd;
  background-color: white;
  border-color: #5405bd;
  box-shadow: inset 0 0 0 100vh white;

  /* border-bottom-right-radius: ${({ active }) => (active ? '0' : '1px')};
  border-bottom-left-radius: ${({ active }) => (active ? '0' : '1px')}; */

  &:hover {
    color: white;
    background-color: #5405bd;
    border-color: #5405bd;
    box-shadow: inset 0 0 0 100vh #5405bd;
  }


  .dropdown__arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #eee;
    border-radius: 3px;
  }
  .dropdown__list {
    overflow: hidden;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 100%;
    max-height: 0;

    background-color: white;
    box-shadow: 0 0.9375rem 1.5625rem 0 rgba(0,0,0,.2);
    text-align: left;
    
    transform: translateX(-50%);
    z-index: 1;
    transition: max-height .35s ease-in-out;

    ul {
      padding: 0;
      margin-top: 0;
      margin-bottom: 1rem;
    }

    &--active {
      opacity: 1;
      max-height: 450px;
      display: block;
      overflow-y: auto;

      &::-webkit-scrollbar {
        height: 22px;
        width: 22px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: #5405bd;
        border-radius: 12px;
        border: 8px solid transparent;
        -webkit-box-shadow: inset 0 0 0 4px #5405bd;
        box-shadow: inset 0 0 0 4px #5405bd;
      }
    }

    &-item {
      border-bottom: 1px solid #eee;
      cursor: pointer;
      list-style: none;
      padding: 15px;

      &--active {
        background: #f4f4f4;
      }

      /* &:hover {
        background: #f4f4f4;
      } */
    }

    &__toggle {
      background: #fff;

      &:hover {
        background: #fff;
      }
    }
  }
`;

const Dropdown = ({className, options, title, onFieldsChange}) => {

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
    <StyledDropdown className="dropdown" active={state.sctive}>
      <div
        onClick={() => toggleDropdown()}
        className="dropdown__toggle dropdown__list-item"
      >
        {dropdownOptions[state.selected]}
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </div>

      <div className={clsx("dropdown__list", state.active && 'dropdown__list--active')}>
        <ul>
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
      </div>

    </StyledDropdown >
  )
}

export default Dropdown
