import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Choice from './components/Choice/Choice';
import Home from './components/Home/Home';
import Join from './components/Join/Join';
import Login from './components/Login/Login';
import ParentsMain from './components/Parents/Main';
import ChildMain from './components/Child/Main';
import Emotion from './components/Emotion/Emotion';
import Game from './components/Game/Game';
import Article from './components/Article/Article';
import ArticleDetail from './components/Article/ArticleDetail';
import News from './components/News/News';
import NewsDetail from './components/News/NewsDetail';
import LearningRecord from './components/LearningRecord/LearningRecord';

function Router() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='join' element={<Join />} />
      <Route path='choice' element={<Choice />} />
      <Route path='parents' element={<ParentsMain />} />
      <Route path='child' element={<ChildMain />} />
      <Route path='emotion' element={<Emotion />} />
      <Route path='game' element={<Game />} />
      <Route path='article' element={<Article />} />
      <Route path='article/:articleId' element={<ArticleDetail />} />
      <Route path='news' element={<News />} />
      <Route path='news/:newsId' element={<NewsDetail />} />
      <Route path='learningrecord' element={<LearningRecord />} />
    </Routes>
  );
}

export default Router;
