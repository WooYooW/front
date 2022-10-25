import React from 'react';
import styles from './Login.module.css';
import LoginForm from './LoginForm';

function Login() {
  return (
    <div className={styles.bg}>
      <LoginForm />
    </div>
  );
}

export default Login;
