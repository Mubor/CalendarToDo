import React, { FC, useState } from 'react';
import styled from 'styled-components';
import TaskCardHeader from './TaskCardHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../domain/state/store';

type ID = {
  id: string;
};

const TaskCard: FC<ID> = ({ id }): JSX.Element => {
  const [isBack, setIsBack] = useState(false);
  const task = useSelector((state: RootState) => state.user.currentUser.tasks[id]);

  const handleClick = () => {
    setIsBack(!isBack);
  };

  return (
    <TaskCardWrapper>
      <TaskCardContainer isBack={isBack}>
        <TaskCardHeader />
        <CardFront>
          <TaskCardHeaderWrapper>
            <TaskCardHeader />
          </TaskCardHeaderWrapper>
          <TextItemWrapper onClick={handleClick}>
            <TextItem>{task.name}</TextItem>
          </TextItemWrapper>
        </CardFront>
        <CardBack>
          <TaskCardHeaderWrapper>
            <TaskCardHeader />
          </TaskCardHeaderWrapper>
          <TextItemWrapper onClick={handleClick}>
            <TextItem>{task.start_date.toString()}</TextItem>
            <TextItem>{task.end_date.toString()}</TextItem>
          </TextItemWrapper>
        </CardBack>
      </TaskCardContainer>
    </TaskCardWrapper>
  );
};

interface RotateProp {
  isBack: boolean;
}

const TaskCardWrapper = styled.div`
  width: 130px;
  height: 200px;

  @media (${({ theme }) => theme.media.tablets}) {
    width: 140px;
    height: 220px;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    width: 150px;
    height: 230px;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    width: 160px;
    height: 240px;
  }
`;

const TaskCardContainer = styled.div<RotateProp>`
  transform-style: preserve-3d;
  transition: 0.5s linear 0.1s;
  position: relative;
  width: inherit;
  height: inherit;
  cursor: pointer;

  ${({ isBack }) =>
    isBack &&
    `
    transform: rotateY(180deg);
  `}
`;

const CardItem = styled.div`
  backface-visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  border-radius: 6px;
  padding: 6px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg.secondary};

  @media (${({ theme }) => theme.media.tablets}) {
    padding: 8px;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    padding: 10px;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    padding: 12px;
  }
`;

const CardFront = styled(CardItem)`
  transform: rotateY(0);
`;

const CardBack = styled(CardItem)`
  transform: rotateY(180deg);
`;

const TextItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: transparent;
  flex-grow: 30;
`;

const TextItem = styled.p`
  text-align: center;
  background: transparent;
`;

const TaskCardHeaderWrapper = styled.div`
  flex-grow: 1;
  background-color: transparent;
`;

export default TaskCard;
