import React from 'react';
import ChildNav from '../Navbar/ChildNav';
import styles from './Main.module.css';

function Main() {
  return (
    <>
      <ChildNav />
      <div className={styles.container}>
        <h1>아동 메인</h1>
      </div>
    </>
  );
}

export default Main;
