import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChildNav.module.css';

function ChildNav() {
  return (
    <nav className={styles.nav}>
      <Link to='/child'>
        <h1 className={styles.logo}>서비스 이름</h1>
      </Link>
      <div className={styles.menuContainer}>
        <ul className={styles.menus}>
          <Link to='/emotion'>
            <li className={styles.menu}>감정 학습</li>
          </Link>
          <Link to='/game'>
            <li className={styles.menu}>게임</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default ChildNav;
