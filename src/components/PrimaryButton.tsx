import React, { FC } from 'react';
import styled from 'styled-components';

type PrimaryButtonType = {
  text: string;
};

const PrimaryButton: FC<PrimaryButtonType> = ({ text }): JSX.Element => {
  return (
    <PrimaryButtonWrapper>
      <PrimaryButtonContainer>{text}</PrimaryButtonContainer>
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

const PrimaryButtonWrapper = styled.div`
  &:hover ${PrimaryButtonContainer} {
    background-color: ${({ theme }) => theme.colors.button};
  }
`;

export default PrimaryButton;
