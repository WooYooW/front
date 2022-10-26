import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

function Pagenation({ pageCount, changePage }) {
  return (
    <div className={styles.container}>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={changePage}
        previousLabel='<'
        nextLabel='>'
        containerClassName={styles.paginationBtns}
        previousClassName={styles.previousBtns}
        nextLinkClassName={styles.nextBttn}
        activeClassName={styles.paginationActive}
      />
    </div>
  );
}

export default Pagenation;
