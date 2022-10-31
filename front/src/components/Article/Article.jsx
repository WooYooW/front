import React, { useState } from 'react';
import ParentsNav from '../Navbar/ParentsNav';
import styles from './Article.module.css';
import Pagination from '../Pagination/Pagination';
import ArticleAtom from './ArticleAtom';
import { articleList } from '../../common/articledummy';

function Article() {
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = articleList
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((article) => <ArticleAtom key={article.id} article={article} />);

  const pageCount = Math.ceil(articleList.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <ParentsNav />
      <div className={styles.container}>
        <table className={styles.member}>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
          {displayUsers}
        </table>
      </div>
      <Pagination pageCount={pageCount} changePage={changePage} />
    </>
  );
}

export default Article;
