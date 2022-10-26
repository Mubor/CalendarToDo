import React, { FC, useState, useEffect } from 'react';
import CalendarBoard from '../components/CalendarBoard';
import { getMonthMatrix } from '../utils';
import styled from 'styled-components';

const MainPage: FC = (): JSX.Element => {
  const [currentMonth, setCurrentMonth] = useState(getMonthMatrix());

  return (
    <MainPageWrapper>
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
