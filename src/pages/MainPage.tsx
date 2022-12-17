import React, { FC, useState, useEffect } from 'react';
import CalendarBoard from './Subpages/CalendarBoard';
import { getMonthMatrix } from '../utils/calendarMatrix';
import styled from 'styled-components';
import type { RootState } from '../domain/state/store';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import LeftBar from '../components/LeftBar';
import TaskForm from './Subpages/TaskForm';
import { Route, Routes } from 'react-router-dom';
import Tasks from './Subpages/Tasks';

export const MainPage: FC = (): JSX.Element => {
  const [currentMonth, setCurrentMonth] = useState(getMonthMatrix());
  const currentMonthIndex = useSelector((state: RootState) => state.switch.currentMonth);

  useEffect(() => {
    setCurrentMonth(getMonthMatrix(currentMonthIndex));
  }, [currentMonthIndex]);

  return (
    <MainPageWrapper>
      <Header />
      <MainPageContainer>
        <MainPageItemLeft>
          <LeftBar />
        </MainPageItemLeft>

        <MainPageContent>
          <Routes>
            <Route index element={<CalendarBoard monthMatrix={currentMonth} />} />
            <Route path='calendar' element={<CalendarBoard monthMatrix={currentMonth} />} />
            <Route path='tasks/*' element={<Tasks />} />
            <Route path='creation' element={<TaskForm />} />
          </Routes>
        </MainPageContent>
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

const MainPageItemLeft = styled.div`
  flex-grow: 1;
`;

const MainPageContent = styled.div`
  flex-grow: 30;

  @media (${({ theme }) => theme.media.smallScreens}) {
    width: 70%;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    width: 80%;
  }
`;

export default MainPage;
