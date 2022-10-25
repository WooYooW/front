import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Choice from './components/Choice/Choice';
import Home from './components/Home/Home';
import Join from './components/Join/Join';
import Login from './components/Login/Login';
import ParentsMain from './components/Parents/Main';
import ChildMain from './components/Child/Main';
import Emotion from './components/Emotion/Emotion';
import Game from './components/Game/Game';
import Article from './components/Article/Article';
import News from './components/News/News';
import Video from './components/Video/Video';
import LearningRecord from './components/LearningRecord/LearningRecord';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.bg}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/choice' element={<Choice />} />
          <Route path='/parents' element={<ParentsMain />} />
          <Route path='/child' element={<ChildMain />} />
          <Route path='/emotion' element={<Emotion />} />
          <Route path='/game' element={<Game />} />
          <Route path='/article' element={<Article />} />
          <Route path='/news' element={<News />} />
          <Route path='/video' element={<Video />} />
          <Route path='/learningrecord' element={<LearningRecord />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
