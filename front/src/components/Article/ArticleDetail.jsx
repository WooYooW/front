import React from 'react';
import { useParams } from 'react-router-dom';
import { articleList } from '../../common/articledummy';
import ParentsNav from '../Navbar/ParentsNav';
import styles from './ArticleDetail.module.css';

function ArticleDetail() {
  const { articleId } = useParams();
  const data = articleList[Number(articleId) || 0];
  return (
    <>
      <ParentsNav />
      <div className={styles.container}>
        <div className={styles.newContainer}>
          <h2>{data.articleTitle}</h2>
          <p className={styles.info}>
            {data.articleUser} | {data.articleCreatedTime}
          </p>
          <p className={styles.content}>{data.articleContent}</p>
        </div>
      </div>
    </>
  );
}

export default ArticleDetail;
