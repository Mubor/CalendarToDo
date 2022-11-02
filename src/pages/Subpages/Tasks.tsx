import React, { FC } from 'react';
import styled from 'styled-components';
import TasksNav from '../../components/Tasks/TasksNav';

const Tasks: FC = (): JSX.Element => {
  return (
    <>
      <TasksNav />
      <TaskCardsWrapper>{/* TODO: Add TasksCard component*/}</TaskCardsWrapper>
    </>
  );
};

const TaskCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (${({ theme }) => theme.media.tablets}) {
    gap: 12px;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    gap: 14px;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    gap: 20px;
  }
`;

export default Tasks;
