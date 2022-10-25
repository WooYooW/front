import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <button className={styles.btn} type='button' onClick={onClick}>
          🐚 시작하기 🐚
        </button>
      </div>
    </div>
  );
}

export default Home;
