import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './LoginForm.module.css';

function LoginForm() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  const goJoin = () => {
    navigate('/join');
  };
  const goChoice = () => {
    navigate('/choice');
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} type='button' onClick={goHome}>
        <AiOutlineClose className={styles.closeIcon} />
      </button>
      <h1 className={styles.title}>로그인</h1>
      <form className={styles.form} action=''>
        <input
          className={styles.inputBox}
          placeholder='아이디를 입력해주세요'
        />
        <input
          className={styles.inputBox}
          placeholder='비밀번호를 입력해주세요'
        />
        <div className={styles.btnContainer}>
          <button className={styles.joinBtn} type='button' onClick={goJoin}>
            회원가입 하기
          </button>
          <input
            className={styles.startBtn}
            type='submit'
            onClick={goChoice}
            value='시작하기'
          />
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
