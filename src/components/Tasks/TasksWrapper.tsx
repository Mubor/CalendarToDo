import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../domain/state/store';
import TaskCard from './TaskCard';

type WrapperType = {
  status: string;
};

const TasksWrapper: FC<WrapperType> = ({ status }): JSX.Element => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const tasks = user.tasks;
  const tasksByStatus = {};

  for (const key in tasks) {
    if (tasks[key].status === status) {
      tasksByStatus[key] = tasks[key];
    }
  }

  const tasksByStatusKeys = Object.keys(tasksByStatus);

  return (
    <TaskCardsWrapper>
      {tasksByStatusKeys.map((key: string, index: number) => {
        return (
          <React.Fragment key={index}>
            <TaskCard id={key} />
          </React.Fragment>
        );
      })}
    </TaskCardsWrapper>
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

export default TasksWrapper;
