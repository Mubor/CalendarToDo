import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import type { RootState } from '../domain/state/store';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Auth } from '../pages/Auth';
import { MainPage } from '../pages/MainPage';

export const App: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/*' index element={<Auth />} />
      <Route path='/main/*' element={<MainPage />} />
    </Routes>
  );
};
