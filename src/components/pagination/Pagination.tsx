import React from 'react';
import PreviousButton from './BeforeButton';
import NextButton from './AfterButton';

// Define a interface para as propriedades do componente Pagination
interface PaginationProps {
  totalPages: number; // Total de páginas disponíveis
  currentPage: number; // Página atual
  setCurrentPage: (page: number) => void; // Função para definir a página atual
}

// Componente de Paginação
const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, setCurrentPage }) => {
  // Função para lidar com o clique nos números das páginas
  function handlePageClick(page: number) {
    // Verifica se a página está dentro dos limites válidos antes de atualizar
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  // Função para renderizar os números das páginas
  function renderPageNumbers() {
    const pageNumbers = []; // Array que armazenará os elementos de página
    let firstPageToShow = Math.max(1, currentPage - 2); // Primeira página a ser mostrada
    let lastPageToShow = Math.min(totalPages, currentPage + 2); // Última página a ser mostrada

    // Garantir que sempre haja 5 páginas na exibição
    if (lastPageToShow - firstPageToShow < 4) {
      firstPageToShow = Math.max(1, lastPageToShow - 4);
      lastPageToShow = Math.min(totalPages, firstPageToShow + 4);
    }

    // Adiciona a primeira página e as reticências iniciais, se necessário
    if (firstPageToShow > 1) {
      pageNumbers.push(
        <PageNumber
          key={1}
          page={1}
          currentPage={currentPage}
          onPageClick={handlePageClick}
        />,
      );
      if (firstPageToShow > 2) {
        pageNumbers.push(<Ellipsis key="start-ellipsis" />);
      }
    }

    // Adiciona os números das páginas entre a primeira e a última
    for (let i = firstPageToShow; i <= lastPageToShow; i++) {
      pageNumbers.push(
        <PageNumber
          key={i}
          page={i}
          currentPage={currentPage}
          onPageClick={handlePageClick}
        />,
      );
    }

    // Adiciona as reticências finais, se necessário
    if (lastPageToShow < totalPages - 1) {
      pageNumbers.push(<Ellipsis key="end-ellipsis" />);
    }
    // Garante que a última página seja sempre exibida
    if (lastPageToShow < totalPages) {
      pageNumbers.push(
        <PageNumber
          key={totalPages}
          page={totalPages}
          currentPage={currentPage}
          onPageClick={handlePageClick}
        />,
      );
    }

    return pageNumbers; // Retorna o array com todos os elementos de página a serem renderizados
  }

  return (
    <div className="flex items-center">
      {/* Botão Anterior */}
      <PreviousButton
        onClick={() => handlePageClick(currentPage - 1)} // Vai para a página anterior
        disabled={currentPage === 1} // Desabilita se estiver na primeira página
      />
      {renderPageNumbers()} {/* Renderiza os números das páginas */}
      {/* Botão Próximo */}
      <NextButton
        onClick={() => handlePageClick(currentPage + 1)} // Vai para a próxima página
        disabled={currentPage === totalPages} // Desabilita se estiver na última página
      />
    </div>
  );
};

// Componente para renderizar um número de página
interface PageNumberProps {
  page: number; // Número da página
  currentPage: number; // Página atual
  onPageClick: (page: number) => void; // Função para lidar com o clique na página
}

// Renderiza um número de página com estilo condicional
const PageNumber: React.FC<PageNumberProps> = ({ page, currentPage, onPageClick }) => (
  <span
    className={`mx-1 px-2 py-1 rounded-full cursor-pointer ${currentPage === page ? `bg-corPrincipal text-white` : `bg-white text-corPrincipal`}`}
    onClick={() => onPageClick(page)} // Chama a função onPageClick com o número da página
  >
    {page}
  </span>
);

// Componente para renderizar reticências
const Ellipsis: React.FC = () => <span className="mx-1">...</span>;

export default Pagination;
