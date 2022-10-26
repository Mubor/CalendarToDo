import React, { FC, useState, useEffect } from 'react';
import CalendarBoard from '../components/CalendarBoard';
import { getMonthMatrix } from '../utils';
import styled from 'styled-components';
import type { RootState } from '../state/store';
import { useSelector } from 'react-redux';
import SwitchMonth from '../components/SwitchMonth';

const MainPage: FC = (): JSX.Element => {
  const [currentMonth, setCurrentMonth] = useState(getMonthMatrix());
  const currentMonthIndex = useSelector((state: RootState) => state.currentMonth);

  useEffect(() => {
    setCurrentMonth(getMonthMatrix(currentMonthIndex));
  }, [currentMonthIndex]);

  return (
    <MainPageWrapper>
      <SwitchMonth />
      <CalendarBoard monthMatrix={currentMonth} />
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default MainPage;
