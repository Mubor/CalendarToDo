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
      <button onClick={() => dispatch(switchPreviousMonth())}>&#8592;</button>
      <div>{dayjs(new Date(dayjs().year(), currentMonth)).format('MMMM YYYY')}</div>
      <button onClick={() => dispatch(switchNextMonth())}>&#8594;</button>
    </SwitchButtonsWrapper>
  );
};

const SwitchButtonsWrapper = styled.div`
  display: flex;
`;

export default SwitchMonth;
