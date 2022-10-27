import React, { FC } from 'react';
import DayCard from './DayCard';
import { MonthMatrixType, MonthDataType } from '../types/types';
import styled from 'styled-components';
import SwitchMonth from './SwitchMonth';

const CalendarBoard: FC<MonthMatrixType> = ({ monthMatrix }): JSX.Element => {
  return (
    <>
      <SwitchMonthWrapper>
        <SwitchMonth />
      </SwitchMonthWrapper>
      <BoardContainer>
        {monthMatrix.map((row: MonthDataType[], index: number) => (
          <React.Fragment key={index}>
            {row.map((day: MonthDataType, i: number) => (
              <DayCard day={day} key={i} rowIndex={index} />
            ))}
          </React.Fragment>
        ))}
      </BoardContainer>
    </>
  );
};

const BoardContainer = styled.div`
  height: 100%;
  flex: 1 1 0;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
`;

const SwitchMonthWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 4px;

  @media (${({ theme }) => theme.media.tablets}) {
    padding-bottom: 10px;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    display: none;
  }
`;

export default CalendarBoard;
