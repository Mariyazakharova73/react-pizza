import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import {IPaginationProps } from '../../types/types'

const Pagination: React.FC<IPaginationProps> = ({ currentPage, onChangePage  })=> {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(evt) => onChangePage(evt.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      forcePage={currentPage - 1}
    />
  );
}

export default Pagination;
