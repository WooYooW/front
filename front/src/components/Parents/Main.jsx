import React from 'react';
import ParentsNav from '../Navbar/ParentsNav';
import styles from './Main.module.css';

function Main() {
  return (
    <>
      <ParentsNav />
      <div className={styles.container}>
        <h1>부모 공간 메인</h1>
      </div>
    </>
  );
}

export default Main;
