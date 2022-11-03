import { Link, useLocation } from 'react-router-dom';
import React, { FC } from 'react';
import styled from 'styled-components';
import SwitchMonth from './CalendarComponents/SwitchMonth';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { baseTheme } from '../styles/theme';
import { routes } from '../utils/constants';

const LeftBar: FC = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <LeftBarContainer>
      <SwitchMonth />
      <NavLink to={routes.calendar} isCurrentRoute={pathname === routes.calendar}>
        <CalendarMonthIcon
          sx={{ fill: pathname === routes.calendar ? baseTheme.colors.font.secondary : '' }}
        />
        Calendar
      </NavLink>
      <NavLink to={routes.tasks} isCurrentRoute={pathname === routes.tasks}>
        <AssignmentIcon
          sx={{ fill: pathname === routes.tasks ? baseTheme.colors.font.secondary : '' }}
        />
        Tasks
      </NavLink>
      <NavLink to={routes.creation} isCurrentRoute={pathname === routes.creation}>
        <AddCircleIcon
          sx={{ fill: pathname === routes.creation ? baseTheme.colors.font.secondary : '' }}
        />
        Create new task
      </NavLink>
    </LeftBarContainer>
  );
};

interface LocationProps {
  isCurrentRoute: boolean;
}

const LeftBarContainer = styled.div`
  display: none;
  @media (${({ theme }) => theme.media.smallScreens}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding-right: 30px;
  }
`;

const NavLink = styled(Link)<LocationProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  ${({ isCurrentRoute }) => isCurrentRoute && `color: ${baseTheme.colors.font.brightLight};`}
`;

export default LeftBar;
