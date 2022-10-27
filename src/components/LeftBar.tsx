import React, { FC } from 'react';
import styled from 'styled-components';
import SwitchMonth from './SwitchMonth';
import PrimaryButton from './PrimaryButton';

const LeftBar: FC = (): JSX.Element => {
  return (
    <LeftBarContainer>
      <SwitchMonth />
      <div>Calendar</div>
      <div>Task</div>
      <PrimaryButton text={'Create'} />
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
