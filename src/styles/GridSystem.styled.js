import styled from "styled-components";

// The row container component
export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-right: -1%;
  margin-left: -1%;

  /* justify-content property of the row */
  ${({ justifyContent }) =>
    justifyContent &&
    `
    justify-content: ${justifyContent};
  `}
`;

// Define the grid item component
export const StyledCol = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    position: relative;
    width: 100%;
    max-width: 100%;
    padding-right: 1%;
    padding-left: 1%;

  /* Define the width based on the column size */
  ${({ colSize }) =>
    colSize &&
    `
    flex: 0 0 ${(colSize / 12) * 100}% !important;
    max-width: ${(colSize / 12) * 100}% !important;
  `}

  /* Additional styling for different screen sizes */
  ${({ sm, theme }) => 
    sm &&
    `
    @media (min-width: ${theme.breakpoints.sm}) {
      flex: 0 0 ${(sm / 12) * 100}% !important;
      max-width: ${(sm / 12) * 100}% !important;
    }
  `}

  ${({ md, theme }) =>
    md &&
    `
    @media (min-width: ${ theme.breakpoints.md}) {
      flex: 0 0 ${(md / 12) * 100}% !important;
      max-width: ${(md / 12) * 100}% !important;
    }
  `}

  ${({ lg, theme }) =>
    lg &&
    `
    @media (min-width: ${ theme.breakpoints.lg}) {
      flex: 0 0 ${(lg / 12) * 100}% !important;
      max-width: ${(lg / 12) * 100}% !important;
    }
  `}

  ${({ xl, theme }) =>
      xl &&
      `
      @media (min-width: ${ theme.breakpoints.xl}) {
        flex: 0 0 ${(xl / 12) * 100}% !important;
        max-width: ${(xl / 12) * 100}% !important;
      }
    `}

  ${({ xxl, theme }) =>
        xxl &&
        `
        @media (min-width:${ theme.breakpoints.xxl}) {
          flex: 0 0 ${(xxl / 12) * 100}% !important;
          max-width: ${(xxl / 12) * 100}% !important;
        }
      `}

  /* Offset styling */
  ${({ offsetSm, theme }) =>
    offsetSm &&
    `
    @media (min-width: ${ theme.breakpoints.sm}) {
      margin-left: ${(offsetSm / 12) * 100}% !important;
    }
  `}

  ${({ offsetMd, theme }) =>
    offsetMd &&
    `
    @media (min-width: ${ theme.breakpoints.md}) {
      margin-left: ${(offsetMd / 12) * 100}% !important;
    }
  `}

  ${({ offsetLg, theme }) =>
      offsetLg &&
      `
      @media (min-width: ${ theme.breakpoints.lg}) {
        margin-left: ${(offsetLg / 12) * 100}% !important;
      }
    `}

  ${({ offsetXl, theme }) =>
    offsetXl &&
    `
    @media (min-width: ${ theme.breakpoints.xl}) {
      margin-left: ${(offsetXl / 12) * 100}% !important;
    }
  `}

${({ offsetXxl, theme }) =>
    offsetXxl &&
    `
    @media (min-width: ${ theme.breakpoints.xxl}) {
      margin-left: ${(offsetXxl / 12) * 100}% !important;
    }
  `}
`;
