import React, { useState } from 'react';
import styles from './News.module.css';
import { newsList } from '../../common/newsdummy';
import Pagination from '../Pagination/Pagination';
import ParentsNav from '../Navbar/ParentsNav';
import NewsAtom from './NewsAtom';

function News() {
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = newsList
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((news) => <NewsAtom key={news.id} news={news} />);

  const pageCount = Math.ceil(newsList.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <ParentsNav />
      <div className={styles.container}>
        <div className={styles.cardContainer}>{displayUsers}</div>
        <Pagination pageCount={pageCount} changePage={changePage} />
      </div>
    </>
  );
}

export default News;
