import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import styled from 'styled-components';
import SwitchMonth from './CalendarComponents/SwitchMonth';
import { PrimaryButton } from './FormComponents/Buttons';

const LeftBar: FC = (): JSX.Element => {
  return (
    <LeftBarContainer>
      <SwitchMonth />
      <Link to='/calendar'>Calendar</Link>
      <Link to='/tasks'>Tasks</Link>
      <Link to='/creation'>Create</Link>

      {/* <PrimaryButton text={'Create'} /> */}
    </LeftBarContainer>
  );
};

const LeftBarContainer = styled.div`
  display: none;
  @media (${({ theme }) => theme.media.smallScreens}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-right: 30px;
  }
`;

export default LeftBar;
