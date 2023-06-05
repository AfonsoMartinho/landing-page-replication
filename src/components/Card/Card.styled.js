import styled from 'styled-components';

export const StyledCard = styled.div`
  margin-bottom: 2rem;
  
  &:hover {
    cursor: pointer;
    img {
      transition: 0.3s ease all;
      transform: scale(1.08);
    }
    .card__title {
      color:  ${props => props.theme.colors.brand};
    }
  }
`;

export const StyledCardLink = styled.a`
  text-decoration: none;
  transition: color 150ms ease-out;
  background-color: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.brand};
`;

export const StyledCardMedia = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  transition: 0.4s ease all;
  margin-bottom: 16px;
`;

export const StyleCardImage = styled.img`
  border-style: none;
  display: inline-block;
  max-width: 100%;
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

export const StyleCardLabel = styled.p`
  display: inline-block;
  color: ${props => props.theme.colors.brand};
  font-weight: 600;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.label.xs};
  line-height: 1.5;
  letter-spacing: .01875rem;
  margin-top: 0;
  margin-bottom: 0.25rem;


  @media(min-width: ${props => props.theme.breakpoints.md}) {
    font-size:${props => props.theme.fontSizes.label.md};
    letter-spacing: .025rem;
  }

  @media(min-width: ${props => props.theme.breakpoints.xxl}) {
    font-size: ${props => props.theme.fontSizes.label.xxl};
    letter-spacing: .025rem;
  }
`;

export const StyledCardH5 = styled.h5`
    color: ${props => props.theme.colors.bg};
    font-weight: 700;
    line-height: 1.18;
    font-size: 1.125rem;
    margin-top: 0;
    margin-bottom: 0;

    @media(min-width: ${props => props.theme.breakpoints.lg}) {
      font-size:calc(.4464285714vw + 13.5714285714px)
    }

    @media(min-width:${props => props.theme.breakpoints.xl}) {
      font-size:calc(.4166666667vw + 14px)
    }

    @media(min-width: ${props => props.theme.breakpoints.xxl}) {
      font-size:1.375rem
    }
`