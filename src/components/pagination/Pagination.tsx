import React from 'react';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, setCurrentPage }) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
      endPage = Math.min(totalPages, startPage + 4);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <span
          key={1}
          className={`mx-1 px-2 py-1 rounded-full cursor-pointer ${currentPage === 1 ? `bg-corPrincipal text-white` : `bg-white text-corPrincipal`}`}
          onClick={() => handleClick(1)}
        >
          1
        </span>,
      );
      if (startPage > 2) {
        pageNumbers.push(
          <span
            key="start-ellipsis"
            className="mx-1"
          >
            ...
          </span>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={`mx-1 px-2 py-1 rounded-full cursor-pointer ${currentPage === i ? `bg-corPrincipal text-white` : `bg-white text-corPrincipal`}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </span>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span
            key="end-ellipsis"
            className="mx-1"
          >
            ...
          </span>,
        );
      }
      pageNumbers.push(
        <span
          key={totalPages}
          className={`mx-1 px-2 py-1 rounded-full cursor-pointer ${currentPage === totalPages ? `bg-corPrincipal text-white` : `bg-white text-corPrincipal`}`}
          onClick={() => handleClick(totalPages)}
        >
          {totalPages}
        </span>,
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center">
      <PreviousButton
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {renderPageNumbers()}
      <NextButton
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
