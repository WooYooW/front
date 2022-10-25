import React from 'react';
import ParentsNav from '../Navbar/ParentsNav';
import styles from './News.module.css';

function News() {
  return (
    <>
      <ParentsNav />
      <div className={styles.container}>
        <h1>뉴스</h1>
      </div>
    </>
  );
}

export default News;
