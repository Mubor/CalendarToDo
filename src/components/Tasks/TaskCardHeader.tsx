import React, { FC } from 'react';
import styled from 'styled-components';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { baseTheme } from '../../domain/styles/theme';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../domain/state/store';
// import { setStatus } from '../../domain/state/user';

// typgit adde Id = {
//   id: string;
// };

const TaskCardHeader: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  // const taskChangeStatus = (status) => {
  //   dispatch(setStatus({ payload: { key: id, status: status } }));
  // };

  return (
    <TaskCardHeaderWrapper>
      <TaskCardButton
      // onClick={() => {
      //   taskChangeStatus('done');
      // }}
      >
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
