import React, { FC } from 'react';
import styled from 'styled-components';

const TasksNav: FC = (): JSX.Element => {
  return (
    <TaskNavComponent>
      <p>Planned</p>
      <p>Done</p>
      <p>In Progress</p>
      <p>Failed</p>
    </TaskNavComponent>
  );
};

const TaskNavComponent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  padding-top: 20px;

  @media (${({ theme }) => theme.media.tablets}) {
    justify-content: center;
    gap: 20px;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    padding-top: 0;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    gap: 60px;
    padding-bottom: 26px;
  }
`;

export default TasksNav;
