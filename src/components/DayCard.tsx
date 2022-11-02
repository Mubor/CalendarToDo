import React, { FC } from 'react';
import { MonthDataType } from '../types/types';
import styled from 'styled-components';

interface DayType {
  day: MonthDataType;
  rowIndex: number;
}

interface DayCardProps {
  row: boolean;
}

const DayCard: FC<DayType> = ({ day, rowIndex }: DayType): JSX.Element => {
  return (
    <DayCardWrapper row={!rowIndex}>
      {!rowIndex && <Day>{day.dayWeekShort.toUpperCase()}</Day>}
      <DayDate>{day.dateDay}</DayDate>
    </DayCardWrapper>
  );
};

const DayCardWrapper = styled.div<DayCardProps>`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  border: ${({ theme }) => theme.colors.bg.secondary} 1px solid;
  border-top: ${({ row }) => row && 'none'};
`;

const DayDate = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 10px;
`;

const Day = styled(DayDate)`
  padding: 10px 0;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.font.secondary};
`;

export default DayCard;
