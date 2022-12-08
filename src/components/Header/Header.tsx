import React, { FC, useState } from 'react';
import styled from 'styled-components';
import LiveTimeClock from './LiveTimeClock';
import BurgerButton from './BurgerButton';
import MobileSideMenu from './MobileSideMenu';
import type { RootState } from '../../domain/state/store';
import { useSelector } from 'react-redux';

const Header: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state: RootState) => state.user.currentUser);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);
  return (
    <HeaderWrapper>
      <BurgerButton isActive={isMenuOpen} onClick={handleClick} />
      <MobileSideMenu isActive={isMenuOpen} />
      <HeaderContainer>
        <ProjectName>TaskCalendar</ProjectName>
        <AdditionalDataWrapper>
          <div>{user.login}</div>
          <LiveTimeClock />
        </AdditionalDataWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  font-size: 16px;

  @media (${({ theme }) => theme.media.smallScreens}) {
    gap: 0;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 40px;
  }
`;

const AdditionalDataWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (${({ theme }) => theme.media.smallScreens}) {
    gap: 50px;
  }
`;

const ProjectName = styled.div`
  display: none;

  @media (${({ theme }) => theme.media.smallScreens}) {
    display: block;
  }
`;

export default Header;
