import styled from 'styled-components';

export const StyledDropdown = styled.div`
  padding: 0.71875rem 2.5rem 0.71875rem 0.875rem;
  color: ${props => props.theme.colors.brand};
  background-color: ${props => props.theme.colors.background};
  text-align: left;
  border-radius: 0.5rem;
  border: 0.125rem solid ${props => props.theme.colors.brand};
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
      margin-bottom: 0;
  }

  &:hover {
    color: ${props => props.theme.colors.hover};
    background-color: ${props => props.theme.colors.hoverBg};
    border-color: ${props => props.theme.colors.hoverBg};

    &::after {
      border-color: ${props => props.theme.colors.hover};
    }
  }

  &::after {
    content: "";
    display: block;
    pointer-events: none;
    position: absolute;
    top: 50%;
    width: 6px;
    height: 6px;
    border-top: 2px solid ${props => props.theme.colors.brand};
    border-right: 2px solid ${props => props.theme.colors.brand};
    transform: translateY(-50%) rotateZ(135deg);
    right: 1rem;
    transition: transform .4s ease;
  }

  ${({ $active }) => $active && `
    color: ${props => props.theme.colors.hover};
    background-color: ${props => props.theme.colors.bg};
    border-color: ${props => props.theme.colors.brand};
    box-shadow: inset 0 0 0 100vh ${props => props.theme.colors.brand};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

    &::after {
      transform: translateY(-50%) rotateZ(-45deg);
    }
  `}
`;

export const StyledDropdownList = styled.div`
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 50%;
  width: calc(100% + 0.25rem);
  max-height: 0;

  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 0.9375rem 1.5625rem 0 rgba(0,0,0,.2);
  text-align: left;
  
  transform: translateX(-50%);
  z-index: 1;
  
  ul {
    padding: 0;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ${({ $active, theme }) => $active && `
    opacity: 1;
    max-height: 450px;
    display: block;
    overflow-y: auto;
    transition: max-height .35s ease-in-out;

    &::-webkit-scrollbar {
      height: 22px;
      width: 22px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      background-color: ${theme.colors.brand};
      border-radius: 12px;
      border: 8px solid transparent;
      -webkit-box-shadow: inset 0 0 0 4px ${theme.colors.brand};
      box-shadow: inset 0 0 0 4px ${theme.colors.brand};
    }
  `}
`

export const StyledDropdownItem = styled.li`
    margin: 0;
    padding-left: 0;
    display: block;
    text-indent: 0;
    list-style: none;

    ${({ $selected, theme}) => $selected && `
      background: ${theme.colors.hoverLigthBg};
    `}

    &:hover {
      background: ${props => props.theme.colors.hoverLigthBg};
    }

    .dropdown__list-text {
      font-size: 1rem;
      line-height: 2.5rem;
      letter-spacing: .02rem;
      color: ${props => props.theme.colors.bg};
      padding: 0.3125rem 1.25rem;
      display: block;
      transition: all .35s ease;
      text-transform: none; 

      text-indent: 0;
      cursor: pointer
    }
`

export const StyledDropdownToggle = styled.div`
    overflow: hidden;
    font-size: .875rem;
    font-weight: 600;
    line-height: 1.5;
    color: inherit;
    letter-spacing: .025rem;
    display: block;
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;
`