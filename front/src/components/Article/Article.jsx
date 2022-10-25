import React from 'react';
import ParentsNav from '../Navbar/ParentsNav';
import styles from './Article.module.css';

function Article() {
  return (
    <>
      <ParentsNav />
      <div className={styles.container}>
        <h1>기사</h1>
      </div>
    </>
  );
}

export default Article;
