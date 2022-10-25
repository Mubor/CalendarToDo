import React, { FC } from 'react';
import { MonthDataType } from '../types';
import styled from 'styled-components';

interface DayType {
  day: MonthDataType;
  rowIndex: number;
}

const DayCard: FC<DayType> = ({ day, rowIndex }): JSX.Element => {
  return (
    <DayCardWrapper>
      {!rowIndex && <Day>{day.dayWeekShort.toUpperCase()}</Day>}
      <DayDate>{day.dateDay}</DayDate>
    </DayCardWrapper>
  );
};

const DayCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DayDate = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 10px;
`;

const Day = styled(DayDate)`
  padding: 10px 0;
`;

export default DayCard;
