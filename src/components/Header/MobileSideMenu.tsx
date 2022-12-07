import React, { FC } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../FormComponents/Buttons';
import { ActiveType } from '../../domain/types/types';

const MobileSideMenu: FC<ActiveType> = ({ isActive }): JSX.Element => {
  return (
    <MobileSideMenuContainer isActive={isActive}>
      <MobileSideMenuItems>Calendar</MobileSideMenuItems>
      <MobileSideMenuItems>Tasks</MobileSideMenuItems>
      <PrimaryButton text={'Create'} />
    </MobileSideMenuContainer>
  );
};

const MobileSideMenuContainer = styled.nav<ActiveType>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  padding-top: 80px;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.border.secondary}
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: ${({ isActive }) => (isActive ? 'translateX(0)' : 'translateX(-100%)')};
`;

const MobileSideMenuItems = styled.div`
  font-size: 18px;
`;

export default MobileSideMenu;
