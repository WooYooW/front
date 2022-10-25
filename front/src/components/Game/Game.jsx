import React from 'react';
import ChildNav from '../Navbar/ChildNav';
import styles from './Game.module.css';

function Game() {
  return (
    <>
      <ChildNav />
      <div className={styles.container}>
        <h1>게임</h1>
      </div>
    </>
  );
}

export default Game;
