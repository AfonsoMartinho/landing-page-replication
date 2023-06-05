import styled from 'styled-components';

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style-type: none;
  text-decoration: none;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.18;


  @media(max-width: ${props => props.theme.breakpoints.xl}) {
    margin-bottom: 5rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 4rem;
  }
`

export const StyledPaginationItem = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  padding: 0.5rem;
  margin: 0.25rem;

  background-color: transparent;
  font-size: .875rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: .025rem;
  color: ${props => props.theme.colors.brand};
  border-radius: 2.625rem;
  display: inline-flex;

  text-align: center;
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
      display: none;
  }

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.brand};
    background-color: ${props => props.theme.colors.hoverBgLight};
  }

  ${({ $active, theme }) => $active && `
    color: ${theme.colors.background};
    background-color: ${theme.colors.brand}
  `}
`

export const StyledPaginationArrow = styled(StyledPaginationItem)`
  display: flex;
  transform: ${({$arrow}) => $arrow === 'left' ? 'rotate(-135deg)' : 'rotate(45deg);'};
  
  ::before {
    position: relative;
    content: '';
    display: inline-block;
    width: 0.3em;
    height: 0.3em;
    border-right: 0.12em solid  ${props => props.theme.colors.brand};
    border-top: 0.12em solid  ${props => props.theme.colors.brand};
  }
  
`

export const StyledMobilePaginationItem = styled.span`
    margin: 0 0.5rem;
    background-color: transparent;
    font-size: .875rem;
    line-height: 1;
    font-weight: 600;
    letter-spacing: .025rem;
    color: ${props => props.theme.colors.brand};
    border-radius: 2.625rem;
    display: inline-flex;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      display: none;
    }
`