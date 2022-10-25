import React, { FC } from 'react';
import DayCard from './DayCard';
import { MonthMatrixType, MonthDataType } from '../types';
import styled from 'styled-components';

const CalendarBoard: FC<MonthMatrixType> = ({ monthMatrix }): JSX.Element => {
  return (
    <BoardWrapper>
      {monthMatrix.map((row: MonthDataType[], index: number) => (
        <React.Fragment key={index}>
          {row.map((day: MonthDataType, i: number) => (
            <DayCard day={day} key={i} rowIndex={index} />
          ))}
        </React.Fragment>
      ))}
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div`
  height: 100%;
  flex: 1 1 0;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
`;

export default CalendarBoard;
