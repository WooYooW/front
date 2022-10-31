import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ParentsNav.module.css';

function ParentsNav() {
  return (
    <nav className={styles.nav}>
      <Link to='/parents'>
        <h1 className={styles.logo}>도담도담</h1>
      </Link>
      <div className={styles.menuContainer}>
        <ul className={styles.menus}>
          <Link to='/article'>
            <li className={styles.menu}>게시판</li>
          </Link>
          <Link to='/news'>
            <li className={styles.menu}>뉴스</li>
          </Link>
          <Link to='/learningrecord'>
            <li className={styles.menu}>학습 기록</li>
          </Link>
        </ul>
        <button className={styles.logoutBtn} type='button'>
          logout
        </button>
      </div>
    </nav>
  );
}

export default ParentsNav;
