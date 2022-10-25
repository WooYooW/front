import React from 'react';
import ParentsNav from '../Navbar/ParentsNav';
import styles from './LearningRecord.module.css';

function LearningRecord() {
  return (
    <>
      <ParentsNav />
      <div className={styles.container}>
        <h1>학습 기록</h1>
      </div>
    </>
  );
}

export default LearningRecord;
