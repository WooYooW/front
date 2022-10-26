import React from 'react';
import { useParams } from 'react-router-dom';
import ParentsNav from '../Navbar/ParentsNav';
import styles from './NewsDetail.module.css';
import { newsList } from '../../common/newsdummy';

function NewsDetail() {
  const { newsId } = useParams();
  const data = newsList[Number(newsId) || 0];
  return (
    <>
      <ParentsNav />
      <div className={styles.container}>
        <div className={styles.newContainer}>
          <h1>{data.NewsTitle}</h1>
          <p className={styles.info}>
            {data.NewsReporter} | {data.NewsDate}
          </p>
          <p className={styles.content}>{data.NewsContent}</p>
        </div>
      </div>
    </>
  );
}

export default NewsDetail;
