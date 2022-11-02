export interface ThemeType {
  colors: {
    bg: {
      primary: string;
      secondary: string;
    };

    font: {
      primary: string;
      secondary: string;
      brightLight: string;
      error: string;
    };

    button: {
      primary: string;
    };

    border: {
      primary: string;
    };

    accept: string;
  };

  media: {
    desktops: string;
    smallScreens: string;
    tablets: string;
  };
}
