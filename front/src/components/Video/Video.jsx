import React from 'react';
import ParentsNav from '../Navbar/ParentsNav';
import styles from './Video.module.css';

function Video() {
  return (
    <>
      <ParentsNav />
      <div className={styles.container}>
        <h1>영상</h1>
      </div>
    </>
  );
}

export default Video;
