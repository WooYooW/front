import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './NewsAtom.module.css';

function NewsAtom({ news }) {
  return (
    <div className={styles.card} key={news.NewsId}>
      <h2 className={styles.title}>{news.NewsTitle}</h2>
      <p className={styles.content}>{news.NewsContent}</p>
      <Link to={`/news/${news.NewsId}`}>
        <button type='button' className={styles.btn}>
          <AiOutlineArrowRight className={styles.icon} />
        </button>
      </Link>
    </div>
  );
}

export default NewsAtom;
