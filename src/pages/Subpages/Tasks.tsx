import React, { FC } from 'react';
import styled from 'styled-components';
import TasksNav from '../../components/Tasks/TasksNav';
import { useSelector } from 'react-redux';
import { RootState } from '../../domain/state/store';
import TaskCard from '../../components/Tasks/TaskCard';

const Tasks: FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const taskKeys = Object.keys(user.tasks);

  return (
    <>
      <TasksNav />
      <TaskCardsWrapper>
        {taskKeys.map((key: string, index: number) => {
          return (
            <React.Fragment key={index}>
              <TaskCard id={key} />
            </React.Fragment>
          );
        })}
      </TaskCardsWrapper>
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
