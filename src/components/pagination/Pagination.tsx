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
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={`mx-1 px-2 py-1 rounded-full cursor-pointer ${currentPage === i ? 'bg-corPrincipal text-white' : 'bg-white text-corPrincipal'}`}
          onClick={() => handleClick(i)}
        >
          {i}
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
