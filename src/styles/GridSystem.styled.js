import styled from "styled-components";

// The row container component
export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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
    max-width: 100%;
    padding-right: 1%;
    padding-left: 1%;

  /* Define the width based on the column size */
  ${({ colSize }) =>
    colSize &&
    `
    flex-basis: ${(colSize / 12) * 100}% !important;
    max-width: ${(colSize / 12) * 100}% !important;
  `}

  /* Additional styling for different screen sizes */
  ${({ sm }) =>
    sm &&
    `
    @media (min-width: 576px) {
      flex-basis: ${(sm / 12) * 100}% !important;
      max-width: ${(sm / 12) * 100}% !important;
    }
  `}

  ${({ md }) =>
    md &&
    `
    @media (min-width: 768px) {
      flex-basis: ${(md / 12) * 100}% !important;
      max-width: ${(md / 12) * 100}% !important;
    }
  `}

  ${({ lg }) =>
    lg &&
    `
    @media (min-width: 992px) {
      flex-basis: ${(lg / 12) * 100}% !important;
      max-width: ${(lg / 12) * 100}% !important;
    }
  `}

  ${({ xl }) =>
      xl &&
      `
      @media (min-width: 1440px) {
        flex-basis: ${(xl / 12) * 100}% !important;
        max-width: ${(xl / 12) * 100}% !important;
      }
    `}

  /* Offset styling */
  ${({ offsetSm }) =>
    offsetSm &&
    `
    @media (min-width: 576px) {
      margin-left: ${(offsetSm / 12) * 100}% !important;
    }
  `}

  ${({ offsetMd }) =>
    offsetMd &&
    `
    @media (min-width: 768px) {
      margin-left: ${(offsetMd / 12) * 100}% !important;
    }
  `}

  ${({ offsetLg }) =>
      offsetLg &&
      `
      @media (min-width: 992px) {
        margin-left: ${(offsetLg / 12) * 100}% !important;
      }
    `}

  ${({ offsetXl }) =>
    offsetXl &&
    `
    @media (min-width: 1440px) {
      margin-left: ${(offsetXl / 12) * 100}% !important;
    }
  `}
`;
