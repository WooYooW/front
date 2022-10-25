import React from 'react';
import ChildNav from '../Navbar/ChildNav';
import styles from './Emotion.module.css';

function Emotion() {
  return (
    <>
      <ChildNav />
      <div className={styles.container}>
        <h1>감정학습</h1>
      </div>
    </>
  );
}

export default Emotion;
