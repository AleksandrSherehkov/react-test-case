import { useState } from 'react';

export const useLoadMore = initialPerPage => {
  const [perPage, setPerPage] = useState(initialPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const loadMore = () => {
    setPerPage(prevPerPage => prevPerPage + initialPerPage);
    setCurrentPage(prevPage => prevPage + 1);
  };

  return { perPage, currentPage, loadMore };
};
