import React from 'react';
import ChildNav from '../Navbar/ChildNav';
import styles from './Emotion.module.css';
import FaceCam from './FaceCam';

function Emotion() {
  return (
    <>
      <ChildNav />
      <div className={styles.container}>
        <h1>감정학습</h1>
        <FaceCam />
      </div>
    </>
  );
}

export default Emotion;
