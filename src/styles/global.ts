import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../types/styles';

export default createGlobalStyle<{ theme: ThemeType }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    color: ${({ theme }) => theme.colors.font.primary};
  }
`;
