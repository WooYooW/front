import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Choice from './components/Choice/Choice';
import Home from './components/Home/Home';
import Join from './components/Join/Join';
import Login from './components/Login/Login';

function Router() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='join' element={<Join />} />
      <Route path='choice' element={<Choice />} />
    </Routes>
  );
}

export default Router;
