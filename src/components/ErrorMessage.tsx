import React, { FC } from 'react';
import styled from 'styled-components';

type ErrorMessage = {
  message: string;
};

const ErrorMessage: FC<ErrorMessage> = ({ message }): JSX.Element => {
  return <ErrorMessageWrapper>{message}</ErrorMessageWrapper>;
};

const ErrorMessageWrapper = styled.div`
  padding: 10px 0 0 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.font.error};
`;

export default ErrorMessage;
