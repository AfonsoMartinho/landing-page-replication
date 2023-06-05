import { DOTS, usePagination } from './usePagination';
import { StyledMobilePaginationItem, StyledPaginationArrow, StyledPaginationContainer, StyledPaginationItem } from './Paginmation.styled'

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <StyledPaginationContainer className="pagination-container">
      { (currentPage !== 1) && (
        <StyledPaginationArrow
        onClick={onPrevious}
        $arrow="left" />
      )}
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots" key={index} >&#8230;</li>;
        }

        return (
          <StyledPaginationItem
            $active={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
            key={index}
            >
            {pageNumber}
          </StyledPaginationItem>
        );
      })}

      <StyledMobilePaginationItem>
        {`PAGE ${currentPage} / ${lastPage}`}
      </StyledMobilePaginationItem>
      { (currentPage !== lastPage) && (
        <StyledPaginationArrow
          onClick={onNext}
          $arrow="rigth" />
      )}
    </StyledPaginationContainer>
  );
};

export default Pagination;
