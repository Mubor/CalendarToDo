import React, { FC, useState, useEffect } from 'react';
import CalendarBoard from '../components/CalendarBoard';
import { getMonthMatrix } from '../utils';
import styled from 'styled-components';
import type { RootState } from '../state/store';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import LeftBar from '../components/LeftBar';

const MainPage: FC = (): JSX.Element => {
  const [currentMonth, setCurrentMonth] = useState(getMonthMatrix());
  const currentMonthIndex = useSelector((state: RootState) => state.currentMonth);

  useEffect(() => {
    setCurrentMonth(getMonthMatrix(currentMonthIndex));
  }, [currentMonthIndex]);

  return (
    <MainPageWrapper>
      <Header />
      <MainPageContainer>
        <LeftBar />
        <CalendarBoard monthMatrix={currentMonth} />
      </MainPageContainer>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  padding: 10px 20px;

  @media (${({ theme }) => theme.media.tablets}) {
    padding: 20px 30px;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    padding: 40px;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    padding: 50px;
  }
`;

const MainPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (${({ theme }) => theme.media.smallScreens}) {
    flex-direction: row;
  }
`;

export default MainPage;
