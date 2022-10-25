import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './JoinForm.module.css';

function JoinForm() {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} type='button' onClick={goLogin}>
        <AiOutlineClose className={styles.closeIcon} />
      </button>
      <h1 className={styles.title}>회원가입</h1>
      <form className={styles.form} action=''>
        <input
          className={styles.inputBox}
          placeholder='아이디를 입력해주세요'
          type='text'
        />
        <input
          className={styles.inputBox}
          placeholder='비밀번호를 입력해주세요'
          type='password'
        />
        <input
          className={styles.inputBox}
          placeholder='비밀번호 확인'
          type='password'
        />
        <input
          className={styles.startBtn}
          type='submit'
          onClick={goLogin}
          value='가입하기'
        />
      </form>
    </div>
  );
}
export default JoinForm;
