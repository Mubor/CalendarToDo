export interface ThemeType {
  colors: {
    bg: {
      primary: string;
      secondary: string;
    };

    font: {
      primary: string;
      secondary: string;
    };

    button: string;
  };

  media: {
    desktops: string;
    smallScreens: string;
    tablets: string;
  };
}
