import { Link, useLocation } from 'react-router-dom';
import React, { FC } from 'react';
import styled from 'styled-components';
import SwitchMonth from './CalendarComponents/SwitchMonth';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { baseTheme } from '../domain/styles/theme';

const LeftBar: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <LeftBarContainer>
      <SwitchMonth />
      <NavLink to='calendar' isCurrentRoute={pathname === '/main/calendar' || pathname === '/main'}>
        <CalendarMonthIcon
          sx={{
            fill:
              pathname === '/main/calendar' || pathname === '/main'
                ? baseTheme.colors.font.secondary
                : '',
          }}
        />
        Calendar
      </NavLink>
      <NavLink to='tasks' isCurrentRoute={pathname === '/main/tasks'}>
        <AssignmentIcon
          sx={{ fill: pathname === '/main/tasks' ? baseTheme.colors.font.secondary : '' }}
        />
        Tasks
      </NavLink>
      <NavLink to='creation' isCurrentRoute={pathname === '/main/creation'}>
        <AddCircleIcon
          sx={{ fill: pathname === '/main/creation' ? baseTheme.colors.font.secondary : '' }}
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
