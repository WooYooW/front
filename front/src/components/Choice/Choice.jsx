import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Choice.module.css';
import child from '../../img/child.png';
import parents from '../../img/parents.png';

function Choice() {
  const navigate = useNavigate();
  const goParents = () => {
    navigate('/');
  };
  const goChild = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>대상을 선택해주세요</h1>
      <div className={styles.boxContainer}>
        <button type='button' className={styles.box1} onClick={goParents}>
          <img src={child} className={styles.image} alt='' />
        </button>
        <button type='button' className={styles.box2} onClick={goChild}>
          <img src={parents} className={styles.image} alt='' />
        </button>
      </div>
      <div className={styles.introContainer}>
        <span className={styles.intro}>아동</span>
        <span className={styles.intro}>부모님</span>
      </div>
    </div>
  );
}

export default Choice;
