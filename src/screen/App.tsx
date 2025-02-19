import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScreen from './mainScreen/MainScreen';
import QuizScreen from './mainScreen/QuizScreen';
import urls from '../services/utils/urls';

export default function AppComponent() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path={urls.Quiz} element={<QuizScreen />} />
    </Routes>
  );
}
