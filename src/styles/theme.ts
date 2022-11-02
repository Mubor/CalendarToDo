import { ThemeType } from '../types/styles';

// previous primary font color is '#EDEDED' and secondary bg color is '#444444'
export const baseTheme: ThemeType = {
  colors: {
    bg: {
      primary: '#171717',
      secondary: '#262626',
    },

    font: {
      primary: '#7E7D7D',
      secondary: '#C7C7C7',
      brightLight: '#EDEDED',
      error: '#CB5D5D',
    },

    button: {
      primary: '#3f9AE1',
    },

    border: {
      primary: '#444444',
    },

    accept: '#32965C',
  },

  media: {
    desktops: '(min-width: 1025px)',
    smallScreens: '(min-width: 769px)',
    tablets: '(min-width: 481px)',
  },
};
