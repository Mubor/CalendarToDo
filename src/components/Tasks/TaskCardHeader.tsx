import React, { FC } from 'react';
import styled from 'styled-components';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { baseTheme } from '../../styles/theme';

const TaskCardHeader: FC = (): JSX.Element => {
  return (
    <TaskCardHeaderWrapper>
      <TaskCardButton>
        <DoneIcon
          sx={{
            fill: baseTheme.colors.accept,
            backgroundColor: 'transparent',
            '&:hover': {
              fill: baseTheme.colors.font.secondary,
              backgroundColor: baseTheme.colors.accept,
              borderRadius: '2px',
            },
          }}
        />
      </TaskCardButton>
      <TaskCardButton>
        <CloseIcon
          sx={{
            fill: baseTheme.colors.font.error,
            backgroundColor: 'transparent',
            '&:hover': {
              fill: baseTheme.colors.font.secondary,
              backgroundColor: baseTheme.colors.font.error,
              borderRadius: '2px',
            },
          }}
        />
      </TaskCardButton>
    </TaskCardHeaderWrapper>
  );
};

const TaskCardHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background: transparent;
  gap: 6px;
`;

const TaskCardButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export default TaskCardHeader;
