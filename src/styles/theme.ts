import { ThemeType } from '../types/styles';

export const baseTheme: ThemeType = {
  colors: {
    bg: {
      primary: '#171717',
      secondary: '#444444',
    },

    font: {
      primary: '#EDEDED',
      secondary: '#7E7D7D',
    },

    button: '#6B76BB',
  },

  media: {
    desktops: '(min-width: 1025px)',
    smallScreens: '(min-width: 769px)',
    tablets: '(min-width: 481px)',
  },
};
