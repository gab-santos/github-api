import React from "react";

import { Container } from "./styles";

interface PaginationProps {
  handlePagination: {
    previousPage: () => void;
    nextPage: () => void;
  };
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  handlePagination,
  currentPage,
  totalPages,
}) => {
  return (
    <Container>
      <button
        disabled={currentPage <= 1}
        type="button"
        onClick={handlePagination.previousPage}
      >
        Anterior
      </button>
      <strong>
        {currentPage} / {totalPages}
      </strong>
      <button
        disabled={currentPage >= totalPages}
        type="button"
        onClick={handlePagination.nextPage}
      >
        Próxima
      </button>
    </Container>
  );
};

export default Pagination;
