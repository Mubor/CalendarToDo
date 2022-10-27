import React, { FC } from 'react';
import styled from 'styled-components';
import { ActiveType } from '../../types/types';

type BurgerButtonType = {
  isActive: boolean;
  onClick: () => void;
};

const BurgerButton: FC<BurgerButtonType> = ({ isActive, onClick }): JSX.Element => {
  return (
    <BurgerButtonContainer onClick={onClick} isActive={isActive}>
      <BurgerButtonItems />
      <BurgerButtonItems />
      <BurgerButtonItems />
    </BurgerButtonContainer>
  );
};

const BurgerButtonContainer = styled.button<ActiveType>`
  cursor: pointer;
  border: none;
  background: transparent;
  z-index: 300;
  display: block;

  position: relative;
  top: 0;
  right: 0;

  div:nth-child(1) {
    transform: ${({ isActive }) => (isActive ? 'translate(0, 11px) rotate(-45deg)' : 'rotate(0)')};
  }

  div:nth-child(2) {
    opacity: ${({ isActive }) => (isActive ? 0 : 1)};
  }

  div:nth-child(3) {
    transform: ${({ isActive }) => (isActive ? 'translate(0, -11px) rotate(45deg)' : 'rotate(0)')};
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    display: none;
  }
`;

const BurgerButtonItems = styled.div`
  width: 34px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.font.primary};
  margin: 8px 0;
  transition: 0.4s;
  border-radius: 8px;
`;

export default BurgerButton;
