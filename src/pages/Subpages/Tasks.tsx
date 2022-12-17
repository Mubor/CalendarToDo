import React, { FC } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import TasksWrapper from '../../components/Tasks/TasksWrapper';

const Tasks: FC = (): JSX.Element => {
  return (
    <>
      <TaskNav>
        <Link to='planned'>Planned</Link>
        <Link to='current'>In Progress</Link>
        <Link to='done'>Done</Link>
        <Link to='failed'>Failed</Link>
      </TaskNav>

      <Routes>
        <Route index element={<TasksWrapper status='planned' />} />
        <Route path='planned' element={<TasksWrapper status='planned' />} />
        <Route path='current' element={<TasksWrapper status='current' />} />
        <Route path='done' element={<TasksWrapper status='done' />} />
        <Route path='failed' element={<TasksWrapper status='failed' />} />
      </Routes>
    </>
  );
};

const TaskNav = styled.div`
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

export default Tasks;
