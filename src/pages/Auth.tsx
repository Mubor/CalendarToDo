import React, { FC } from 'react';
import styled from 'styled-components';

import { Route, Routes } from 'react-router-dom';
import { SignIn } from './Subpages/SignIn';
import { SignUp } from './Subpages/SignUp';

export const Auth: FC = (): JSX.Element => {
  return (
    <AuthWrapper>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
