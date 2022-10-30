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
      error: '#cb5d5d',
    },

    button: '#3f9ae1',
  },

  media: {
    desktops: '(min-width: 1025px)',
    smallScreens: '(min-width: 769px)',
    tablets: '(min-width: 481px)',
  },
};
