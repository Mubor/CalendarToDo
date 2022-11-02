import React, { FC } from 'react';
import styled from 'styled-components';

type PrimaryButtonType = {
  text: string;
};

export const PrimaryButton: FC<PrimaryButtonType> = ({ text }): JSX.Element => {
  return (
    <PrimaryButtonWrapper>
      <PrimaryButtonContainer>{text}</PrimaryButtonContainer>
    </PrimaryButtonWrapper>
  );
};

export const SubmitButton: FC<PrimaryButtonType> = ({ text }): JSX.Element => {
  return (
    <PrimaryButtonWrapper>
      <Submit type='submit' value={text}></Submit>
    </PrimaryButtonWrapper>
  );
};

const PrimaryButtonContainer = styled.button`
  border-radius: 20px;
  font-size: 16px;
  border: ${({ theme }) => theme.colors.button} 2px solid;
  cursor: pointer;
  padding: 10px 30px;
`;

const Submit = styled.input`
  border-radius: 20px;
  font-size: 16px;
  border: ${({ theme }) => theme.colors.button} 2px solid;
  cursor: pointer;
  padding: 10px 30px;
`;

const PrimaryButtonWrapper = styled.div`
  & * {
    transition: background-color 0.5s;
  }

  &:hover > * {
    background-color: ${({ theme }) => theme.colors.button};
    transition: background-color 0.5s;
  }
`;
