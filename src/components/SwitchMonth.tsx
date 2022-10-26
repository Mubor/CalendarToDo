import React, { FC } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { switchPreviousMonth, switchNextMonth } from '../state/switchSlice';

const SwitchMonth: FC = (): JSX.Element => {
  const currentMonth = useSelector((state: RootState) => state.currentMonth);
  const dispatch = useDispatch();

  return (
    <SwitchButtonsWrapper>
      <ArrowButtons onClick={() => dispatch(switchPreviousMonth())}>&#8592;</ArrowButtons>
      <div>{dayjs(new Date(dayjs().year(), currentMonth)).format('MMMM YYYY')}</div>
      <ArrowButtons onClick={() => dispatch(switchNextMonth())}>&#8594;</ArrowButtons>
    </SwitchButtonsWrapper>
  );
};

const SwitchButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowButtons = styled.button`
  background-color: transparent;
  border-color: transparent;
  padding: 10px;
  cursor: pointer;
`;

export default SwitchMonth;
