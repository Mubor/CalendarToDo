import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-content: center;

  @media (${({ theme }) => theme.media.tablets}) {
    width: 60%;
  }

  @media (${({ theme }) => theme.media.smallScreens}) {
    width: 50%;
  }

  @media (${({ theme }) => theme.media.desktops}) {
    width: 30%;
  }
`;

export const FormName = styled.p`
  font-size: 20px;
  text-align: center;
  padding: 20px 0 0;

  @media (${({ theme }) => theme.media.smallScreens}) {
    padding: 0;
  }
`;

export const FormFooterWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const SignLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.button.primary};
  }
`;
