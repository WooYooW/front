import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Choice from './components/Choice/Choice';
import Home from './components/Home/Home';
import Join from './components/Join/Join';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.bg}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='choice' element={<Choice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
